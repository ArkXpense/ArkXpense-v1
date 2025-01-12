"use client";

import React, { ReactNode } from "react";

interface FloatingButtonProps {
  onClick?: () => void; // Optional function triggered when the button is clicked
  ModalProp: ReactNode; // Content to render inside the modal
  tooltip: string; // Tooltip text
  icon: ReactNode; // Icon for the button
  modalId: string; // Unique ID for the modal
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  ModalProp,
  tooltip,
  icon,
  modalId,
}) => {
  const handleButtonClick = () => {
    if (onClick) onClick();
    const modalElement = document.getElementById(modalId) as HTMLDialogElement;
    modalElement?.showModal();
  };

  return (
    <>
      <div className="fixed bottom-6 right-6">
        <div className="tooltip tooltip-top" data-tip={tooltip}>
          <button
            onClick={handleButtonClick}
            className="bg-custom-orange text-white rounded-full p-4 shadow-lg transition flex items-center justify-center"
          >
            {icon}
          </button>
        </div>
      </div>

      <dialog id={modalId} className="modal">
        <div className="modal-box w-full max-w-lg">
          {ModalProp}
          <div className="modal-action">
            <button
              type="button"
              className="btn"
              onClick={() => {
                const modalElement = document.getElementById(
                  modalId
                ) as HTMLDialogElement;
                modalElement?.close();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default FloatingButton;
