"use client";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { Value } from "react-calendar/src/shared/types.js";
interface Event {
  data: {
    title: string;
    date: string;
    description: string;
    time: string;
  }[];
}
const Calender = ({ data }: Event) => {
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
    <>
      <div className="pt-32">
        <div className="flex text-white">
          <Calendar
            className={"rounded-2xl text-black bg-black"}
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
              view == "month" &&
              hasEvent(date) && (
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              )
            }
          />
        </div>
        <div className="">
          <div className="bg-black text-white p-4 rounded-xl  w-64">
            <h1 className="text-2xl font-bold ">
              {selectedDate.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </h1>
            {data
              .filter(
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
              .map((event, key) => (
                <div key={key} className="mx-auto my-0 text-center">
                  <h2 className="text-white text-lg font-bold">
                    {event.title}
                  </h2>
                  <h3>Time: {event.time}</h3>
                  <p className="text-white text-lg">{event.description}</p>
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
              <p className="text-white text-lg">No events for this day</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;
