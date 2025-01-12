"use client";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { Value } from "react-calendar/src/shared/types.js";

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

  const hasEvent = (date: Date) => {
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, " ");

    return (
      culturalEvents.findIndex((event) => event.date === formattedDate) !== -1 ||
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
      <div className="pt-32 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="bg-black text-white p-4 rounded-xl flex-1 text-center">
        <h1 className="text-2xl font-bold" style={{ color: '#C084FC' }}>Cultural Events</h1>
        <h2 className="text-lg" style={{ color: '#C084FC' }}>{formattedSelectedDate}</h2>
        <div className="my-4 border-t border-gray-500"></div>
        {eventsForSelectedDate.filter(event => "title" in event).length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {eventsForSelectedDate.filter(event => "title" in event).map((event, key) => (
          <div key={key} className="mx-auto my-0 text-center p-2 rounded w-full" style={{ borderBottom: '1px solid gray' }}>
            <h2 className="text-white text-lg font-bold" style={{ color: '#C084FC' }}>{event.title}</h2>
            <h3 className="text-sm">Time: {event.time}</h3>
            <p className="text-sm">Status: {event.Status}</p>
          </div>
          ))}
        </div>
        ) : (
        <p className="text-white text-lg">No cultural events for this day</p>
        )}
      </div>
      <div className="bg-black text-white p-4 rounded-xl flex-1 text-center">
        <h1 className="text-2xl font-bold" style={{ color: '#C084FC' }}>Sports Events</h1>
        <h2 className="text-lg" style={{ color: '#C084FC' }}>{formattedSelectedDate}</h2>
        <div className="my-4 border-t border-gray-500"></div>
        {eventsForSelectedDate.filter(event => "sport" in event).length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {eventsForSelectedDate.filter(event => "sport" in event).map((event, key) => (
          <div key={key} className="mx-auto my-0 text-center p-2 rounded w-full" style={{ borderBottom: '1px solid gray' }}>
            <h2 className="text-white text-lg font-bold" style={{ color: '#C084FC' }}>
            {event.sport} - {event.matchtype}
            </h2>
            <h3 className="text-sm">Participants: {event.TeamA} vs {event.TeamB}</h3>
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
      <div className="flex justify-center mt-8">
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
        view === "month" &&
        hasEvent(date) && (
          <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
        )
        }
      />
      </div>
    </>
  );
};

export default Calender;
