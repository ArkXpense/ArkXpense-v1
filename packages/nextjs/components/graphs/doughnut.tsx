"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularGraph = () => {
  // Data for the graph
  const data = {
    labels: [
      "StarShop",
      "Revolutionary Farmers",
      "PayStell",
      "Go Stark Me",
    ],
    datasets: [
      {
        label: "Expenses Distribution",
        data: [300, 150, 200, 100], // Replace with your expense values
        backgroundColor: [
          "#FBB040", // StarShop
          "#7E5FFF", // Revolutionary Farmers
          "#6DB9FF", // PayStell
          "#37E6D9", // Go Stark Me
        ],
        borderWidth: 0,
      },
    ],
  };

  // Options for styling the chart
  const options = {
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          usePointStyle: true, // Use circles instead of squares
          pointStyle: "circle", // Specify point style as a circle
          boxWidth: 8, // Control the circle size
          boxHeight: 8, // Control the circle size
          padding: 15, // Add padding between items
          color: "#ffffff", // Text color for legend
          font: {
            family: "Arial, sans-serif",
            size: 14,
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-fit p-6 rounded-lg">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CircularGraph;
