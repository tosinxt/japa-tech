"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GradientText from "../GradientText";
import AnimatedCounter from "../AnimatedCounter";

const CinematicHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      const floatingElements = heroRef.current.querySelectorAll('.floating-card');
      floatingElements.forEach((el, index) => {
        const speed = (index + 1) * 0.5;
        el.style.transform = `translate(${xPos * speed}px, ${yPos * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-purple-50 to-pink-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(89,34,169,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(89,34,169,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[15px] tablet:px-[64px] py-20 tablet:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg animate-slideUp"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold text-primary">🚀 Transform Your Career Today</span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-3xl tablet:text-5xl pc:text-7xl font-bold text-textDefault leading-tight max-w-5xl animate-slideUp px-4 tablet:px-0"
            style={{ animationDelay: '0.2s' }}
          >
            Unlock Your Potential For{" "}
            <GradientText>Global Success</GradientText>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-base tablet:text-xl text-textNeutral max-w-2xl leading-relaxed animate-slideUp px-4 tablet:px-0"
            style={{ animationDelay: '0.3s' }}
          >
            Join thousands of professionals who transformed their careers through world-class education, 
            job opportunities, and community support.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col tablet:flex-row gap-4 mt-4 animate-slideUp w-full tablet:w-auto px-4 tablet:px-0"
            style={{ animationDelay: '0.4s' }}
          >
            <Link
              href="/courses"
              className="group relative px-6 tablet:px-8 py-3 tablet:py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold text-base tablet:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden text-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Learning
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="/jobs"
              className="px-6 tablet:px-8 py-3 tablet:py-4 bg-white text-primary rounded-full font-semibold text-base tablet:text-lg border-2 border-primary/20 hover:border-primary hover:bg-primaryLight transition-all duration-300 hover:scale-105 shadow-lg text-center"
            >
              Explore Jobs
            </Link>
          </div>

          {/* Floating Stats Cards */}
          <div className="relative w-full mt-12 tablet:mt-24 px-4 tablet:px-0">
            <div className="flex flex-col tablet:flex-row flex-wrap justify-center gap-4 tablet:gap-8">
              
              {/* Stat Card 1 */}
              <div 
                className="floating-card group relative bg-white/80 backdrop-blur-lg rounded-2xl p-5 tablet:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30 hover:-translate-y-2 w-full tablet:w-auto"
                style={{ transition: 'transform 0.3s ease-out' }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-3xl tablet:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={10000} suffix="+" />
                  </div>
                  <p className="text-textNeutral font-medium text-sm tablet:text-base">Job Seekers Reached</p>
                  <div className="mt-3 flex items-center gap-2 text-green-600 text-xs tablet:text-sm font-semibold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    <span>+23% this month</span>
                  </div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div 
                className="floating-card group relative bg-white/80 backdrop-blur-lg rounded-2xl p-5 tablet:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-300 hover:-translate-y-2 w-full tablet:w-auto"
                style={{ transition: 'transform 0.3s ease-out' }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-3xl tablet:text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <p className="text-textNeutral font-medium text-sm tablet:text-base">Success Rate</p>
                  <div className="mt-3 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div 
                className="floating-card group relative bg-white/80 backdrop-blur-lg rounded-2xl p-5 tablet:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-300 hover:-translate-y-2 w-full tablet:w-auto"
                style={{ transition: 'transform 0.3s ease-out' }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-3xl tablet:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <p className="text-textNeutral font-medium text-sm tablet:text-base">Companies Hiring</p>
                  <div className="mt-3 flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white flex items-center justify-center overflow-hidden">
                      <Image src="/avatar3.svg" alt="Company 1" width={32} height={32} className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-white flex items-center justify-center overflow-hidden">
                      <Image src="/avatar2.svg" alt="Company 2" width={32} height={32} className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-white flex items-center justify-center overflow-hidden">
                      <Image src="/avatar.svg" alt="Company 3" width={32} height={32} className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 text-xs font-bold">
                      +
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Trust Indicators */}
          <div 
            className="mt-8 tablet:mt-16 animate-fadeIn px-4 tablet:px-0"
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-xs tablet:text-sm text-textNeutral mb-3 tablet:mb-4">Trusted by professionals from</p>
            <div className="flex flex-wrap justify-center items-center gap-4 tablet:gap-8 opacity-60">
              {/* Add company logos here */}
              <div className="text-lg tablet:text-2xl font-bold text-textDefault">Google</div>
              <div className="text-lg tablet:text-2xl font-bold text-textDefault">Microsoft</div>
              <div className="text-lg tablet:text-2xl font-bold text-textDefault">Amazon</div>
              <div className="text-lg tablet:text-2xl font-bold text-textDefault">Meta</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CinematicHero;
