"use client";
import Button from "@/app/components/Button";
import Button2 from "@/app/components/Button2";
import Modal from "@/app/components/Modal";
import { useJapaStore } from "@/app/store/store";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Job = () => {
  const { job } = useParams();
  const { jobById, findJobByID, applyForJobs, user } = useJapaStore(
    (state) => ({
      jobById: state.job,
      findJobByID: state.findJobByID,
      applyForJobs: state.applyForJobs,
      user: state.user,
    })
  );
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    if (!user) {
      toast.error("Kindly sign in to apply for a Job");

      return;
    }

    let redirectUrl = jobById?.link;
    if (
      redirectUrl &&
      !redirectUrl.startsWith("http://") &&
      !redirectUrl.startsWith("https://")
    ) {
      redirectUrl = `https://${redirectUrl}`;
    }
    window.open(redirectUrl, "_blank");

    setOpenModal(true);
  };

  const handleApply = async () => {
    const user_id = user?._id;
    const job_id = job;

    if (!user) {
      toast.error("Kindly sign in to apply for a Job");

      return;
    }

    try {
      await applyForJobs({ user_id, job_id });
    } catch (error) {
      console.error("Failed to apply:", error);
    }
  };

  useEffect(() => {
    findJobByID(job);
    Aos.init({ once: true });
  }, [job, findJobByID]);

  const Summary = ({ display }) => (
    <div className={`flex-col gap-7 py-5 px-3 border rounded-xl ${display}`}>
      <div className="flex flex-col gap-2">
        <p className="text-xl tablet:text-3xl font-bold">Summary</p>
        <hr className="h-[3px] w-12 bg-primary" />
      </div>
      <div className="flex justify-between gap-2 tablet:text-base text-sm">
        <p className="font-medium">Job Type</p>
        <span className="font-light">{jobById?.job_type}</span>
      </div>
      <div className="flex justify-between gap-2 tablet:text-base text-sm">
        <p className="font-medium">Posted </p>
        <span className="font-light">{jobById?.date_posted.slice(0, 10)}</span>
      </div>
      <div className="flex justify-between gap-2 tablet:text-base text-sm">
        <p className="font-medium">Salary</p>
        <span className="font-light">20,000</span>
      </div>
      <div className="flex justify-between gap-2 tablet:text-base text-sm">
        <p className="font-medium">Experience </p>
        <span className="font-light">{jobById?.experience}</span>
      </div>
      <div className="flex justify-between gap-2 tablet:text-base text-sm">
        <p className="font-medium">Applied</p>
        <span className="font-light">30 Applicants</span>
      </div>
    </div>
  );

const Share = () => {
  const jobUrl = encodeURIComponent(window.location.href);
  const jobTitle = encodeURIComponent(jobById?.job_title);

  return (
    <div className="flex flex-col gap-7 py-5 px-3 border rounded-xl">
      <div className="flex flex-col gap-2">
        <p className="text-xl tablet:text-3xl font-bold">Share with</p>
        <hr className="h-[3px] w-12 bg-primary" />
      </div>
      <div className="flex justify-between items-center">
        {/* Twitter */}
        <Link
          href={`https://twitter.com/intent/tweet?url=${jobUrl}&text=Check out this job opportunity: ${jobTitle}`}
          target="_blank"
        >
          <Image
            src={"/twitter2.svg"}
            height={24}
            width={24}
            alt="twitter"
            className="hover:scale-[1.1] ease-in-out"
          />
        </Link>

        {/* LinkedIn */}
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${jobUrl}&title=${jobTitle}`}
          target="_blank"
        >
          <Image
            src={"/linkedin2.svg"}
            height={24}
            width={24}
            alt="linkedin"
            className="hover:scale-[1.1] ease-in-out"
          />
        </Link>

        {/* Facebook */}
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${jobUrl}`}
          target="_blank"
        >
          <Image
            src={"/fb.svg"}
            height={12}
            width={12}
            alt="facebook"
            className="hover:scale-[1.1] ease-in-out"
          />
        </Link>

        {/* Instagram - No direct URL for sharing */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast.success("Link copied! Share on Instagram.");
          }}
        >
          <Image
            src={"/instagram.svg"}
            height={24}
            width={24}
            alt="instagram"
            className="hover:scale-[1.1] ease-in-out"
          />
        </button>
      </div>
    </div>
  );
};


  const Tags = () => (
    <div className="flex flex-col gap-4 py-5 px-3 border rounded-xl">
      <div className="flex flex-col gap-2">
        <p className="text-xl tablet:text-3xl font-bold">Tags</p>
        <hr className="h-[3px] w-12 bg-primary" />
      </div>
    </div>
  );

  return (
    <section className="mt-24 tablet:mt-36  tablet:mx-[64px] mx-[15px] text-textDefault">
      <div key={jobById?._id} className="flex flex-col gap-9">
        <div className="bg-lightPurple flex flex-col tablet:flex-row gap-4 tablet:gap-7 tablet:justify-between tablet:items-center px-4 tablet:px-[40px] tablet:h-[180px] rounded-lg py-8">
          <div>
            <p className="font-bold text-xl tablet:text-3xl pb-1 tablet:pb-2">
              {jobById?.job_title}
            </p>
            <p className="font-medium text-base tablet:text-lg pb-2 tablet:pb-1">
              {jobById?.company_name}
            </p>
            <p className="text-textNeutral text-sm">{jobById?.location}</p>
          </div>
          <div className="w-full flex items-end justify-end">
            <Button2
              text={"Apply Now"}
              onClick={handleOpenModal}
              bgColor={"bg-primary"}
              color={"text-white"}
              width={"w-fit"}
              src={"/apply.svg"}
            />
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row tablet:gap-36 justify-between">
          {/**First Layout */}
          <div className="flex flex-col gap-6 tablet:gap-4">
            <Summary display={"tablet:hidden flex"} />
            <div className="flex flex-col gap-2 tablet:gap-3 tablet:mt-0 mt-5">
              <p className="text-base tablet:text-2xl font-bold">About Job</p>
              <p className="tablet:text-base text-sm">{jobById?.about}</p>
            </div>
            {jobById?.what_you_will_be_doing && (
              <div className="flex flex-col gap-2 tablet:gap-3">
                <p className="text-base tablet:text-2xl font-bold">
                  What you will be doing
                </p>
                <ul className="tablet:text-base text-sm">
                  {jobById.what_you_will_be_doing.split(/\. |.\n\n|.\n/).map((about, index) => (
                    <li className="list-disc list-inside pl-2" key={index}>
                      {about}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {jobById?.what_we_are_lookin_for && (
              <div className="flex flex-col gap-2 tablet:gap-3">
                <p className="text-base tablet:text-2xl font-bold">
                  What we are looking for
                </p>
                <ul className="tablet:text-base text-sm">
                  {jobById.what_we_are_lookin_for
                    .split(/\. |.\n\n|.\n/)
                    .map((look, index) => (
                      <li className="list-disc list-inside pl-2" key={index}>
                        {look}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            {jobById?.nice_to_have && (
              <div className="flex flex-col gap-2 tablet:gap-3">
                <p className="text-base tablet:text-2xl font-bold">
                  Nice to have
                </p>
                <ul className="tablet:text-base text-sm">
                  {jobById.nice_to_have
                    .split(/\. |.\n\n|.\n/)
                    .map((have, index) => (
                      <li className="list-disc list-inside pl-2" key={index}>
                        {have}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            {jobById?.ideal_candidate && (
              <div className="flex flex-col gap-2 tablet:gap-3">
                <p className="text-base tablet:text-2xl font-bold">
                  Preferred candidate data
                </p>
                <ul className="tablet:text-base text-sm">
                  {jobById.ideal_candidate
                    .split(/\. |.\n\n|.\n/)
                    .map((have, index) => (
                      <li className="list-disc list-inside pl-2" key={index}>
                        {have}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            {jobById?.skills && (
              <div className="flex flex-col gap-2 tablet:gap-3">
                <p className="text-base tablet:text-2xl font-bold">Skills</p>

                <ul className="tablet:text-base text-sm">
                  <p>
                    The {jobById?.job_title} role requires the following skills:
                  </p>
                  {jobById.skills.split(/\. |.\n\n|.\n/).map((skill, index) => (
                    <li className="list-disc list-inside pl-2" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/**Second Layout */}
          <div className="tablet:min-w-[350px] flex flex-col gap-6 mt-4 tablet:mt-0 ">
            <Summary display={"tablet:flex hidden"} />
            <Share />
            {/* <Tags /> */}
          </div>
          <button
            onClick={handleOpenModal}
            className="my-8 text-white w-full bg-primary text-sm tablet:text-base py-2 px-5 hover:opacity-90 gap-1 rounded-[30px] border border-primary text-center h-fit block tablet:hidden"
          >
            Apply now
          </button>
        </div>
        <Button2
          text={"Apply Now"}
          bgColor={"bg-primary hidden tablet:flex"}
          color={"text-white"}
          width={"w-fit"}
          onClick={handleOpenModal}
        />
      </div>
      <Modal
        handleApply={handleApply}
        onClose={() => setOpenModal(false)}
        isOpen={openModal}
        job_title={jobById?.job_title}
        job_company={jobById?.company_name}
        user_name={user?.first_name}
      />
    </section>
  );
};

export default Job;
