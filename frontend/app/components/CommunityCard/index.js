"use client";
import Image from 'next/image'
import React, { useState } from 'react'

const CommunityCard = ({src, alt, text, name}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className='group relative flex justify-start items-start gap-4 tablet:gap-6 rounded-2xl tablet:w-[450px] bg-white px-6 py-6 whitespace-pre-wrap transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-primary/30'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm -z-10" />
      
      <div className='flex-shrink-0 h-fit tablet:w-20 tablet:h-20 w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300'>
        <Image 
          src={src} 
          alt={alt} 
          height={80} 
          width={80} 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className='text-textDefault flex flex-col justify-between flex-1 gap-3'>
        <div className="relative">
          <div className="absolute -left-2 top-0 text-primary/20 text-4xl font-serif">&ldquo;</div>
          <p className='text-sm tablet:text-base font-normal text-textNeutral leading-relaxed pl-4'>
            {text}
          </p>
        </div>
        <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
          <span className='text-lg font-bold text-textDefault'>
            {name}
          </span>
          <svg 
            className={`w-5 h-5 text-primary transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CommunityCard