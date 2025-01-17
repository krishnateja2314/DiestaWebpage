"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/src/shared/types.js";
import "./CustomCalendar.css";
interface CultiEvent {
  title: string;
  date: string;
  Status: string;
  time: string;
}

interface SportsEvent {
  sport: string;
  matchtype: string;
  date: string;
  time: string;
  TeamA: string;
  TeamB: string;
  Status: string;
  Winner: string;
}

interface EventProps {
  culturalEvents?: CultiEvent[];
  sportEvents?: SportsEvent[];
}

const Calender = ({ culturalEvents = [], sportEvents = [] }: EventProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("cultural");

  const hasEvent = (date: Date) => {
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, " ");

    return (
      culturalEvents.findIndex((event) => event.date === formattedDate) !==
        -1 ||
      sportEvents.findIndex((event) => event.date === formattedDate) !== -1
    );
  };

  const handleDateChange = (date: Value) => {
    if (date instanceof Date) {
      setSelectedDate(date);
    }
  };

  const formattedSelectedDate = selectedDate
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(" ", " ");

  const eventsForSelectedDate = [
    ...culturalEvents.filter((event) => event.date === formattedSelectedDate),
    ...sportEvents.filter((event) => event.date === formattedSelectedDate),
  ];

  return (
    <>
      <div className="pt-32 flex flex-col items-center space-y-8 overflow-x-hidden">
        <div className="flex justify-center space-x-4">
            <button
              className={`p-2 rounded ${
              activeTab === "cultural"
              ? "bg-black text-purple-500 shadow-[0_0_10px_5px_rgba(192,132,252,0.5)]"
              : "bg-black text-white"
              }`}
              onClick={() => setActiveTab("cultural")}
            >
              Cultural Events
            </button>
            <button
              className={`p-2 rounded ${
              activeTab === "sports"
              ? "bg-black text-purple-500 shadow-[0_0_10px_5px_rgba(192,132,252,0.5)]"
              : "bg-black text-white"
              }`}
              onClick={() => setActiveTab("sports")}
            >
              Sports Events
            </button>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex justify-center mt-8 md:mt-0">
            <Calendar
              className="calendar-custom"
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
              view === "month" &&
              hasEvent(date) && (
                <div className="w-2 h-2 bg-purple-700 rounded-full"></div>
              )
              }
            />
            </div>
          <div
            className="bg-black text-white p-4 rounded-xl text-center w-full md:w-[30vw]"
          >
            <h1 className="text-2xl font-bold" style={{ color: "#C084FC" }}>
              {activeTab === "cultural" ? "Cultural Events" : "Sports Events"}
            </h1>
            <h2 className="text-lg" style={{ color: "#C084FC" }}>
              {formattedSelectedDate}
            </h2>
            <div className="my-4 border-t border-gray-500"></div>
            {activeTab === "cultural" ? (
              eventsForSelectedDate.filter((event) => "title" in event).length >
              0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {eventsForSelectedDate
                    .filter((event) => "title" in event)
                    .map((event, key) => (
                      <div
                        key={key}
                        className="mx-auto my-0 text-center p-2 rounded w-full"
                        style={{ borderBottom: "1px solid gray" }}
                      >
                        <h2
                          className="text-white text-lg font-bold"
                          style={{ color: "#C084FC" }}
                        >
                          {event.title}
                        </h2>
                        <h3 className="text-sm">Time: {event.time}</h3>
                        <p className="text-sm">Status: {event.Status}</p>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-white text-lg">
                  No cultural events for this day
                </p>
              )
            ) : eventsForSelectedDate.filter((event) => "sport" in event).length >
              0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {eventsForSelectedDate
                  .filter((event) => "sport" in event)
                  .map((event, key) => (
                    <div
                      key={key}
                      className="mx-auto my-0 text-center p-2 rounded w-full"
                      style={{ borderBottom: "1px solid gray" }}
                    >
                      <h2
                        className="text-white text-lg font-bold"
                        style={{ color: "#C084FC" }}
                      >
                        {event.sport} - {event.matchtype}
                      </h2>
                      <h3 className="text-sm">
                        Participants: {" "}
                        <span className="font-semibold">{event.TeamA}</span>{" "}
                        <span className="text-lg">
                          {" "}
                          vs{" "}
                        </span>{" "}
                        <span className="font-semibold">{event.TeamB}</span>
                      </h3>
                      <h3 className="text-sm">Time: {event.time}</h3>
                      <p className="text-sm">Status: {event.Status}</p>
                      <p className="text-sm">Winner: {event.Winner}</p>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-white text-lg">No sports events for this day</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;
