"use client";
import React, { useState } from "react";
import Link from "next/link";
import GradientText from "../GradientText";

const VideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-textDefault">
      {/* Video Background Placeholder (replace with actual video) */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-textDefault/90 via-primary/80 to-purple-900/90 z-10" />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_50%,transparent_52%)] bg-[length:20px_20px] animate-shimmer" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-[15px] tablet:px-[64px] py-20">
        <div className="text-center space-y-8">
          
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-slideUp"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white">🔴 Live: Career Transformation Webinar</span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl tablet:text-6xl pc:text-7xl font-bold text-white leading-tight animate-slideUp"
            style={{ animationDelay: '0.1s' }}
          >
            Your Future Starts
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Right Now
            </span>
          </h1>

          {/* Description */}
          <p 
            className="text-xl tablet:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-slideUp"
            style={{ animationDelay: '0.2s' }}
          >
            Transform your career in 90 days with our proven system. 
            Join 10,000+ professionals who&apos;ve already made the leap.
          </p>

          {/* Video Play Button */}
          <div 
            className="flex justify-center animate-scaleIn"
            style={{ animationDelay: '0.3s' }}
          >
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="group relative w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/40 hover:border-white/60 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              {!isPlaying ? (
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            </button>
          </div>

          <p className="text-white/70 text-sm animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            Watch how we helped Sarah land her dream job in 60 days
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col tablet:flex-row gap-4 justify-center items-center pt-8 animate-slideUp"
            style={{ animationDelay: '0.5s' }}
          >
            <Link
              href="/courses"
              className="group px-10 py-5 bg-white text-textDefault rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Get Started Free
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/jobs"
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              Explore Jobs
            </Link>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-2 tablet:grid-cols-4 gap-8 max-w-4xl mx-auto pt-16 animate-fadeIn"
            style={{ animationDelay: '0.6s' }}
          >
            {[
              { value: "10K+", label: "Students Enrolled" },
              { value: "95%", label: "Job Placement" },
              { value: "500+", label: "Partner Companies" },
              { value: "4.9★", label: "Average Rating" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl tablet:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-textDefault to-transparent z-10" />
    </section>
  );
};

export default VideoHero;
