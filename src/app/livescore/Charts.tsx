/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useWindowSize } from "react-use";
import "chart.js/auto";
import { data } from "framer-motion/client";
interface ChartProps {
  total: number[];
  cultural: number[];
  sports: number[];
}
const charts = ({ total, cultural, sports }: ChartProps) => {
  const size = useWindowSize();
  const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
    ssr: false,
  });
  const Total = {
    labels: [
      `MAE/ID/CC/HS`,
      "CE/MSME/LA/EM",
      "CH/CHY/IC/Design",
      "CSE/MnC/Maths",
      "EE/AI/ICDT/COE",
      "BME/BT/ES/EP/PHY",
      "Staff",
    ],
    datasets: [
      {
        label: "Total",
        barThickness: `${size.width < 700 ? "15" : "30"}`,
        minBarThickness: 2,
        base: 0,
        data: total,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const Cultural = {
    labels: [
      "MAE/ID/CC/HS",
      "CE/MSME/LA/EM",
      "CH/CHY/IC/Design",
      "CSE/MnC/Maths",
      "EE/AI/ICDT/COE",
      "BME/BT/ES/EP/PHY",
      "Staff",
    ],
    data: cultural,
    datasets: [
      {
        label: "Cultural",
        barThickness: `${size.width < 700 ? "15" : "30"}`,
        base: 0,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const Sports = {
    labels: [
      "MAE/ID/CC/HS",
      "CE/MSME/LA/EM",
      "CH/CHY/IC/Design",
      "CSE/MnC/Maths",
      "EE/AI/ICDT/COE",
      "BME/BT/ES/EP/PHY",
      "Staff",
    ],
    data: sports,
    datasets: [
      {
        base: 0,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
        ],
        label: "Sports",
        font: 5,
        barThickness: `${size.width < 700 ? "15" : "30"}`,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const Data = [Total, Cultural, Sports];
  return (
    <div>
      <div className="w-full justify-items-center flex flex-col pt-28 gap-y-40 p-4 text-wrap w-5/6">
        {Data.map((data, key) => (
          <Bar
            key={key}
            className="w-4/5 bg-black text-wrap"
            data={data}
            options={{
              indexAxis: "y",
              scales: {
                x: { grid: { display: false } },
                y: { grid: { display: false } },
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default charts;
