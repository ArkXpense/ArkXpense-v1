import React from "react";
import { AddGroup } from "~~/components/buttons";
import { Doughnut } from "~~/components/graphs";

export default function Home() {
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
    labels: groups.map((group) => group.title),
    datasets: [
      {
        label: "Balance",
        data: groups.map((group) => group.balance),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const recentActivities = groups.map(
    (group) => `Expense added to ${group.title}`,
  );

  return (
    <div className="min-h-screen text-gray-100">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-300">
          Welcome Santiago!
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              Expense Overview
            </h2>
            <Doughnut />
          </div>

          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              Recent Activities
            </h2>
            <ul className="space-y-2">
              {recentActivities.map((activity, index) => (
                <li
                  key={index}
                  className="bg-gray-700 p-3 rounded-md hover:bg-gray-600 transition-colors"
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-300">Your Groups</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-gray-800 rounded-lg shadow-xl p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{group.emoji}</span>
                  <span className="text-sm text-gray-400">
                    {group.members} members
                  </span>
                </div>
                <h3 className="text-xl font-semibold mt-4 text-blue-400">
                  {group.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  {group.description}
                </p>
                <div className="mt-4">
                  <p className="text-lg font-bold">
                    ${group.balance.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-400">
                    Group Code: {group.code}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="fixed bottom-6 right-6">
        <AddGroup />
      </div>
    </div>
  );
}
