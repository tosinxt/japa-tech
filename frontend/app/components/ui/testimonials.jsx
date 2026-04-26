"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { Quote } from "lucide-react";

function Testimonials({ testimonials }) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 5000);

    return () => clearTimeout(interval);
  }, [api, current]);

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/2" key={index}>
                <div className="bg-white rounded-2xl h-full p-6 tablet:p-8 border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl flex justify-between flex-col gap-6 group">
                  {/* Quote Icon */}
                  <div className="flex items-start justify-between">
                    <Quote className="w-10 h-10 tablet:w-12 tablet:h-12 text-primary/20 group-hover:text-primary/40 transition-colors" />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="text-textNeutral text-base tablet:text-lg leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                      <AvatarImage src={testimonial.src} alt={testimonial.alt} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-bold text-textDefault text-base tablet:text-lg">
                        {testimonial.name}
                      </span>
                      <span className="text-sm text-textNeutral">
                        {testimonial.role || "JAPA Community Member"}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                api?.scrollTo(index);
                setCurrent(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === current
                  ? "w-8 h-3 bg-primary"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Testimonials };
