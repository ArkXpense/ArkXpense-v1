"use client";

import React, { useState } from "react";

interface FloatingButtonProps {
  mainTooltip: string;
  mainIcon: React.ReactNode;
  buttons: {
    id: string;
    tooltip: string;
    icon: React.ReactNode;
    ModalContent: React.ReactNode; // Modal content specific to the button
  }[];
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  mainTooltip,
  mainIcon,
  buttons,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const handleOpenModal = (id: string) => {
    const modalElement = document.getElementById(id) as HTMLDialogElement;
    modalElement?.showModal();
  };

  const handleCloseModal = (id: string) => {
    const modalElement = document.getElementById(id) as HTMLDialogElement;
    modalElement?.close();
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center">
      {open &&
        buttons.map((button, index) => (
          <div
            key={button.id}
            className={`tooltip tooltip-left transition-all ${
              index === 0 ? "mr-20 mb-1" : "mr-[-62px]"
            }`}
            data-tip={button.tooltip}
            style={{
              position: "absolute",
              bottom: index === 1 ? "72px" : "0",
              right: index === 0 ? "0" : "72px",
            }}
          >
            <button
              className="bg-gray-700 text-white rounded-full p-3 shadow-lg flex items-center justify-center hover:bg-gray-600 transition"
              onClick={() => handleOpenModal(button.id)}
            >
              {button.icon}
            </button>

            {/* Modal for each button */}
            <dialog id={button.id} className="modal">
              <div className="modal-box w-full max-w-lg relative">
                <button
                  className="absolute top-2 right-2 btn btn-sm btn-circle btn-ghost"
                  onClick={() => handleCloseModal(button.id)}
                >
                  ✕
                </button>
                {button.ModalContent}
              </div>
            </dialog>
          </div>
        ))}

      <button
        onClick={toggleOpen}
        className={`bg-custom-orange text-white rounded-full p-4 shadow-lg flex items-center justify-center transition transform ${
          open ? "rotate-45" : ""
        }`}
      >
        {mainIcon}
      </button>
    </div>
  );
};

export default FloatingButton;
