"use client";

const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400 font-light cursor-pointer hover:text-gray-900">
          View all
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {/* Announcement 1 */}
        <div className="bg-lamaSkyLight rounded-md p-4 mt-2">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-gray-600 text-sm">
              Lorem ipsum dolor sit.
            </h1>
            <span className="text-gray-600 text-xs bg-white rounded-md px-2">
              2025-05-08
            </span>
          </div>
          <p className="font-light text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {/* Announcement 2 */}

        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-gray-600 text-sm">
              Lorem ipsum dolor sit.
            </h1>
            <span className="text-gray-600 text-xs bg-white rounded-md px-2">
              2025-05-08
            </span>
          </div>
          <p className="font-light text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {/* Announcement 3 */}

        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-gray-600 text-sm">
              Lorem ipsum dolor sit.
            </h1>
            <span className="text-gray-600 text-xs bg-white rounded-md px-2">
              2025-05-08
            </span>
          </div>
          <p className="font-light text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
