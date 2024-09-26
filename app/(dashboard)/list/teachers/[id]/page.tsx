import Image from "next/image";
import Link from "next/link";

import Announcements from "@/app/components/Announcements";
import BigCalendar from "@/app/components/BigCalendar";
import Performance from "@/app/components/Performance";

const singleTeacherPage = () => {
  return (
    <div className="flex-1 flex flex-col lg:flex-row gap-4 p-4">
      {/* Left */}

      <div className="w-full lg:w-2/3">
        {/* Top */}

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Teacher info card */}

          <div className="flex-1 flex gap-4 bg-lamaSky rounded-md py-6 px-4">
            <div className="w-1/3">
              <Image
                src="/img.png"
                alt="Teacher image"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="md:text-lg lg:text-xl font-semibold">
                Lorem, ipsum.
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="flex items-center  justify-between flex-wrap gap-2 text-xs">
                <div className="w-full md:w-1/3  lg:w-full flex items-center gap-2">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  {/* class width={14} heiht={14} fo real image not svg*/}
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3  lg:w-full flex items-center gap-2">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3  lg:w-full flex items-center gap-2">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <span>user@example.com</span>
                </div>
                <div className="w-full md:w-1/3  lg:w-full flex items-center gap-2">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <span>(+123)-34-234-89</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small card */}

          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* Card 1 */}

            <div className="w-full md:w-[47.5%] flex gap-2 bg-white rounded-md p-2">
              {/* class width={24} height={24} for real image not svg */}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <div className="">
                <h1 className="text-md lg:text-xl">90%</h1>
                <span className="text-sm text-gray-500">Attendance</span>
              </div>
            </div>
            {/* Card 2 */}

            <div className="w-full md:w-[47.5%] flex gap-2 bg-white rounded-md p-2">
              {/* class width={24} height={24} for real image not svg */}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <div className="">
                <h1 className="text-md lg:text-xl">5</h1>
                <span className="text-sm text-gray-500">Classes</span>
              </div>
            </div>
            {/* Card 3 */}

            <div className="w-full md:w-[47.5%] flex gap-2 bg-white rounded-md p-2">
              {/* class width={24} height={24} for real image not svg */}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <div className="">
                <h1 className="text-md lg:text-xl">20%</h1>
                <span className="text-sm text-gray-500">Lesson</span>
              </div>
            </div>
            {/* Card 4 */}

            <div className="w-full md:w-[47.5%] flex gap-2 bg-white rounded-md p-2">
              {/* class width={24} height={24} for real image not svg */}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <div className="">
                <h1 className="text-md lg:text-xl">2</h1>
                <span className="text-sm text-gray-500">Branches</span>
              </div>
            </div>
          </div>
        </div>
        {/* Botton */}

        <div className="bg-white rounded-md mt-4 p-4 lg:h-[700px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}

      <div className="w-full lg:w-1/3 flex flex-col gap-3">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-lg font-semibold">Shortcuts</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <Link href="/" className="bg-lamaSkyLight rounded-md p-3">
              Teacher&apos;s Classes
            </Link>
            <Link href="/" className="bg-lamaPurpleLight rounded-md p-3">
              Teacher&apos;s Students
            </Link>
            <Link href="/" className="bg-lamaSkyLight rounded-md p-3">
              Teacher&apos;s Lessons
            </Link>
            <Link href="/" className="bg-lamaYellowLight rounded-md p-3">
              Teacher&apos;s Exams
            </Link>
            <Link href="/" className="bg-lamaSkyLight rounded-md p-3">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default singleTeacherPage;
