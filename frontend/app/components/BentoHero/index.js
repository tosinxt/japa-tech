"use client";
import React from "react";
import Link from "next/link";
import GradientText from "../GradientText";
import AnimatedCounter from "../AnimatedCounter";

const BentoHero = () => {
  return (
    <section className="relative min-h-screen py-20 tablet:py-32 px-[15px] tablet:px-[64px] bg-gradient-to-br from-white via-primaryLight/30 to-purple-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 tablet:mb-16 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">✨ Your Career Journey Starts Here</span>
          </div>
          <h1 className="text-4xl tablet:text-6xl font-bold text-textDefault mb-4">
            Everything You Need To <GradientText>Succeed</GradientText>
          </h1>
          <p className="text-lg tablet:text-xl text-textNeutral max-w-2xl mx-auto">
            Comprehensive platform for learning, job hunting, and career growth
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-12 gap-4 tablet:gap-6">
          
          {/* Large Card - Main CTA */}
          <div className="tablet:col-span-8 tablet:row-span-2 group relative bg-gradient-to-br from-primary to-purple-600 rounded-3xl p-8 tablet:p-12 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl tablet:text-5xl font-bold text-white mb-4">
                  Transform Your Career Today
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-lg">
                  Join 10,000+ professionals who&apos;ve landed their dream jobs through our platform
                </p>
                <div className="flex flex-col tablet:flex-row gap-4">
                  <Link
                    href="/courses"
                    className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-center shadow-xl"
                  >
                    Start Learning
                  </Link>
                  <Link
                    href="/jobs"
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/30 hover:bg-white/30 transition-all duration-300 text-center"
                  >
                    Browse Jobs
                  </Link>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="hidden tablet:flex gap-4 mt-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <div className="text-3xl font-bold text-white mb-1">
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <p className="text-white/80 text-sm">Success Rate</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <div className="text-3xl font-bold text-white mb-1">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <p className="text-white/80 text-sm">Companies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card 1 */}
          <div className="tablet:col-span-4 group relative bg-white rounded-3xl p-6 tablet:p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={10000} suffix="+" />
              </div>
              <p className="text-textNeutral font-medium">Active Job Seekers</p>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="tablet:col-span-4 group relative bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-6 tablet:p-8 border border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-textDefault mb-2">Expert Courses</h3>
            <p className="text-textNeutral text-sm">Learn from industry professionals with real-world experience</p>
          </div>

          {/* Feature Card 3 */}
          <div className="tablet:col-span-4 group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 tablet:p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-textDefault mb-2">Job Opportunities</h3>
            <p className="text-textNeutral text-sm">Access exclusive job postings from top companies worldwide</p>
          </div>

          {/* Feature Card 4 */}
          <div className="tablet:col-span-4 group relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-6 tablet:p-8 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-textDefault mb-2">Community Support</h3>
            <p className="text-textNeutral text-sm">Join a thriving community of professionals and mentors</p>
          </div>

          {/* Testimonial Card */}
          <div className="tablet:col-span-8 group relative bg-white rounded-3xl p-6 tablet:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col tablet:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  J
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-textDefault text-lg mb-3 italic">
                  &ldquo;JAPA completely transformed my career. Within 3 months of joining, I landed my dream job at a Fortune 500 company!&rdquo;
                </p>
                <div>
                  <p className="font-bold text-textDefault">Jennifer Adeyemi</p>
                  <p className="text-textNeutral text-sm">Software Engineer at Google</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoHero;
