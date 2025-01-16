"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useWindowSize } from "react-use";
import "chart.js/auto";
interface ChartProps {
  total: number[];
  cultural: number[];
  sports: number[];
}

const Charts = ({ total, cultural, sports }: ChartProps) => {
  const size = useWindowSize();
  const barThickness = size.width < 700 ? (size.width < 400 ? 8 : 11) : 30;
  const fontsizes = size.width < 700 ? (size.width < 400 ? 8 : 10) : 20;
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
        data: total,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
        minBarThickness: 2,
        base: 0,
        barThickness: barThickness,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
        ],
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
    datasets: [
      {
        data: cultural,
        label: "Cultural",
        barThickness: barThickness,
        base: 0,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
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
    datasets: [
      {
        data: sports,
        base: 0,
        categoryPercentage: 1,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
        ],
        label: "Sports",
        font: 5,

        barThickness: barThickness,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
    ssr: false,
  });
  const Data = [Total, Cultural, Sports];
  return (
    <div>
      <div className="w-full justify-items-center flex flex-col pt-28 gap-y-40 max-md:gap-y-20 max-sm:gap-y-12 p-4 text-wrap">
        {Data.map((data, key) => {
          return (
            <Bar
              key={key}
              className="w-4/5 md:rounded-3xl p-4 leaderboard bg-black text-wrap"
              data={data}
              options={{
                indexAxis: "y",
                scales: {
                  x: { grid: { display: true }, stacked: true },
                  y: {
                    grid: { display: true },
                    stacked: true,
                    ticks: { font: { size: fontsizes } },
                  },
                },
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Charts;
