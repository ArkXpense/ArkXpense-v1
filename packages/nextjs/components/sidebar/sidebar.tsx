import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, User, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 text-gray-300 flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 flex items-center justify-center border-b border-gray-800">
        <Image
          src="/placeholder-logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>

      {/* Navigation */}
      <ul className="menu mt-4 px-4 space-y-4 text-lg">
        <li className="rounded-md">
          <Link href="#dashboard" className="flex items-center space-x-3 p-3">
            <Home size={20} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="rounded-md">
          <Link href="#profile" className="flex items-center space-x-3 p-3">
            <User size={20} />
            <span>Profile</span>
          </Link>
        </li>
        <li className="rounded-md">
          <Link href="#settings" className="flex items-center space-x-3 p-3">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </li>
        <li className="rounded-md">
          <Link href="#logout" className="flex items-center space-x-3 p-3 text-red-400 hover:text-red-300">
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
