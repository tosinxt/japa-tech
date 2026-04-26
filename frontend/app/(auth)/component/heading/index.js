"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../public/logo2.svg";

const Heading = ({ text, title, goBack, cancel, onclick }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-textDefault">
      <div className="w-full border-b flex items-center justify-center pt-1 pb-2 tablet:pt-4 tablet:pb-4 relative">
        <Link href={"/"}>
          <Image src={logo} alt="" width={50} height={50} priority={true} />
        </Link>
        {cancel && (
          <div
            className="absolute top-50 right-3 cursor-pointer"
            onClick={onclick}
          >
            <Image
              src="/cancel.svg"
              alt=""
              width={24}
              height={24}
              priority={true}
              layout="responsive"
            />
          </div>
        )}
      </div>
      <div className="">
        {text && (
          <div onClick={goBack} className="text-4xl -pb-2 cursor-pointer">
            &lsaquo;
          </div>
        )}
        <p className="text-left text-xl tablet:text-[25px] font-extrabold">{title}</p>
        {text && <p className="text-textNeutral text-base pt-1">{text}</p>}
      </div>
    </div>
  );
};

export default Heading;
