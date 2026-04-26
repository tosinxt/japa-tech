"use client";
import React from "react";
import Link from "next/link";
import GradientText from "../GradientText";
import AnimatedCounter from "../AnimatedCounter";

const MinimalHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(89,34,169,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-[15px] tablet:px-[64px] py-20 text-center">
        
        {/* Floating Stats - Top */}
        <div className="absolute -top-8 left-0 tablet:left-20 animate-float">
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-textDefault">
                  <AnimatedCounter end={95} suffix="%" />
                </p>
                <p className="text-xs text-textNeutral">Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats - Right */}
        <div className="absolute top-1/4 -right-8 tablet:right-0 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
            <div className="text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                <AnimatedCounter end={500} suffix="+" />
              </p>
              <p className="text-xs text-textNeutral mt-1">Companies</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 animate-slideUp">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primaryLight rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary">Trusted by 10,000+ Professionals</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl tablet:text-7xl pc:text-8xl font-bold text-textDefault leading-tight">
            Your Career,
            <br />
            <GradientText>Reimagined</GradientText>
          </h1>

          {/* Subheadline */}
          <p className="text-xl tablet:text-2xl text-textNeutral max-w-2xl mx-auto leading-relaxed">
            The simplest way to learn new skills, find opportunities, and grow your career.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col tablet:flex-row gap-4 justify-center items-center mt-12">
            <Link
              href="/courses"
              className="group px-10 py-5 bg-textDefault text-white rounded-full font-semibold text-lg hover:bg-primary transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"
            >
              Get Started
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/jobs"
              className="px-10 py-5 text-textDefault rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Explore Jobs
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 space-y-3">
            <p className="text-sm text-textNeutral">Join professionals from</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
              <span className="text-xl font-bold">Google</span>
              <span className="text-xl font-bold">Microsoft</span>
              <span className="text-xl font-bold">Amazon</span>
              <span className="text-xl font-bold">Meta</span>
            </div>
          </div>

        </div>

        {/* Floating Stats - Bottom Left */}
        <div className="absolute bottom-0 left-0 tablet:left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-textDefault">
                  <AnimatedCounter end={10} suffix="K+" />
                </p>
                <p className="text-xs text-textNeutral">Active Users</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-textNeutral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default MinimalHero;
