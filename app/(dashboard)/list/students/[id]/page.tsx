import Image from "next/image";
import Link from "next/link";

import Announcements from "@/app/components/Announcements";
import BigCalendar from "@/app/components/BigCalendar";
import Performance from "@/app/components/Performance";
import FormModal from "@/app/components/FormModal";

const singleStudentPage = () => {
  return (
    <div className="flex-1 flex flex-col lg:flex-row gap-4 p-4">
      {/* Left */}

      <div className="w-full lg:w-2/3">
        {/* Top */}

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Student info card */}

          <div className="flex-1 flex gap-4 bg-lamaSky rounded-md py-6 px-4">
            <div className="w-1/3">
              <Image
                src="/profile1.png"
                alt="Student image"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex gap-4">
                <h1 className="md:text-lg lg:text-xl font-semibold">
                  Lorem, ipsum.
                </h1>
                <FormModal table="student" type="update" />
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="flex items-center  justify-between flex-wrap gap-2 text-xs">
                <div className="w-full md:w-1/3  lg:w-full flex items-center gap-2">
                  <Image src="/blood.png" alt="Blood" width={14} height={14} />

                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3  lg:w-full flex items-center gap-2">
                  <Image src="/date.png" alt="Date" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3  lg:w-full flex items-center gap-2">
                  <Image src="/mail.png" alt="Mail" width={14} height={14} />
                  <span>user@example.com</span>
                </div>
                <div className="w-full md:w-1/3  lg:w-full flex items-center gap-2">
                  <Image src="/phone.png" alt="Phone" width={14} height={14} />
                  <span>(+123)-34-234-89</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small card */}

          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* Card 1 */}

            <div className="w-full md:w-[46%] flex gap-2 bg-white rounded-md p-2">
              <Image
                src="/singleAttendance.png"
                alt="Attendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md lg:text-xl">90%</h1>
                <span className="text-sm text-gray-500">Attendance</span>
              </div>
            </div>
            {/* Card 2 */}

            <div className="w-full md:w-[46%] flex gap-2 bg-white rounded-md p-2">
              <Image
                src="/singleClass.png"
                alt="Grade"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md lg:text-xl">6th</h1>
                <span className="text-sm text-gray-500">Grade</span>
              </div>
            </div>
            {/* Card 3 */}

            <div className="w-full md:w-[46%] flex gap-2 bg-white rounded-md p-2">
              <Image
                src="/singleLesson.png"
                alt="Lessons"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md lg:text-xl">18</h1>
                <span className="text-sm text-gray-500">Lessons</span>
              </div>
            </div>
            {/* Card 4 */}

            <div className="w-full md:w-[46%] flex gap-2 bg-white rounded-md p-2">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md lg:text-xl">6A</h1>
                <span className="text-sm text-gray-500">Class name</span>
              </div>
            </div>
          </div>
        </div>
        {/* Botton */}

        <div className="bg-white rounded-md mt-4 p-4 lg:h-[700px]">
          <h1 className="text-xl font-semibold">Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}

      <div className="w-full lg:w-1/3 flex flex-col gap-3">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-lg font-semibold">Shortcuts</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <Link href="/" className="bg-lamaSkyLight rounded-md p-3">
              Student&apos;s Lessons
            </Link>
            <Link href="/" className="bg-lamaPurpleLight rounded-md p-3">
              Student&apos;s Teachers
            </Link>
            <Link href="/" className="bg-lamaSkyLight rounded-md p-3">
              Student&apos;s Results
            </Link>
            <Link href="/" className="bg-lamaYellowLight rounded-md p-3">
              Student&apos;s Exams
            </Link>
            <Link href="/" className="bg-lamaSkyLight rounded-md p-3">
              Student&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default singleStudentPage;
