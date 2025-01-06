"use client";
import React from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";

const page = () => {
  const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
    ssr: false,
  });
  const Total = {
    labels: [
      "MAE/Inter Disciplinary/Climate change/Heritage science",
      "Civil/MSME/LA/Entrepreneurship and management",
      "Chemical/Chemistry/Industrial chemistry/Design",
      "CSE/MnC/Maths",
      "EE/AI/IC design/Computational engineering",
      "BME/Bio Technology/ES/EP/Physics",
    ],
    datasets: [
      {
        label: "Total",
        data: [12, 19, 3, 5, 2, 3],
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
      "MAE/Inter Disciplinary/Climate change/Heritage science",
      "Civil/MSME/LA/Entrepreneurship and management",
      "Chemical/Chemistry/Industrial chemistry/Design",
      "CSE/MnC/Maths",
      "EE/AI/IC design/Computational engineering",
      "BME/Bio Technology/ES/EP/Physics",
    ],
    datasets: [
      {
        label: "Cultural",
        data: [12, 19, 3, 5, 2, 3],
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
      "MAE/Inter Disciplinary/Climate change/Heritage science",
      "Civil/MSME/LA/Entrepreneurship and management",
      "Chemical/Chemistry/Industrial chemistry/Design",
      "CSE/MnC/Maths",
      "EE/AI/IC design/Computational engineering",
      "BME/Bio Technology/ES/EP/Physics",
    ],
    datasets: [
      {
        label: "Sports",
        data: [12, 19, 3, 5, 2, 3],
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
  return (
    <div>
      <div className="p-4 text-wrap w-5/6">
        <Bar data={Total} />
        <Bar data={Cultural} />
        <Bar data={Sports} />
      </div>
    </div>
  );
};

export default page;
