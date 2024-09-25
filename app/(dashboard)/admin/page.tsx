// Custom components
import UserCard from "@/app/components/UserCard";
import CountCharts from "@/app/components/CountCharts";
import AttendanceChart from "@/app/components/AttendanceChart";
import FinanceChart from "@/app/components/FinanceChart";
import EventCalendar from "@/app/components/EventCalendar";
import Annoucements from "@/app/components/Announcements";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}

      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        {/* User card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Student" />
          <UserCard type="Teachers" />
          <UserCard type="pareents" />
          <UserCard type="staffs" />
        </div>

        {/* Middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count charts */}
          <div className=" w-full lg:w-1/3 h-[450px]">
            <CountCharts />
          </div>
          {/* Attendance charts */}
          <div className=" w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* Bottom charts */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <EventCalendar />
        <Annoucements />
      </div>
    </div>
  );
};

export default AdminPage;
