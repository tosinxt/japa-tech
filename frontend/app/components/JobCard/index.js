"use client";
import { useJapaStore } from "@/app/store/store";
import { Box, Skeleton } from "@mui/material";
import Link from "next/link";
import React from "react";

const JobCard = ({
  company,
  location,
  jobTitle,
  jobType,
  path,
  skills = [],
}) => {
  const loading = useJapaStore((state) => state.loading);
  return (
    <Box>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={280}
          height={290}
          className="rounded-lg"
        />
      ) : (
        <Link href={path} className="">
          <div className="group relative px-5 pb-6 pt-5 border border-gray-200 rounded-2xl bg-white w-[calc(100vw-30px)] tablet:w-[calc(302px-16px)] tablet:max-w-[calc(330px-16px)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-primary/30 h-full flex flex-col">
            {/* Gradient border on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm -z-10" />

            <div className="flex flex-col items-start justify-start mb-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {company?.charAt(0)?.toUpperCase()}
                </div>
                <div>
                  <p className="text-base font-semibold text-textDefault group-hover:text-primary transition-colors">
                    {company}
                  </p>
                  <div className="flex items-center gap-1 text-textNeutral text-xs">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start mb-4 flex-grow">
              <p className="font-bold text-lg tablet:text-xl text-textDefault line-clamp-2 mb-2">
                {jobTitle}
              </p>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                {jobType}
              </div>
            </div>

            <div className="flex items-start justify-start gap-2 mb-5 flex-wrap min-h-[60px]">
              {skills?.slice(0, 4).map((skill, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-gray-50 w-fit px-3 py-1.5 text-textNeutral rounded-full text-xs font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-auto bg-primary group-hover:bg-purple-700 text-white rounded-full w-full py-2.5 font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2">
              <span>Apply Now</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      )}
    </Box>
  );
};

export default JobCard;
