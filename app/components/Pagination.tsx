const Pagination = () => {
  return (
    <div className="flex items-center justify-between py-4 text-gray-500">
      <button
        disabled
        className="rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed py-2 px-4"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="rounded-sm bg-lamaSky px-2">1</button>
        <button className="rounded px-2">2</button>
        <button className="rounded px-2">3</button>
        <span> ... </span>
        <button className="rounded px-2">10</button>
      </div>
      <button className="rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed py-2 px-4">
        Next
      </button>
    </div>
  );
};

export default Pagination;
