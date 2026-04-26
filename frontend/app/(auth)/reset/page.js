"use client";
import React, { useState } from "react";
import Heading from "../component/heading";
import Button from "../component/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useJapaStore } from "@/app/store/store";
import Image from "next/image";

const Reset = () => {
  const {
    handleSubmit,
    reset,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();
  const { resetPWD } = useJapaStore((state) => ({
    resetPWD: state.resetPwd,
  }));
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const onSubmit = async () => {
    const new_pass = getValues("password");
    console.log(new_pass);
    try {
      await resetPWD({ new_pass: new_pass });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col m-auto justify-center max-w-[420px] items-center gap-8 py-10 px-[15px]">
      <div className="flex flex-col gap-8 w-full">
        <Heading title="Create New Password" text="" />
        <form
          className="flex flex-col gap-3 mt-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="password"
              className="text-black text-opacity-60 text-sm font-[500]"
            >
              Enter Password
            </label>
            <div className="border-[1.5px] border-gray-300 h-[40px] px-2 rounded-lg text-[15px] flex">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Please enter your password",
                })}
                className="h-full focus:outline-none w-full"
              />
              <Image
                src={show ? "/eye-closed.svg" : "/eye.svg"}
                alt="view password"
                height={9999}
                width={9999}
                style={{ width: "28px" }}
                onClick={handleShow}
                className="w-fit"
              />
            </div>

            {errors.password && (
              <span className="text-[12.5px] opacity-50">
                Your password should be at least 8 characters long, include
                uppercase and lowercase letters, a number, and a special
                character.
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="confirmPassword"
              className="text-black text-opacity-60 text-sm font-[500]"
            >
              Re-Enter Password
            </label>
            <div className="border-[1.5px] border-gray-300 h-[40px] px-2 rounded-lg text-[15px] flex">
              <input
                type={show ? "text" : "password"}
                name="cPassword"
                placeholder="Re-enter your password"
                {...register("cPassword", {
                  required: "Confirm your password",
                  validate: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords do not match";
                  },
                })}
                className="h-full focus:outline-none w-full"
              />
              <Image
                src={show ? "/eye-closed.svg" : "/eye.svg"}
                alt="view password"
                height={9999}
                width={9999}
                style={{ width: "28px" }}
                onClick={handleShow}
                className="w-fit"
              />
            </div>
          </div>
          <Button text="Reset" isSubmitting={isSubmitting} />
        </form>
      </div>
    </section>
  );
};

export default Reset;
