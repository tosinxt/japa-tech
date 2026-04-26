"use client";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import { Reviews } from "@/app/page";
import { useJapaStore } from "@/app/store/store";
import GradientText from "@/app/components/GradientText";
import Aos from "aos";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const TalentAssessment = () => {
  const user = useJapaStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const handleOpenModal = () => {
    // if (!user) {
    //   toast.error("Kindly log in to book a session")
    //   router.push("/login")
    // } else {
    //   setIsModalOpen(true)
    // }

    window.location.href = "https://paystack.com/buy/career-coaching-scmray";
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] tablet:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-purple-50 to-pink-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 tablet:px-8 py-20 tablet:py-32">
          <div className="flex flex-col-reverse tablet:flex-row items-center justify-between gap-12 tablet:gap-16">
            {/* Image */}
            <div className="flex-1 relative max-w-lg">
              <div className="relative">
                <Image
                  src="/talentBanner.png"
                  alt="Career Coaching"
                  height={450}
                  width={450}
                  className="relative z-10 drop-shadow-2xl"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center tablet:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm text-primary font-medium">🎯 Career Coaching</span>
              </div>
              
              <h1 className="text-4xl tablet:text-5xl pc:text-6xl font-bold text-textDefault leading-tight mb-6">
                Finding Suitable <GradientText>Courses</GradientText> for your Skills?
              </h1>
              
              <p className="text-lg tablet:text-xl text-textNeutral mb-8 leading-relaxed">
                Get personalized guidance from industry experts to accelerate your career growth and land your dream job.
              </p>

              <button
                onClick={handleOpenModal}
                className="bg-gradient-to-r from-primary to-purple-600 text-white text-base tablet:text-lg py-4 px-8 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full tablet:w-auto"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-[15px] tablet:mx-[64px] mt-16 tablet:mt-24 flex flex-col items-center justify-center text-textDefault">
        <div className="flex flex-col justify-center items-center gap-4 mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm text-primary font-medium">⚡ How it Works</span>
          </div>
          <h2 className="text-3xl tablet:text-4xl pc:text-5xl font-bold">
            Step-by-Step <GradientText>Process</GradientText>
          </h2>
          <p className="text-base tablet:text-lg text-textNeutral">
            Get started with our simple three-step process
          </p>
        </div>
        <div className="text-base tablet:text-xl flex flex-col tablet:flex-row items-center font-medium  justify-between gap-16 w-full text-center tablet:text-left">
          <div
            className="flex flex-col tablet:flex-row items-center gap-4 flex-1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Image src={"/profile.svg"} alt="" height={42} width={54} />
            <span>Fill out your information</span>
          </div>
          <div
            className="flex flex-col tablet:flex-row items-center gap-4 flex-1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Image src={"/calendar.svg"} alt="" height={54} width={54} />
            <span>Schedule your session</span>
          </div>
          <div
            className="flex flex-col tablet:flex-row items-center gap-4 flex-1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Image src={"/consult.svg"} alt="" height={54} width={54} />
            <span>Receive personalized course recommendations</span>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row justify-center tablet:items-center gap-20 tablet:gap-32 mt-20 tablet:mt-32 mb-0 tablet:mb-20 w-full">
          <div className="w-fit relative m-auto tablet:m-0">
            <div className="relative">
              <Image
                src={"/talent2.png"}
                alt=""
                height={9999}
                width={9999}
                style={{ height: "100%", width: "487px" }}
                className="absolute z-[10] left-5 top-0"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <div className="h-[350px] tablet:h-[570px] w-[300px] max-w-[487px] tablet:w-[450px] bg-[#a98ed2] rounded-r-3xl relative top-5"></div>
            </div>
          </div>
          <div className="flex flex-col gap-6 tablet:gap-9 font-medium text-base tablet:text-2xl tablet:w-fit tablet:p-[10px]">
            <div className="flex items-center gap-2 flex-1">
              <Image src={"/arrow-double.svg"} alt="" height={24} width={24} />
              <span className="">Elevate Your Skills!</span>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <Image src={"/arrow-double.svg"} alt="" height={24} width={24} />
              <span className="">Discover Your Story!</span>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <Image src={"/arrow-double.svg"} alt="" height={24} width={24} />
              <span className="">Shine in Your Field!</span>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <Image src={"/arrow-double.svg"} alt="" height={24} width={24} />
              <span className="">Land Your Ideal Job!</span>
            </div>
            <div className="flex items-center gap-2 flex-1 mb-3">
              <Image src={"/arrow-double.svg"} alt="" height={24} width={24} />
              <span className="">Maximize Success with expert Guidance!</span>
            </div>
            <button
              onClick={handleOpenModal}
              className="text-white w-full bg-primary text-sm tablet:text-base py-2 px-5 flex justify-center items-center hover:opacity-90 gap-1 rounded-[30px] border border-primary text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Book a session
            </button>
          </div>
        </div>
      </section>
      <section className="bg-talent bg-cover bg-[#D7BFFA] mt-20 h-[600px] tablet:h-[810px] flex items-center justify-center">
        <div
          className="bg-white w-[310px] tablet:w-fit m-auto border-2 border-primary shadow-talent"
          data-aos="
fade-up"
          data-aos-duration="1500"
        >
          <p className="bg-[#E4E4E4] h-28 text-2xl tablet:text-4xl font-bold flex justify-center items-center">
            ₦10,000/hr
          </p>
          <div className="px-3 tablet:px-5 py-3 tablet:py-8">
            <ul className="list-none text-base flex flex-col gap-6">
              <li className="flex items-center gap-2">
                <Image src={"/check.svg"} width={18} height={18} alt="" />{" "}
                Personalized Course Recommendations
              </li>
              <li className="flex items-center gap-2">
                <Image src={"/check.svg"} width={18} height={18} alt="" />{" "}
                Career Development
              </li>
              <li className="flex items-center gap-2">
                <Image src={"/check.svg"} width={18} height={18} alt="" />{" "}
                Enforced Employability
              </li>
              <li className="flex items-center gap-2">
                <Image src={"/check.svg"} width={18} height={18} alt="" />{" "}
                Increased Confidence
              </li>
              <li className="flex items-center gap-2">
                <Image src={"/check.svg"} width={18} height={18} alt="" />{" "}
                Actionable Feedback
              </li>
            </ul>
            <button
              onClick={handleOpenModal}
              className="my-8 text-white w-full bg-primary text-sm tablet:text-base py-2 px-5 flex justify-center items-center hover:opacity-90 gap-1 rounded-[30px] border border-primary text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Book a session
            </button>
          </div>
        </div>
      </section>
      <section className="bg-talent2 bg-cover py-20 tablet:pt-12 tablet:pb-28 mt-20 tablet:mt-36 flex flex-col justify-center items-center">
        <div className="px-[15px] tablet:px-0 tablet:w-[420px] flex flex-col gap-2 text-center text-white">
          <p className="font-medium">Still unsure about your career path?</p>
          <p className="tablet:text-lg font-bold">
            Over 50,000 people are with you on this ship.{" "}
          </p>
          <p className="text-lg tablet:text-2xl text-[#d7bffa] font-bold mt-4 tablet:mt-6">
            With our career coaching, you will get clarity on
            your career journey.
          </p>
          <button
            onClick={handleOpenModal}
            className="mt-10 text-white w-full bg-primary text-sm tablet:text-base py-2 px-5 flex justify-center items-center hover:opacity-90 gap-1 rounded-[30px] border border-primary text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Book Now
          </button>
        </div>
      </section>
      <Reviews />
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </div>
  );
};

export default TalentAssessment;
