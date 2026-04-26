"use client";
import React from "react";
import Heading from "../component/heading";
import Button from "../component/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useJapaStore } from "@/app/store/store";

const ResetEmail = () => {
  const {
    handleSubmit,
    reset,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();
  const { resetPwdOTP } = useJapaStore((state) => ({
    resetPwdOTP: state.resetPwdOTP,
  }));

  const goBack = () => {
    router.back();
  };

  const onSubmit = async () => {
    try {
      await resetPwdOTP({ email: getValues("email") });
      router.push("/verifyAccount");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col m-auto justify-center max-w-[420px] items-center gap-4 py-10 px-[15px]">
      <div className="flex flex-col gap-6 w-full">
        <Heading
          title="Forgot Password?"
          text=" Enter your email address below to reset your password."
          goBack={goBack}
        />

        <form
          className="flex flex-col gap-3 mt-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-[6px]">
            <label
              for="email"
              className="text-black text-opacity-60 text-sm font-[500]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: true,
              })}
              className="border-[1.5px] border-gray-300 h-[40px] pl-2 rounded-lg text-[15px]"
            />
          </div>
          <Button text="Reset Password" isSubmitting={isSubmitting} />
        </form>
      </div>
    </section>
  );
};

export default ResetEmail;
