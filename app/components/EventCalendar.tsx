"use client";

import { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary data
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    time: "12:00 PM - 02:00 PM",
    description: "Lorem ipsum dolor sit amet Lorem ipsum",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    time: "12:00 PM - 02:00 PM",
    description: "Lorem ipsum dolor sit amet Lorem ipsum",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    time: "12:00 PM - 02:00 PM",
    description: "Lorem ipsum dolor sit amet Lorem ipsum",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white rounded-md p-4">
      {" "}
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Events</h1>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="px-3 pb-2 rounded-md border-2 border-gray-200 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600 text-sm">
                {event.title}
              </h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="font-light text-sm text-gray-500">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
