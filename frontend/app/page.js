"use client";
import React from "react";
import Image from "next/image";
import Button from "./components/Button";
import CourseCard from "./components/CourseCard";
import CommunityCard from "./components/CommunityCard";
import Link from "next/link";
import JobCard from "./components/JobCard";
import { useJapaStore } from "./store/store";
import { useEffect } from "react";
import Footer from "./components/Footer";
import AOS from "aos";
import AnimatedCounter from "./components/AnimatedCounter";
import AnimatedCard from "./components/AnimatedCard";
import GradientText from "./components/GradientText";
import FloatingElement from "./components/FloatingElement";
import CinematicHero from "./components/CinematicHero";
import { SimpleHeader } from "./components/ui/simple-header";
import { Testimonials } from "./components/ui/testimonials";
import PoliceTape from "./components/PoliceTape";


const Courses = ({ courses }) => (
  <div className="flex flex-wrap gap-x-6  gap-y-5 justify-center items-center">
    {courses?.slice(0, 3).map((course) => (
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
);

const Reviews = () => {
  const testimonials = [
    {
      text: "Japa is a platform that has helped me understand what being informed is. \n\nI got to understand that I don't have to settle for less. I could keep going till I get to the destination i desire",
      name: "Ogala",
      src: "/avatar.svg",
      alt: "profile picture",
    },
    {
      text: "Got an offer for this role that was posted on this forum. \n\nThank you to the leaders of this platform, more blessings ",
      name: "Barr Rachael Ogbebor",
      src: "/avatar2.svg",
      alt: "profile picture",
    },
    {
      text: "I just want to say thank you to the Japa team for the exclusive role I got. \n\nI have started working and it can only get better from here      ",
      name: "Jennifer",
      src: "/avatar3.svg",
      alt: "profile picture",
    },
  ];

  return (
    <section className="relative flex flex-col gap-12 tablet:gap-16 items-center justify-center py-16 tablet:py-24 bg-gradient-to-b from-white to-primaryLight/30 overflow-hidden">
      {/* Police Tape at Top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <PoliceTape 
          text="⚠️ REAL SUCCESS STORIES • VERIFIED TESTIMONIALS • 100% AUTHENTIC" 
          variant="warning" 
        />
      </div>

      <div className="text-center max-w-3xl px-4 mt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
          <span className="text-sm text-primary font-medium">💬 Testimonials</span>
        </div>
        <h3
          className="text-3xl tablet:text-5xl font-bold text-textDefault mb-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          What our <GradientText>community</GradientText> is saying
        </h3>
        <p className="text-textNeutral text-base tablet:text-lg">
          Real stories from people who transformed their careers with JAPA
        </p>
      </div>

      {/* Testimonial Carousel */}
      <div className="w-full" data-aos="fade-up" data-aos-duration="800">
        <Testimonials testimonials={testimonials} />
      </div>

      {/* Police Tape at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <PoliceTape 
          text="✨ JOIN THOUSANDS OF SUCCESS STORIES • TRANSFORM YOUR CAREER TODAY" 
          variant="primary" 
        />
      </div>
    </section>
  );
};

const Home = () => {
  const { jobs, findJobs, courses, getCourses } = useJapaStore((state) => ({
    jobs: state.jobs,
    findJobs: state.findJobs,
    courses: state.courses,
    getCourses: state.getCourses,
  }));

  useEffect(() => {
    findJobs({ limit: 8 });
    getCourses();
    AOS.init({ once: true });
  }, [findJobs, getCourses]);

  const WhyCard = ({ src, alt, title, text }) => (
    <div
      className="text-textDefault flex items-center tablet:items-start tablet:justify-start gap-4"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div>
        <Image src={src} alt={alt} height={80} width={116} />
      </div>
      <div className="flex flex-col gap-2 justify-between">
        <p className="font-medium tablet:text-lg">{title}</p>
        <p className="font-light w-[240px] text-textNeutral text-sm tablet:text-base">
          {text}
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <SimpleHeader />
      <CinematicHero />
      <div className="bg-gradient-to-r from-primary via-purple-600 to-primary tablet:px-0 px-2 h-24 tablet:h-20 flex items-center justify-center text-center text-white text-sm tablet:text-xl font-medium animate-gradient" style={{ backgroundSize: '200% auto' }}>
        <div className="max-w-4xl px-4">
          Discover the ultimate platform where we upskill, empower, and walk with you to your dream career
        </div>
      </div>
      <section className="flex flex-col tablet:flex-row justify-center py-16 tablet:py-28 gap-8 tablet:gap-16 items-center border-b border-gray-200 mx-[15px] tablet:mx-[64px]">
        <AnimatedCard className="w-[240px] tablet:w-[320px]" delay={0}>
          <div className="p-8 tablet:p-10 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl tablet:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-3">
              <AnimatedCounter end={10000} suffix="+" />
            </div>
            <p className="text-textNeutral text-base tablet:text-lg font-medium">
              Job Seekers Reached
            </p>
          </div>
        </AnimatedCard>
        
        <AnimatedCard className="w-[240px] tablet:w-[320px]" delay={100}>
          <div className="p-8 tablet:p-10 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl tablet:text-6xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-3">
              <AnimatedCounter end={1000} suffix="+" />
            </div>
            <p className="text-textNeutral text-base tablet:text-lg font-medium">
              Community Members
            </p>
          </div>
        </AnimatedCard>
        
        <AnimatedCard className="w-[240px] tablet:w-[320px]" delay={200}>
          <div className="p-8 tablet:p-10 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl tablet:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-3">
              <AnimatedCounter end={100} suffix="+" />
            </div>
            <p className="text-textNeutral text-base tablet:text-lg font-medium">
              Customers
            </p>
          </div>
        </AnimatedCard>
      </section>
      <section className="mx-[15px] tablet:mx-[64px] py-16 tablet:py-24 flex flex-col gap-14 text-textDefault">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">📚 Learn & Grow</span>
          </div>
          <h3 className="text-3xl tablet:text-5xl font-bold mb-4">
            Our <GradientText>Courses</GradientText>
          </h3>
          <p className="text-textNeutral text-base tablet:text-lg">
            We Ignite Your Career, Your Path to Success Begins Here
          </p>
        </div>
        <Courses courses={courses} />
      </section>
      <section className="flex flex-col gap-10 mx-[15px] tablet:mx-[64px] py-14 tablet:py-28 border-t border-gray-200">
        <div className="flex flex-col tablet:flex-row tablet:justify-center tablet:items-start gap-10 tablet:gap-16 pb-16 tablet:pb-28">
          <div className="tablet:sticky tablet:top-32">
            <h3 className="text-left text-3xl tablet:text-5xl font-bold text-textDefault mb-4">
              Why <GradientText>Japa</GradientText>?
            </h3>
            <p className="text-textNeutral text-base tablet:text-lg max-w-xs">
              Everything you need to succeed in your career journey
            </p>
          </div>
          <div className="flex flex-col gap-6 tablet:grid tablet:grid-cols-2 justify-stretch tablet:gap-8 flex-1">
            <div
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-primaryLight to-white border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image src={"/why1.png"} alt="Transform Your Career" height={40} width={40} className="invert" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-lg tablet:text-xl text-textDefault">Transform Your Career</h4>
                  <p className="text-textNeutral text-sm tablet:text-base">
                    Gain the skills and knowledge to excel in today&apos;s job market.
                  </p>
                </div>
              </div>
            </div>
            
            <div
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-gray-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image src={"/why2.png"} alt="Career Support" height={40} width={40} className="invert" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-lg tablet:text-xl text-textDefault">Career Support</h4>
                  <p className="text-textNeutral text-sm tablet:text-base">
                    Get help with CVs and access to job postings.
                  </p>
                </div>
              </div>
            </div>
            
            <div
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image src={"/why3.png"} alt="Expert Instructions" height={40} width={40} className="invert" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-lg tablet:text-xl text-textDefault">Expert Instructions</h4>
                  <p className="text-textNeutral text-sm tablet:text-base">
                    Learn from industry professionals with real-world experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-gray-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image src={"/why4.png"} alt="Network and Grow" height={40} width={40} className="invert" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-lg tablet:text-xl text-textDefault">Network and Grow</h4>
                  <p className="text-textNeutral text-sm tablet:text-base">
                    Join a community of learners and professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative overflow-hidden bg-gradient-to-br from-primary via-purple-700 to-purple-900 px-6 tablet:px-16 py-14 tablet:py-20 w-full rounded-3xl flex tablet:flex-row flex-col-reverse justify-between items-center gap-8 tablet:gap-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
          </div>
          
          <div className="relative flex items-center justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl" />
              <Image src="/cv.svg" alt="CV Revamp" height={400} width={400} className="relative z-10" />
            </div>
          </div>
          
          <div className="relative flex flex-col gap-4 tablet:gap-6 justify-start tablet:w-[480px]">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full w-fit">
              <span className="text-sm tablet:text-base font-medium text-white">✨ Professional Service</span>
            </div>
            
            <h3 className="text-white font-bold text-3xl tablet:text-5xl leading-tight">
              Get your CV revamped by professionals
            </h3>
            
            <p className="text-white/90 text-base tablet:text-lg">
              Stand out in the job market with a professionally crafted CV that highlights your strengths and achievements.
            </p>
            
            <Button
              text={"Revamp My CV →"}
              bgColor={"bg-white hover:bg-gray-100"}
              width={"w-fit tablet:mt-4 mt-2"}
              path="https://docs.google.com/forms/d/1OsZ5mkU3BAB0Cfv_BmcrlCjU7ZUGKm22GSWtSRT7px4/viewform?ref=dishapages&edit_requested=true"
              color={"text-primary font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-gradient-to-b from-primaryLighter to-white gap-12 px-[15px] tablet:px-[64px] py-16 tablet:py-24">
        <div className="text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">🔥 Hot Opportunities</span>
          </div>
          <h3 className="text-3xl tablet:text-5xl font-bold text-textDefault mb-4">
            Jobs Available <GradientText>Now</GradientText>
          </h3>
          <p className="text-textNeutral text-base tablet:text-lg">
            Discover exciting career opportunities from top companies
          </p>
        </div>
        <div className="flex gap-6 flex-wrap w-full pc:grid pc:grid-cols-4 justify-center items-stretch max-w-7xl">
          {jobs?.map((job, index) => (
            <div
              key={job?._id}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 50}
            >
              <JobCard
                company={job?.company_name}
                location={job?.location}
                jobTitle={job?.job_title}
                jobType={job?.job_type}
                skills={job?.technology}
                path={`/jobs/${job?._id}`}
              />
            </div>
          ))}
        </div>
        <Link 
          href="/jobs" 
          className="group inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <span>See all jobs</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
export { Courses, Reviews };
