"use client";
import React, { useState } from "react";
import Link from "next/link";
import GradientText from "../GradientText";

const InteractiveHero = () => {
  const [activeTab, setActiveTab] = useState("learn");

  const tabs = {
    learn: {
      title: "Learn New Skills",
      desc: "Master in-demand technologies with expert-led courses",
      cta: "Browse Courses",
      link: "/courses",
      icon: "🎓"
    },
    work: {
      title: "Find Your Dream Job",
      desc: "Access exclusive opportunities from top companies",
      cta: "Explore Jobs",
      link: "/jobs",
      icon: "💼"
    },
    grow: {
      title: "Grow Your Network",
      desc: "Connect with mentors and industry professionals",
      cta: "Join Community",
      link: "/community",
      icon: "🤝"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primaryLight via-white to-purple-50">
      <div className="w-full max-w-6xl mx-auto px-[15px] tablet:px-[64px] py-20">
        
        <div className="text-center mb-12 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">✨ Choose Your Path</span>
          </div>
          
          <h1 className="text-4xl tablet:text-6xl font-bold text-textDefault mb-6">
            What Do You Want To <GradientText>Achieve</GradientText>?
          </h1>
          
          <p className="text-lg tablet:text-xl text-textNeutral max-w-2xl mx-auto">
            Select your goal and we&apos;ll show you the perfect path forward
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === key
                  ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white text-textDefault hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tabs[key].icon} {tabs[key].title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-8 tablet:p-12 shadow-2xl border border-gray-100 animate-scaleIn">
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">{tabs[activeTab].icon}</div>
            <h2 className="text-3xl tablet:text-4xl font-bold text-textDefault">
              {tabs[activeTab].title}
            </h2>
            <p className="text-xl text-textNeutral max-w-xl mx-auto">
              {tabs[activeTab].desc}
            </p>
            <Link
              href={tabs[activeTab].link}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mt-6"
            >
              {tabs[activeTab].cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          {[
            { value: "10K+", label: "Active Users" },
            { value: "95%", label: "Success Rate" },
            { value: "500+", label: "Partners" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-textNeutral mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InteractiveHero;
