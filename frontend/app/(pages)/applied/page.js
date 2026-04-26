"use client";
import { useJapaStore } from "@/app/store/store";
import { Box, Skeleton } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Applied = () => {
  const { user, applied, fetchAppliedJobs, loading } = useJapaStore(
    (state) => ({
      user: state.user,
      applied: state.applied,
      fetchAppliedJobs: state.fetchAppliedJobs,
      loading: state.loading,
    })
  );

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const id = user?._id;
        await fetchAppliedJobs(id);
      } catch (err) {
        toast.error(err.message || "Error fetching applied jobs");
      }
    };

    fetchJobs();
  }, [user?._id, fetchAppliedJobs]);

  return (
    <div className="mx-[15px] tablet:mx-[64px] mt-28 tablet:mt-36 flex flex-col text-textDefault">
      <div className="text-2xl tablet:text-3xl font-bold mb-8">
        Applications
      </div>
      {applied.map((job, index) =>
        job.job_id?.length < 1 ? (
          <div key={index}>
            <p>
              You have not applied for any job yet. Click{" "}
              <Link href={"/jobs"} className="underline text-blue-500">
                here
              </Link>{" "}
              to search for jobs.
            </p>
          </div>
        ) : (
          <div key={index} className="flex flex-col gap-6">
            {job.job_id?.map((job, index) => {
              const convertDate = (isoString) => {
                const date = new Date(isoString);
                const options = {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                };
                return date.toLocaleDateString("en-US", options);
              };

              const timestamp = job.date_posted;
              const formattedDate = convertDate(timestamp);

              return (
                <Box key={index}>
                  {loading ? (
                    <Skeleton
                      variant="rectangular"
                      width={9999}
                      height={250}
                      className="rounded-lg"
                    />
                  ) : (
                    <div className="px-4 pb-6 pt-4 border rounded-xl bg-white w-full flex flex-col tablet:flex-row  tablet:gap-4 justify-between">
                      <div className="w-full">
                        <div className="flex flex-col items-start justify-start mb-4 tablet:mb-7">
                          <p className="text-lg font-medium text-textNeutral">
                            {job.company_name}
                          </p>
                          <p className="text-textNeutral text-sm font-light">
                            {job.location}
                          </p>
                        </div>
                        <div className="flex flex-col items-start justify-start mb-4">
                          <p className="font-bold tablet:text-xl text-textDefault line-clamp-2">
                            {job.job_title}
                          </p>
                          <p className="font-light text-xs tablet:text-sm">
                            {job.job_type}
                          </p>
                        </div>
                        <div className="flex items-start justify-start gap-y-0 gap-x-2 flex-wrap font-light">
                          {job.technology
                            ?.slice(0, 4)
                            .map((technology, index) => (
                              <div
                                key={index}
                                className="border w-fit px-2.5 py-2 text-textNeutral rounded-3xl text-xs tablet:text-[15px]"
                              >
                                {technology}
                              </div>
                            ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        <div className="mt-4 tablet:mt-9 border-primary border rounded-3xl text-primary w-full tablet:w-[200px] py-2 font-semibold text-center">
                          Applied
                        </div>
                        <p>{formattedDate}</p>
                      </div>
                    </div>
                  )}
                </Box>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default Applied;
