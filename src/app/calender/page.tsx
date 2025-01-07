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
      // onDateChange(date);
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
            <div className="absolute w-2 h-2 bg-blue-300 translate-x-2.5 rounded-full"></div>
          }
        />
      </div>
      <div className="absolute top-0 left-1/2 bottom-0 flex justify-center items-center">
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
            <div className="absolute w-2 h-2 bg-blue-300 translate-x-2.5 rounded-full"></div>
          }
        />
      </div>
    </div>
  );
};

export default Page;
