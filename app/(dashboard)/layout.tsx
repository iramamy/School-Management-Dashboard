"use client";
import Link from "next/link";
import { useState } from "react";

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
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
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
        className={`w-[95%] ${
          open ? "lg:w-[82%]" : "w-[95%]"
        }  bg-gray-50 overflow-scroll`}
      >
        <Navbar />
        {children}
      </div>
    </div>
  );
}
