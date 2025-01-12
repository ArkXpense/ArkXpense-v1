import React from "react";
import { AddGroup } from "~~/components/buttons";
import { Doughnut } from "~~/components/graphs";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-100">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-300">Welcome Santiago!</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Expense Overview</h2>
            <Doughnut />
          </div>
          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Recent Activities</h2>
            <ul className="space-y-2">
              <li className="bg-gray-700 p-3 rounded-md hover:bg-gray-600 transition-colors">
                StarShop expense added
              </li>
              <li className="bg-gray-700 p-3 rounded-md hover:bg-gray-600 transition-colors">
                Revolutionary Farmers paid
              </li>
              <li className="bg-gray-700 p-3 rounded-md hover:bg-gray-600 transition-colors">
                PayStell transaction
              </li>
            </ul>
          </div>
        </div>
      </main>
      <div className="fixed bottom-6 right-6">
        <AddGroup />
      </div>
    </div>
  );
}

