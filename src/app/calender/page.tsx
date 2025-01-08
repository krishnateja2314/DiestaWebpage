"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";
import data from "./data.json";
import { useState } from "react";
import { Value } from "react-calendar/src/shared/types.js";

const Page = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const hasEvent = (date: Date) => {
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(" ", " ");

    return data.findIndex((event) => event.date == formattedDate) != -1;
  };

  const handleDateChange = (date: Value) => {
    if (date instanceof Date) {
      setSelectedDate(date);
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div className="absolute top-0 left-1/3 transform -translate-x-1/2 bottom-0 flex justify-center items-center">
        <Calendar
          formatMonthYear={(locale, date) =>
            date.toLocaleString(locale, { month: "long" })
          }
          onChange={handleDateChange}
          value={selectedDate}
          showNavigation={true}
          prevLabel={null}
          nextLabel={null}
          prev2Label={null}
          next2Label={null}
          tileContent={({ date, view }) =>
            view == "month" && hasEvent(date) &&
            <div className="absolute w-2 h-2 bg-blue-300 rounded-full"></div>
          }
        />
      </div>
      <div className="absolute top-0 left-1/2 bottom-0 flex justify-center items-center text-center">
        <div className="bg-white p-4 rounded-lg shadow-lg w-64">
          <h1 className="text-2xl font-bold text-black">
            {selectedDate.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </h1>
          {data.filter(
            (event) =>
              event.date ==
              selectedDate
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                .replace(" ", " ")
          )
            .map((event) => (
              <div className="mx-auto my-0 text-center">
                <h2 className="text-black text-lg font-bold">{event.title}</h2>
                <p className="text-black text-lg">{event.description}</p>
              </div>
            ))}
          {data.filter(
            (event) =>
              event.date ==
              selectedDate
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                .replace(" ", " ")
          ).length === 0 && (
              <p className="text-black text-lg">No events for this day</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default Page;
