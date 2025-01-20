"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularGraph = () => {
  // Data for the graph
  const groups = [
    {
      id: "group-1",
      emoji: "👨‍👩‍👧‍👦",
      title: "Family Expenses",
      description: "Track shared household expenses and family activities",
      members: 4,
      balance: 1250.75,
      code: "2028",
    },
    {
      id: "group-2",
      emoji: "🏠",
      title: "Home Utilities",
      description: "Monthly bills for electricity, water, and internet",
      members: 2,
      balance: 385.5,
      code: "2025",
    },
    {
      id: "group-3",
      emoji: "✈️",
      title: "Travel Group",
      description: "Upcoming trip expenses and planning",
      members: 6,
      balance: 2800.0,
      code: "2055",
    },
    {
      id: "group-4",
      emoji: "🍕",
      title: "Food & Dining",
      description: "Restaurant visits and grocery shopping",
      members: 3,
      balance: 175.25,
      code: "2026",
    },
    {
      id: "group-5",
      emoji: "🎁",
      title: "Gift Pool",
      description: "Group gift contributions and special occasions",
      members: 8,
      balance: 420.0,
      code: "2023",
    },
  ];

  const expenseData = {
    labels: groups.map((group) => group.title), // Títulos de los grupos
    datasets: [
      {
        label: "Balance",
        data: groups.map((group) => group.balance), // Saldos de los grupos
        backgroundColor: [
          "#FF6384", // Color para Family Expenses
          "#36A2EB", // Color para Home Utilities
          "#FFCE56", // Color para Travel Group
          "#4BC0C0", // Color para Food & Dining
          "#9966FF", // Color para Gift Pool
        ],
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
      <Doughnut data={expenseData} options={options} />
    </div>
  );
};

export default CircularGraph;
