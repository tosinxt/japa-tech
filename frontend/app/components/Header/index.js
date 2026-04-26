"use client";
import { useJapaStore } from "@/app/store/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const currentPath = usePathname();
  const signedIn = useJapaStore((state) => state.signedIn);
  const user = useJapaStore((state) => state.user);
  const logout = useJapaStore((state) => state.logout);
  const [dropDown, setDropDown] = useState(false);
  const router = useRouter();

  // Modified isActive function
  const isActive = (path) => {
    // Check for exact match or if currentPath starts with the path and has a trailing slash
    return (
      currentPath === path ||
      (path === "/jobs" && currentPath.startsWith("/jobs/")) ||
      (path === "/courses" && currentPath.startsWith("/courses/"))
    );
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/");
    } catch (err) {

    }
  };

  const NavLink = ({ text, path }) => (
    <Link
      href={path}
      className={`group relative rounded-full text-sm tablet:text-base w-fit px-4 tablet:px-6 h-10 font-medium flex items-center justify-center transition-all duration-300 ${
        isActive(path)
          ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/30"
          : "text-textDefault hover:text-primary hover:bg-primaryLight"
      }`}
    >
      {text}
      {!isActive(path) && (
        <span className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      )}
    </Link>
  );

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const DropDown = () => {
    return (
      <div className="flex flex-col gap-6 absolute top-full right-0 bg-white/95 backdrop-blur-xl px-6 py-8 min-h-screen shadow-2xl animate-slideIn border-l border-gray-100">
        {signedIn ? (
          <div className="flex flex-col gap-6">
            <NavLink path="/" text={"Home"} />
            <NavLink path="/applied" text={"Applied"} />
            <NavLink path="/careerCoaching" text={"Career Coaching"} />
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <NavLink path="/" text={"Home"} />
            <NavLink path="/courses" text={"Courses"} />
            <NavLink
              path="https://docs.google.com/forms/d/1OsZ5mkU3BAB0Cfv_BmcrlCjU7ZUGKm22GSWtSRT7px4/viewform?ref=dishapages&edit_requested=true"
              text={"CV Revamp"}
            />
          </div>
        )}

        {signedIn ? (
          <div className="flex flex-col gap-6">
            <div className="text-xs">{user.email}</div>
            <div
              onClick={handleLogout}
              className="text-xs text-primary cursor-pointer underline"
            >
              Logout
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <NavLink path="/careerCoaching" text={"Career Coaching"} />
            <NavLink path={"/jobs"} text={"Jobs"} />
            <NavLink path="/login" text={"Login"} />
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="pt-4 pb-4 tablet:pt-6 tablet:pb-4 border-b border-gray-100 fixed top-0 bg-white/80 backdrop-blur-lg w-full z-50 shadow-sm">
      <div className="flex justify-between items-center tablet:px-[64px] px-[15px] relative">
        <div className="hidden tablet:block">
          {signedIn ? (
            <div className="flex gap-3">
              <NavLink path="/" text={"Home"} />
              <NavLink path="/applied" text={"Applied"} />
              <NavLink path="/careerCoaching" text={"Career Coaching"} />
            </div>
          ) : (
            <div className="flex gap-3">
              <NavLink path="/" text={"Home"} />
              <NavLink path="/courses" text={"Courses"} />
              <NavLink
                path="https://docs.google.com/forms/d/1OsZ5mkU3BAB0Cfv_BmcrlCjU7ZUGKm22GSWtSRT7px4/viewform?ref=dishapages&edit_requested=true"
                text={"CV Revamp"}
              />
            </div>
          )}
        </div>
        <div>
          <Link href={"/"} className="w-fit">
            <Image
              src="/logo.svg"
              alt=""
              height={9999}
              width={9999}
              style={{ height: "40px", width: "100px", maxWidth: "200px" }}
            />
          </Link>
        </div>
        <button 
          className="tablet:hidden block p-2 hover:bg-primaryLight rounded-lg transition-colors duration-300"
          onClick={toggleDropDown}
          aria-label="Toggle menu"
        >
          {dropDown ? (
            <svg className="w-6 h-6 text-textDefault" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-textDefault" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
          {dropDown && <DropDown />}
        </button>
        <div className="hidden tablet:block">
          {signedIn ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-primaryLight rounded-full">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                  {user.email?.charAt(0)?.toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-textDefault">{user.email}</div>
                </div>
              </div>
              <button
                className="text-sm text-primary hover:text-purple-700 font-medium px-4 py-2 hover:bg-primaryLight rounded-full transition-all duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <NavLink path="/careerCoaching" text={"Career Coaching"} />
              <NavLink path={"/jobs"} text={"Jobs"} />
              <NavLink path="/login" text={"Login"} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
