"use client";
import CourseCard from "@/app/components/CourseCard";
import { Courses, Reviews } from "@/app/page";
import { useJapaStore } from "@/app/store/store";
import GradientText from "@/app/components/GradientText";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const CoursesPage = () => {
  const getCourses = useJapaStore((state) => state.getCourses);
  const courses = useJapaStore((state) => state.courses);
  useEffect(() => {
    getCourses();
    Aos.init({ once: true });
  }, [getCourses]);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] tablet:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-purple-50 to-pink-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 tablet:px-8 py-20 tablet:py-32">
          <div className="flex flex-col tablet:flex-row items-center justify-between gap-12 tablet:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center tablet:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm text-primary font-medium">📚 Learn & Grow</span>
              </div>
              
              <h1 className="text-4xl tablet:text-5xl pc:text-6xl font-bold text-textDefault leading-tight mb-6">
                Learn Skills for your <GradientText>Dream Job</GradientText>
              </h1>
              
              <p className="text-lg tablet:text-xl text-textNeutral mb-8 leading-relaxed">
                Upskill for the future—learn in-demand tech skills and become globally competitive with expert-led courses.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 justify-center tablet:justify-start">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl tablet:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={10000} suffix="+" />
                  </div>
                  <p className="text-sm text-textNeutral">Students Taught</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl tablet:text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={1000} suffix="+" />
                  </div>
                  <p className="text-sm text-textNeutral">Jobs Offered</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 relative max-w-lg">
              <div className="relative">
                <Image
                  src="/courses.png"
                  alt="Courses"
                  height={450}
                  width={450}
                  className="relative z-10 drop-shadow-2xl"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-[15px] tablet:mx-[64px] py-16 tablet:py-24 flex flex-col gap-8 tablet:gap-14 text-textDefault">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">🎓 Our Courses</span>
          </div>
          <h2 className="text-3xl tablet:text-4xl pc:text-5xl font-bold mb-4">
            A Broad Selection of <GradientText>Courses</GradientText>
          </h2>
          <p className="text-base tablet:text-lg text-textNeutral">
            Learn skills to be more competitive in top industries without limits
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-5 justify-center items-center">
          {courses?.map((course) => (
            <CourseCard
              src={"/dataA.png"}
              alt={course.title}
              title={course.title}
              text="Upskill for the future—learn in-demand tech skills and become globally competitive with JapaTalent."
              path={`/courses/${course._id}`}
              key={course._id}
            />
          ))}
        </div>
      </section>
      <Reviews />
    </main>
  );
};

export default CoursesPage;
