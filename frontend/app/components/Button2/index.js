import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button2 = ({ text, bgColor, color, width, onClick, src }) => {
  return (
      <button
      onClick={onClick}
        className={`text-sm tablet:text-base py-2 px-5 flex justify-center items-center hover:opacity-90 gap-1 rounded-[30px] border border-primary text-center ${color} ${bgColor} ${width}`}
      >
        {text}
        {src && <Image src={src} alt="" height={20} width={20} />}
      </button>
  );
};

export default Button2;
