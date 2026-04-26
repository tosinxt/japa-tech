"use client";

import React from "react";

const PoliceTape = ({ text = "⚠️ REAL SUCCESS STORIES • VERIFIED TESTIMONIALS", variant = "warning" }) => {
  const variants = {
    warning: {
      bg: "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400",
      text: "text-black",
      border: "border-yellow-600",
    },
    success: {
      bg: "bg-gradient-to-r from-green-500 via-green-400 to-green-500",
      text: "text-white",
      border: "border-green-700",
    },
    primary: {
      bg: "bg-gradient-to-r from-primary via-purple-600 to-primary",
      text: "text-white",
      border: "border-purple-800",
    },
  };

  const style = variants[variant] || variants.warning;

  return (
    <div className="relative w-full overflow-hidden py-3 border-y-4 border-dashed">
      <div className={`absolute inset-0 ${style.bg} opacity-90`} />
      
      {/* Animated tape pattern */}
      <div className="absolute inset-0 bg-repeating-stripes opacity-20" />
      
      {/* Scrolling text */}
      <div className="relative flex whitespace-nowrap animate-scroll-left">
        {/* Repeat text multiple times for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className={`inline-block px-8 text-sm tablet:text-base font-bold ${style.text} tracking-wider`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PoliceTape;
