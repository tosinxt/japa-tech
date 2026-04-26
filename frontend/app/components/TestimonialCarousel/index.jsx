"use client";

import React, { useState, useEffect } from "react";
import CommunityCard from "../CommunityCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-3xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center px-4 tablet:px-8 py-8"
            >
              <div className="w-full max-w-3xl">
                <CommunityCard
                  text={testimonial.text}
                  name={testimonial.name}
                  src={testimonial.src}
                  alt={testimonial.alt}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 tablet:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 tablet:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 tablet:w-6 tablet:h-6 text-primary group-hover:text-purple-600" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 tablet:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 tablet:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 group"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 tablet:w-6 tablet:h-6 text-primary group-hover:text-purple-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-3 bg-primary"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-textNeutral hover:text-primary transition-colors"
        >
          {isAutoPlaying ? "⏸ Pause" : "▶ Play"} Auto-scroll
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
