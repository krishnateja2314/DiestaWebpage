"use client";
import React from "react";
import Section from "../components/Section";
import { motion } from "framer-motion";

const Events = [
  {
    title: "Opening Ceremony",
    date: "17th january, 2025",
    time: "6pm ",
    venue: "Auditorium",
    discription:
      "The ceremony will be graced by the presence of our esteemed Chief Guest, Dr.B S Murty.",
    image: "opeaning.JPG",
  },
  {
    title: "Otaku Cosplay",
    date: "23rd january, 2025",
    time: "9pm",
    venue: "OAT",
    discription:
      "Otaku Cosplay is a cosplay competition where participants dress up as their favorite anime characters.",
    image: "/diestaLogo.svg",
  },
  {
    title: "Battle of Bands",
    date: "25th january, 2025",
    time: "5:30pm",
    venue: "Old mess lawns",
    discription:
      "Battle of Bands is a music competition where bands from different collages participate.",
    image: "/diestaLogo.svg",
  },
  {
    title: "DJ Night",
    date: "25th january, 2025",
    time: "9pm",
    venue: "Old mess lawns",
    discription:
      "DJ Night is a music event where participants can enjoy music and dance.",
    image: "/diestaLogo.svg",
  },
  {
    title: "Dance Performance",
    date: "26th january, 2025",
    venue: "OAT",
    time: "4pm",
    discription:
      "Dance Performance is a dance competition where teams from all the groups participate.",
    image: "/Dance.JPG",
  },
  {
    title: "Closing Ceremony",
    date: "26th january, 2025",
    time: "6pm",
    venue: "OAT",
    discription:
      "All the prize winners will be felicitated during the ceremony and the fest will be concluded with a grand celebration.",
    image: "/closing.JPG",
  },
];

const page = () => {
  return (
    <div className="pt-24 text-center flex flex-col gap-14 items-center">
      {Events.map((event, key) => (
        <div key={key} className="bg-black w-4/5 rounded-3xl">
          <Section title={event.title} id={event.title} key={event.title}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex gap-8 items-center max-md:flex-col"
            >
              <img
                className="w-1/3 max-md:w-10/12 rounded-3xl"
                src={event.image}
                alt=""
              />
              <div className="flex-row ">
                <p>{event.discription}</p>
                <p className="mt-5 text-rose-200">On: {event.date}.</p>
                <p className=" text-rose-200">Starting from: {event.time}</p>
                <p className=" text-rose-200">At: {event.venue}</p>
              </div>
            </motion.div>
          </Section>
        </div>
      ))}
    </div>
  );
};

export default page;
