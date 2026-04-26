"use client";
import React from "react";
import Link from "next/link";
import GradientText from "../GradientText";

const GradientMeshHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-[15px] tablet:px-[64px]">
        <div className="bg-white/70 backdrop-blur-2xl rounded-[40px] p-8 tablet:p-16 shadow-2xl border border-white/50">
          
          <div className="text-center space-y-8">
            
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-slideUp"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Now Enrolling: Spring 2025 Cohort
              </span>
            </div>

            {/* Headline */}
            <h1 
              className="text-4xl tablet:text-6xl pc:text-7xl font-bold text-textDefault leading-tight animate-slideUp"
              style={{ animationDelay: '0.1s' }}
            >
              Master Skills That
              <br />
              <GradientText>Matter</GradientText>
            </h1>

            {/* Description */}
            <p 
              className="text-lg tablet:text-xl text-textNeutral max-w-2xl mx-auto leading-relaxed animate-slideUp"
              style={{ animationDelay: '0.2s' }}
            >
              Join the fastest-growing community of professionals learning in-demand skills 
              and landing dream jobs at top companies worldwide.
            </p>

            {/* Stats Row */}
            <div 
              className="grid grid-cols-3 gap-6 tablet:gap-12 max-w-3xl mx-auto py-8 animate-slideUp"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="text-center">
                <p className="text-3xl tablet:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                  10K+
                </p>
                <p className="text-sm text-textNeutral">Students</p>
              </div>
              <div className="text-center">
                <p className="text-3xl tablet:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                  95%
                </p>
                <p className="text-sm text-textNeutral">Success Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl tablet:text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  500+
                </p>
                <p className="text-sm text-textNeutral">Partners</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col tablet:flex-row gap-4 justify-center items-center animate-slideUp"
              style={{ animationDelay: '0.4s' }}
            >
              <Link
                href="/courses"
                className="group relative px-10 py-5 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="/jobs"
                className="px-10 py-5 bg-white/80 backdrop-blur-sm text-textDefault rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-primary hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Browse Opportunities
              </Link>
            </div>

            {/* Features */}
            <div 
              className="grid grid-cols-1 tablet:grid-cols-3 gap-6 mt-12 animate-fadeIn"
              style={{ animationDelay: '0.5s' }}
            >
              {[
                { icon: "🎓", title: "Expert-Led Courses", desc: "Learn from industry leaders" },
                { icon: "💼", title: "Job Placement", desc: "Direct access to employers" },
                { icon: "🤝", title: "Lifetime Support", desc: "Community & mentorship" }
              ].map((feature, idx) => (
                <div key={idx} className="text-center p-4">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-bold text-textDefault mb-1">{feature.title}</h3>
                  <p className="text-sm text-textNeutral">{feature.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GradientMeshHero;
