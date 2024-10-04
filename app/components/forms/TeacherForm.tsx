"use client";
import Image from "next/image";

interface TeacherFormProps {
  type: "create" | "update" | "delete";
  data?: any;
}

const TeacherForm: React.FC<TeacherFormProps> = ({ type, data }) => {
  return (
    <form className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new teacher" : "Update teacher"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication information
      </span>

      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label className="text-sm text-gray-500 text-start">Username:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label className="text-sm text-gray-500 text-start">Email:</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label className="text-sm text-gray-500 text-start">Password:</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
          />
        </div>
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal information
      </span>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label className="text-sm text-gray-500 text-start">
            First name:
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label className="text-sm text-gray-500 text-start">Last name:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label className="text-sm text-gray-500 text-start">Phone:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label className="text-sm text-gray-500 text-start">Address:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label className="text-sm text-gray-500 text-start">
            Blood type:
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label className="text-sm text-gray-500 text-start">Birthday:</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label className="text-sm text-gray-500 text-start">Sex:</label>
          <select className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none cursor-pointer bg-white">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-2 border rounded-md justify-center">
          <input type="file" id="image" className="hidden border" />
          <label
            className="flex items-center gap-3 text-sm text-gray-500 text-start cursor-pointer"
            htmlFor="image"
          >
            <Image
              src="/upload.png"
              alt="Upload image"
              width={28}
              height={28}
            />{" "}
            Upload Photo:
          </label>
        </div>
      </div>

      <button className="bg-blue-400 rounded-md p-2 text-white hover:bg-blue-500">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
