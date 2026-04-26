"use client";
import { useState } from "react";

const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-500 ease-out ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
      />
      
      {/* Card content */}
      <div className="relative bg-white rounded-2xl h-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
