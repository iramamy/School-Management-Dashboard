"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4">
      {/* Search bar */}
      <div className="hidden md:flex items-center gap-3 text-xs rounded-full border border-gray-400 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search ..."
          className="p-2 ps-0 bg-transparent outline-none"
        />
      </div>

      {/* Icons and user */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer hover:text-gray-500">
          <Image src="/message.png" alt="Message" width={20} height={20} />
        </div>
        <div
          className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer hover:text-gray-500"
          onClick={() => router.push("/list/announcements")}
        >
          <Image
            src="/announcement.png"
            alt="Announcement"
            width={20}
            height={20}
          />
          <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-600 text-white text-xs rounded-full">
            1
          </div>
        </div>
        <div className="flex flex-col cursor-pointer">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="font-light text-gray-500 text-xs text-right">
            Admin
          </span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
