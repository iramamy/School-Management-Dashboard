"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// Custom components
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="h-screen flex">
      {/* Left */}
      <div
        className={`relative w-[5%] pt-4 mx-2 ${
          open ? "lg:w-[18%] lg:px-8" : "w-[5%]"
        } `}
      >
        {!open && (
          <div
            className="hidden lg:flex justify-center items-center mb-4"
            onClick={() => setOpen(!open)}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer hover:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}
        <Link
          href="/"
          className={`flex items-center justify-center ${
            open ? "lg:justify-start" : ""
          } gap-4 my-2`}
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className={`hidden font-bold ${open ? "lg:block" : ""}`}>
            ShooLama
          </span>
        </Link>
        {open && (
          <div
            className="absolute hidden top-6 right-4 lg:block cursor-pointer hover:text-gray-500"
            onClick={() => setOpen(!open)}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}

        <Menu isOpen={open} />
      </div>
      {/* Right */}
      <div
        className={`w-[95%] flex flex-col ${
          open ? "lg:w-[82%]" : "w-[95%]"
        }  bg-gray-50 overflow-scroll`}
      >
        <Navbar />
        {children}
      </div>
    </div>
  );
}
