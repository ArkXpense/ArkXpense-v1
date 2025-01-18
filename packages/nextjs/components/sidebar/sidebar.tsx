"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Settings, LogOut, GroupIcon } from "lucide-react";
import ArkXpense from "../../public/ArkXpence.svg"
const Sidebar = () => {
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState<string>("");

  useEffect(() => {
    setActiveRoute(pathname || "");
  }, [pathname]);

  const menuItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Groups", href: "/groups", icon: GroupIcon },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
    // { name: "Logout", href: "/logout", icon: LogOut, color: "text-red-400 hover:text-red-300" },
  ];

  return (
    <div className="h-screen w-64  text-gray-300 flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 flex items-center justify-center border-b border-gray-800">
        <Image
          src={ArkXpense}
          alt="Logo"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>

      {/* Navigation */}
      <ul className="menu mt-4 px-4 space-y-4 text-lg">
        {menuItems.map(({ name, href, icon: Icon, color }) => (
          <li key={name}>
            <Link
              href={href}
              className={`flex items-center space-x-3 p-3 rounded-md ${
                activeRoute === href
                  ? "bg-gray-800 text-white"
                  : "hover:bg-gray-800 hover:text-white"
              } ${color || ""}`}
            >
              <Icon size={20} />
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
