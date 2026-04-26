"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/app/components/ui/sheet";
import { Button, buttonVariants } from "@/app/components/ui/button";

export function SimpleHeader() {
  const [open, setOpen] = React.useState(false);

  const links = [
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "Jobs",
      href: "/jobs",
    },
    {
      label: "Career Coaching",
      href: "/careerCoaching",
    },
  ];

  return (
    <header className="bg-white/95 supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-lg shadow-sm">
      <nav className="mx-auto flex h-16 tablet:h-20 w-full max-w-7xl items-center justify-between px-4 tablet:px-6 pc:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 tablet:gap-3 flex-shrink-0">
          <Image 
            src="/logo.svg" 
            alt="Japatech Logo" 
            width={40} 
            height={40} 
            className="w-8 h-8 tablet:w-10 tablet:h-10"
          />
          <span className="text-lg tablet:text-xl font-bold text-textDefault hidden tablet:block">
            JapaTech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden pc:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              className={buttonVariants({ variant: "ghost", className: "text-base" })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden pc:flex items-center gap-3">
          <Link href="/login">
            <Button variant="outline" className="text-base">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button className="text-base">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button 
              size="icon" 
              variant="outline" 
              className="pc:hidden"
            >
              <svg
                strokeWidth={2.5}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent
            className="bg-white/95 supports-[backdrop-filter]:bg-white/80 gap-0 backdrop-blur-lg w-[280px] tablet:w-[320px]"
            showClose={false}
            side="left"
          >
            {/* Mobile Logo */}
            <div className="flex items-center gap-3 px-4 pt-6 pb-4 border-b border-gray-200">
              <Image 
                src="/logo.svg" 
                alt="Japatech Logo" 
                width={32} 
                height={32} 
                className="w-8 h-8"
              />
              <span className="text-lg font-bold text-textDefault">
                JapaTech
              </span>
            </div>

            {/* Mobile Navigation Links */}
            <div className="grid gap-y-1 overflow-y-auto px-2 pt-4 pb-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className={buttonVariants({
                    variant: "ghost",
                    className: "justify-start text-base h-12",
                  })}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Buttons */}
            <SheetFooter className="flex-col gap-2">
              <Link href="/login" className="w-full" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" className="w-full" onClick={() => setOpen(false)}>
                <Button className="w-full">
                  Get Started
                </Button>
              </Link>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
