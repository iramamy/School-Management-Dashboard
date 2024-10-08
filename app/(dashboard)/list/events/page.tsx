import Image from "next/image";
import Link from "next/link";

// Custom components
import TableSearch from "@/app/components/TableSearch";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import { role, eventsData } from "@/app/lib/data";
import FormModal from "@/app/components/FormModal";

type EventType = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: number;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell ",
  },
  {
    header: "Date",
    accessor: "date",
  },
  {
    header: "startTime",
    accessor: "starttime",
    className: "hidden lg:table-cell",
  },
  {
    header: "endTime",
    accessor: "endtime",
    className: "hidden lg:table-cell ",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

const EventsPage = () => {
  const renderRow = (item: EventType) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight cursor-pointer"
    >
      <td>{item.title}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td>{item.date}</td>
      <td className="hidden lg:table-cell">{item.startTime}</td>
      <td className="hidden lg:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="event" type="update" id={item.id} />

              <FormModal table="event" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="event" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />

      {/* PAGINATION */}

      <Pagination />
    </div>
  );
};

export default EventsPage;
