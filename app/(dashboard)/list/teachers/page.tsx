import Image from "next/image";
import Link from "next/link";

// Custom components
import TableSearch from "@/app/components/TableSearch";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import { role, teachersData } from "@/app/lib/data";
import FormModal from "@/app/components/FormModal";

type TeacherType = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacher",
    className: "hidden md:table-cell ",
  },
  {
    header: "Subject",
    accessor: "subject",
    className: "hidden md:table-cell ",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell ",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell ",
  },

  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell ",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

const TeachersListsPage = () => {
  const renderRow = (item: TeacherType) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight cursor-pointer"
    >
      <td className="flex items-center gap-3 p-2">
        <Image
          src={item.photo}
          alt="Photo"
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full text-gray-500"
        />
        <div>
          <h2 className="font-semibold">{item.name}</h2>
          <span className="text-xs text-gray-500 font-light">
            {item?.email}
          </span>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(", ")}</td>
      <td className="hidden md:table-cell">{item.classes.join(", ")}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="teacher" type="update" id={item.id} />

              <FormModal table="teacher" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={teachersData} />

      {/* PAGINATION */}

      <Pagination />
    </div>
  );
};

export default TeachersListsPage;
