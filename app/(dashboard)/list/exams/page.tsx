import Image from "next/image";
import Link from "next/link";

// Custom components
import TableSearch from "@/app/components/TableSearch";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import { role, examsData } from "@/app/lib/data";
import FormModal from "@/app/components/FormModal";

type ExamsType = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: number;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden lg:table-cell ",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell ",
  },
  {
    header: "Date",
    accessor: "date",
    className: "",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const ExamsPage = () => {
  const renderRow = (item: ExamsType) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight cursor-pointer"
    >
      <td className="flex items-center gap-3 p-2">{item.subject}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>{item.date}</td>

      <td>
        <div className="flex items-center text-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="exam" type="update" id={item.id} />

              <FormModal table="exam" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Exams</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="exam" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={examsData} />

      {/* PAGINATION */}

      <Pagination />
    </div>
  );
};

export default ExamsPage;
