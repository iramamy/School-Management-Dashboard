const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-3 text-xs rounded-full border border-gray-400 px-2">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search ..."
        className="p-2 ps-0 bg-transparent outline-none"
      />
    </div>
  );
};

export default TableSearch;
