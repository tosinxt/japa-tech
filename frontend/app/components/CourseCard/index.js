"use client";
import { useJapaStore } from "@/app/store/store";
import { Box, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";

const CourseCard = ({ src, alt, title, text, path }) => {
  const loading = useJapaStore((state) => state.loading);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Box>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={392}
          height={500}
          className="rounded-2xl"
        />
      ) : (
        <Link href={path}>
          <div
            className="group relative flex flex-col h-full p-4 rounded-2xl text-textDefault max-w-[370px] bg-white border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm -z-10" />

            <div className="flex flex-col gap-3 h-full flex-grow">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={alt}
                  width={9999}
                  height={9999}
                  style={{ height: "auto", width: "100%" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  New
                </div>
              </div>

              <span className="text-xl tablet:text-2xl font-bold line-clamp-2 min-h-[60px] group-hover:text-primary transition-colors">
                {title}
              </span>

              <p className="w-full text-sm tablet:text-base line-clamp-3 text-textNeutral">
                {text}
              </p>
            </div>

            <div className="mt-6 bg-primary group-hover:bg-purple-700 text-white w-full px-5 py-3 rounded-full font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2">
              <span>Learn more</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </Link>
      )}
    </Box>
  );
};

export default CourseCard;
