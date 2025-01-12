"use client";

import React from "react";
import { Plus } from "lucide-react";

const FloatingButton = () => {
  const handleClick = () => {
    alert("Floating button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-500 transition flex items-center justify-center"
    >
      <Plus size={24} />
    </button>
  );
};

export default FloatingButton;
