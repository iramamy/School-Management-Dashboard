import Image from "next/image";
import Link from "next/link";

// Custom components
import TableSearch from "@/app/components/TableSearch";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import { role, resultsData } from "@/app/lib/data";
import FormModal from "@/app/components/FormModal";

type ResultType = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
};

const columns = [
  {
    header: "Subject",
    accessor: "subject",
    className: "hidden md:table-cell ",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell ",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell ",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden lg:table-cell ",
  },

  {
    header: "Type",
    accessor: "type",
    className: "hidden lg:table-cell ",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

const ResultPage = () => {
  const renderRow = (item: ResultType) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight cursor-pointer"
    >
      <td className="hidden md:table-cell">{item.subject}</td>
      <td>{item.student}</td>
      <td>{item.score}</td>
      <td className="hidden lg:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden lg:table-cell">{item.date}</td>
      <td className="hidden lg:table-cell">{item.type}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="result" type="update" id={item.id} />

              <FormModal table="result" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="result" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />

      {/* PAGINATION */}

      <Pagination />
    </div>
  );
};

export default ResultPage;
