"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import GradientText from "../GradientText";
import FloatingElement from "../FloatingElement";

const SplitScreenHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white to-primaryLight/30">
      <div className="w-full max-w-7xl mx-auto px-[15px] tablet:px-[64px] py-20">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-12 tablet:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6 tablet:gap-8 animate-slideUp">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full w-fit">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">New: AI-Powered Career Matching</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl tablet:text-5xl pc:text-6xl font-bold text-textDefault leading-tight">
              Transform Your Career With{" "}
              <GradientText>JAPA</GradientText>
            </h1>

            {/* Description */}
            <p className="text-lg tablet:text-xl text-textNeutral leading-relaxed">
              Join thousands of professionals who&apos;ve landed their dream jobs through our 
              comprehensive courses, personalized coaching, and exclusive job opportunities.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {[
                { icon: "✓", text: "Expert-led courses in high-demand skills" },
                { icon: "✓", text: "1-on-1 career coaching sessions" },
                { icon: "✓", text: "Access to 500+ global job opportunities" },
                { icon: "✓", text: "Professional CV review & optimization" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-slideUp"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                    {feature.icon}
                  </div>
                  <span className="text-textDefault font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col tablet:flex-row gap-4 mt-4">
              <Link
                href="/courses"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started Free
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link
                href="/jobs"
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg border-2 border-primary/20 hover:border-primary hover:bg-primaryLight transition-all duration-300 text-center"
              >
                Browse Jobs
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 border-2 border-white" />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-textDefault">10,000+ professionals</p>
                <p className="text-textNeutral">already transformed their careers</p>
              </div>
            </div>

          </div>

          {/* Right Visual */}
          <div className="relative h-[400px] tablet:h-[600px] animate-fadeIn">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-3xl" />
            
            {/* Main Image Container */}
            <div className="relative h-full flex items-center justify-center">
              <FloatingElement delay={0} duration={3}>
                <div className="relative w-full max-w-md">
                  {/* Replace with your actual image */}
                  <div className="aspect-square bg-gradient-to-br from-primary to-purple-600 rounded-3xl shadow-2xl" />
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-textDefault">Job Offer!</p>
                        <p className="text-xs text-textNeutral">Senior Developer</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-textDefault">Course Complete</p>
                        <p className="text-xs text-textNeutral">Data Analytics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FloatingElement>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SplitScreenHero;
