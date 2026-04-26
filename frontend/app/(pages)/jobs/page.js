"use client";
import JobCard from "@/app/components/JobCard";
import { useJapaStore } from "@/app/store/store";
import GradientText from "@/app/components/GradientText";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Skeleton } from "@mui/material";

const Jobs = () => {
  const {
    jobs,
    findJobs,
    limit,
    technologies,
    types,
    categories,
    yoe,
    fetchTechnologies,
    fetchTypes,
    fetchCategories,
    fetchYOE,
    loading,
  } = useJapaStore((state) => ({
    jobs: state.jobs,
    findJobs: state.findJobs,
    limit: state.limit,
    technologies: state.technologies,
    types: state.types,
    categories: state.categories,
    yoe: state.yoe,
    fetchTechnologies: state.fetchJobTechnologies,
    fetchTypes: state.fetchJobTypes,
    fetchCategories: state.fetchJobCategories,
    fetchYOE: state.fetchYOE,
    loading: state.loading,
  }));

  const [fetchComplete, setFetchComplete] = useState(false);
  const [currentLimit, setCurrentLimit] = useState(20);

  useEffect(() => {
    const fetchJobs = async () => {
      await findJobs({ limit: currentLimit });
      setFetchComplete(true);
    };
    fetchJobs();
    Aos.init({ once: true });
  }, [findJobs, currentLimit]);

  useEffect(() => {
    fetchTechnologies();
    fetchTypes();
    fetchCategories();
    fetchYOE();
  }, [fetchTypes, fetchCategories, fetchTechnologies, fetchYOE]);

  const showMoreJobs = () => {
    setCurrentLimit((prevLimit) => prevLimit + 20);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const options = technologies.map((technology) => ({
    value: technology.name,
    label: technology.name,
  }));

  const yearsOfExperience = yoe.map((year) => `${year.name} years`);

  const [dropDown, setDropDown] = useState(false);

  const handleToggle = () => {
    setDropDown(!dropDown);
  };

  const onSubmit = (data) => {
    const { jobTitle, jobLocation, jobType } = data;
    findJobs({ location: jobLocation, title: jobTitle, type: jobType, limit });
  };

  const [filters, setFilters] = useState({
    technology: "",
    category: "",
    experience: "",
    type: "",
  });

  const resetFilter = () => {
    // Reset filters to their default values
    setFilters({
      technology: "",
      category: "",
      experience: "",
      type: "",
    });

    // Call findJobs with the reset filters
    findJobs({
      technology: "",
      category: "",
      experience: "",
      type: "",
      limit,
    });
  };

  const handleCheckboxChange = (setter, value, stateKey) => {
    setter((prevFilters) => {
      const newFilters = { ...prevFilters, [stateKey]: value };

      // Call findJobs with all the current filters
      findJobs({ ...newFilters, limit });

      return newFilters;
    });
  };

  const handleSelectChange = (selectedOption) => {
    const value = selectedOption?.value;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, technology: value };

      // Call findJobs with all the current filters
      findJobs({ ...newFilters, limit });

      return newFilters;
    });
  };

  const [dataLoaded, setDataLoaded] = useState(false);
  const categoriesData = categories.map((category) => category.name);

  useEffect(() => {
    if (categoriesData.length > 0) {
      setDataLoaded(true); // Set true when data is fully loaded
    }
  }, [categoriesData.length]);

  const FilterBox = ({ text, onFilterSelect, value }) => (
    <button
      onClick={() => onFilterSelect(value)}
      className="bg-lightPurple w-fit px-[10px] py-2 text-primary text-sm rounded-md"
    >
      {text}
    </button>
  );

  const handleFilterSelect = (category) => {
    findJobs({ category, limit });
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#F5F5F5" : "white",
      color: state.isFocused ? "#333" : "#666",
      backgroundColor: state.isSelected
        ? "#D4D4D4"
        : state.isFocused
        ? "#F5F5F5"
        : "white",
      color: state.isSelected ? "#000" : state.isFocused ? "#333" : "#666",
      "&:hover": {
        backgroundColor: "#E0E0E0",
        color: "#333",
      },
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
      borderColor: state.isFocused ? "#ccc" : provided.borderColor,
      "&:hover": {
        borderColor: "#aaa",
      },
      outline: "none",
    }),
    input: (provided) => ({
      ...provided,
      outline: "none",
      boxShadow: "none",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#f0f0f0",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#333",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#666",
      "&:hover": {
        backgroundColor: "#d4d4d4",
        color: "#333",
      },
    }),
  };

  const Filter = ({ display }) => (
    <div
      className={`tablet:w-[350px] h-fit bg-white px-6 py-5 tablet:rounded-xl shadow-md ${display}`}
    >
      <div className="text-xl font-bold mb-7 flex items-center justify-between">
        Filters{" "}
        <div
          className="font-normal text-sm underline cursor-pointer"
          onClick={resetFilter}
        >
          Reset
        </div>
        {/* <Image
          src={"/cancel.svg"}
          alt={"close"}
          height={14}
          width={14}
          onClick={resetFilter}
        /> */}
      </div>
      <div className="flex flex-col gap-3 mb-8">
        <p className="text-sm font-bold flex justify-between items-center">
          Job Type
        </p>
        <div className="flex flex-col gap-3 text-sm">
          {loading ? (
            <Skeleton />
          ) : (
            types.map((jobType, index) => (
              <div className="flex justify-between items-center" key={index}>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    value={filters.type}
                    checked={filters.type === jobType.name}
                    onChange={() =>
                      handleCheckboxChange(setFilters, jobType.name, "type")
                    }
                    className="h-[19px] w-[19px] rounded-lg accent-primary focus:border-0 focus:outline-0"
                  />
                  <label
                    className="text-textDefault text-opacity-80"
                    htmlFor={jobType.name}
                  >
                    {jobType.name}
                  </label>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-8">
        <p className="text-sm font-bold flex justify-between items-center">
          Job Category
        </p>
        <div className="flex flex-col gap-3 text-sm">
          {loading ? (
            <Skeleton />
          ) : (
            categories.map((jobCategory, index) => (
              <div className="flex justify-between items-center" key={index}>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    value={filters.category}
                    checked={filters.category === jobCategory.name}
                    onChange={() =>
                      handleCheckboxChange(
                        setFilters,
                        jobCategory.name,
                        "category"
                      )
                    }
                    className="h-[19px] w-[19px] rounded-lg accent-primary focus:border-0 focus:outline-0"
                  />
                  <label
                    className="text-textDefault text-opacity-80"
                    htmlFor={jobCategory.name}
                  >
                    {jobCategory.name}
                  </label>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-8">
        <p className="text-sm font-bold flex justify-between items-center">
          Technologies used
        </p>
        {loading ? (
          <Skeleton />
        ) : (
          <Select
            options={options}
            value={options.find(
              (option) => option.value === filters.technology
            )}
            onChange={handleSelectChange}
            styles={customStyles}
            placeholder="Select a technology..."
            className="basic-single-select text-sm"
            classNamePrefix="select"
            isSearchable
          />
        )}
      </div>
      <div className="flex flex-col gap-3 mb-8">
        <p className="text-sm font-bold flex justify-between items-center">
          Years Required
        </p>
        <div className="flex flex-col gap-3 text-sm">
          {loading ? (
            <Skeleton />
          ) : (
            yearsOfExperience.map((years, index) => (
              <div className="flex justify-between items-center" key={index}>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    value={filters.experience}
                    checked={filters.experience === years}
                    onChange={() =>
                      handleCheckboxChange(setFilters, years, "experience")
                    }
                    className="h-[19px] w-[19px] rounded-lg accent-primary focus:border-0 focus:outline-0"
                  />
                  <label
                    className="text-textDefault text-opacity-80"
                    htmlFor={years}
                  >
                    {years}
                  </label>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[400px] tablet:min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-purple-50 to-pink-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 tablet:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm text-primary font-medium">💼 Find Your Dream Job</span>
          </div>
          
          <h1 className="text-4xl tablet:text-5xl pc:text-6xl font-bold text-textDefault leading-tight mb-6 max-w-4xl mx-auto">
            Discover <GradientText>Opportunities</GradientText> That Match Your Skills
          </h1>
          
          <p className="text-lg tablet:text-xl text-textNeutral mb-8 leading-relaxed max-w-2xl mx-auto">
            Browse thousands of job listings from top companies looking for talented professionals like you.
          </p>
        </div>
      </section>

      {/* Search & Filters Section */}
      <section className="flex flex-col gap-10 pt-12 tablet:pt-16 pb-20 bg-white tablet:px-[64px] px-[15px]">
        {/* upper layout */}
        <div className="flex flex-col gap-12">
        <form
          className="rounded-l-lg flex flex-col tablet:flex-row h-full tablet:h-16 shadow-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" tablet:bg-white flex flex-col gap-0 tablet:flex-row w-full h-full">
            <div className="flex items-center gap-2 border-b tablet:border-b-0 tablet:border-r pl-3 tablet:pl-4 bg-transparent w-full h-full py-2 tablet:py-0 rounded-none bg-white tablet:bg-transparent shadow-lg tablet:shadow-none ">
              <div className="min-w-[18px]">
                <Image
                  src={"/search.svg"}
                  height={18}
                  width={18}
                  layout="responsive"
                  alt=""
                />
              </div>
              <input
                type="text"
                placeholder="UX Designer"
                {...register("jobTitle")}
                className="text-base bg-transparent border-none w-[270px] tablet:w-fit h-full focus:border-0 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 border-b tablet:border-b-0 tablet:border-r pl-3 tablet:pl-4 bg-transparent w-full h-full py-2 tablet:py-0 rounded-none bg-white tablet:bg-transparent shadow-lg tablet:shadow-none">
              <div className="min-w-[18px]">
                <Image
                  src={"/location.svg"}
                  height={18}
                  width={18}
                  layout="responsive"
                  alt=""
                />
              </div>
              <input
                type="text"
                placeholder="New York, USA"
                {...register("jobLocation")}
                className="text-base bg-transparent border-none w-[270px] tablet:w-fit  h-full focus:border-0 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 pl-3 tablet:pl-4 bg-transparent w-full h-full py-2 tablet:py-0 px-2 tablet:px-0 rounded-none bg-white tablet:bg-transparent shadow-lg tablet:shadow-none">
              <div className="min-w-[18px]">
                <Image
                  src={"/jobType.svg"}
                  height={18}
                  width={18}
                  layout="responsive"
                  alt=""
                />
              </div>
              <input
                type="text"
                placeholder="Remote"
                {...register("jobType")}
                className="text-base bg-transparent border-none w-[270px] tablet:w-fit h-full focus:border-0 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary h-10 tablet:h-full tablet:rounded-r-lg text-white text-xs tablet:text-base px-2 tablet:w-[120px] font-medium"
          >
            Search
          </button>
        </form>
        <div>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={20}
            slidesPerView="auto"
          >
            {dataLoaded && (
              <SwiperSlide>
                <FilterBox
                  text={"All Jobs"}
                  value={""}
                  onFilterSelect={() => handleFilterSelect("")}
                />
              </SwiperSlide>
            )}

            {categoriesData.map((data, index) => (
              <SwiperSlide key={index}>
                <FilterBox
                  text={data}
                  value={data}
                  onFilterSelect={() => handleFilterSelect(data)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* lower layout */}
      <div className="flex gap-8 items-start">
        {/* filter bar */}
        <Filter display={"tablet:block hidden"} />
        <div className="w-full flex flex-col gap-4 relative">
          {fetchComplete && (
            <div className="tablet:hidden flex items-end justify-end text-primary underline font-medium">
              <span onClick={handleToggle} className="w-fit cursor-pointer">
                {dropDown ? (
                  <Image
                    src={"/cancel.svg"}
                    alt={"close"}
                    height={14}
                    width={14}
                    title="Close filter"
                  />
                ) : (
                  <span className="text-right flex justify-end items-end w-full">
                    Filters
                  </span>
                )}
              </span>
            </div>
          )}
          {dropDown && (
            <Filter display={"tablet:hidden absolute top-6 right-0 z-10"} />
          )}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex gap-4 flex-wrap justify-center tablet:justify-start">
              {fetchComplete && jobs.length < 1 ? (
                <div className="text-left">
                  Your search parameters did not match any jobs
                </div>
              ) : (
                jobs?.map((job) => (
                  <JobCard
                    key={job?._id}
                    company={job?.company_name}
                    location={job?.location}
                    jobTitle={job?.job_title}
                    jobType={job?.job_type}
                    skills={job?.technology}
                    path={`/jobs/${job?._id}`}
                  />
                ))
              )}
            </div>
            {fetchComplete && jobs.length === currentLimit && (
              <div className="flex items-center w-full justify-center">
                <button
                  onClick={showMoreJobs}
                  className="bg-primary h-10 rounded-lg text-white text-xs tablet:text-base px-4 w-full tablet:w-fit font-medium flex justify-center items-center"
                >
                  Load More Jobs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Jobs;
