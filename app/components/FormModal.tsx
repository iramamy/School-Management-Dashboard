"use client";
import Image from "next/image";
import { useState } from "react";

// Custom components
import TeacherForm from "./forms/TeacherForm";
import StudentForm from "./forms/StudentForm";

interface FormModalProps {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignments"
    | "result"
    | "attendance"
    | "event"
    | "announcements";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}

const FormModal: React.FC<FormModalProps> = ({ table, type, data, id }) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const [open, setOpen] = useState(false);

  const Form: React.FC<FormModalProps> = ({ table, type }) => {
    return type === "delete" && id ? (
      <form className="flex flex-col gap-4 py-4">
        <span className="text-center font-medium text-lg">
          All your data in {table} will be deleted, are you sure?
        </span>
        <div className="flex justify-center gap-4">
          <button
            className=" bg-gray-500 rounded-md border-none text-white px-4 py-2 hover:bg-gray-600"
            onClick={() => setOpen(!open)}
          >
            Cancel
          </button>
          <button className=" bg-red-700 rounded-md border-none text-white px-4 py-2 hover:bg-red-800">
            Delete
          </button>
        </div>
      </form>
    ) : table === "teacher" ? (
      <TeacherForm type={type} />
    ) : (
      <StudentForm type={type} />
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(!open)}
      >
        <Image src={`/${type}.png`} alt="Image" width={16} height={16} />
      </button>

      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center cursor-default">
          <div className="relative bg-white rounded-md p-4 w-[97%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
            <Form table={table} type={type} />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="Close Icon" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
