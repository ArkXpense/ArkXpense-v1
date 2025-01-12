import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 text-white flex flex-col">
      {/* Logo */}
      <div className="p-4 flex items-center justify-center">
        <Image
          src="/placeholder-logo.png" // Cambia esto por la ruta de tu logo real
          alt="Logo"
          width={100}
          height={100}
        />
      </div>

      {/* Navigation */}
      <ul className="menu p-4 space-y-2">
        <li className="hover:bg-gray-700 rounded-md">
          <a href="#dashboard">Dashboard</a>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <a href="#profile">Profile</a>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <a href="#settings">Settings</a>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <a href="#logout">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
