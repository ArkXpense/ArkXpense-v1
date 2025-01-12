"use client";

import React, { useState } from "react";
import { FloatingButton } from "~~/components/floating-button";
import { Plus, Trash } from "lucide-react";

const AddGroup = () => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");
  const [participants, setParticipants] = useState<{ name: string; wallet: string }[]>([]);

  const handleAddParticipant = () => {
    if (name.trim() && wallet.trim()) {
      setParticipants([...participants, { name, wallet }]);
      setName("");
      setWallet("");
    }
  };

  const handleRemoveParticipant = (index: number) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);

  const handleSaveGroup = () => {
    const groupData = {
      title,
      currency,
      participants,
    };
    console.log("Group Created:", groupData);
  };

  const ModalContent = (
    <div className="text-left space-y-6">
      {/* Stepper */}
      <ul className="steps w-full">
        <li className={`step ${step >= 1 ? "step-primary" : ""}`}>Details</li>
        <li className={`step ${step >= 2 ? "step-primary" : ""}`}>Participants</li>
      </ul>

      {/* Step 1: Title and Currency */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Group Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2">Currency</label>
            <select
              className="select select-bordered w-full"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USDC">USDC</option>
              <option value="STRK">STRK</option>
              <option value="ETH">ETH</option>
            </select>
          </div>
        </div>
      )}

      {/* Step 2: Add Participants */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Add Participant</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Wallet Address"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddParticipant}
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
          {participants.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Participants</h3>
              <ul className="">
                {participants.map((participant, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-1  rounded-md"
                  >
                    <div>
                      <p className="font-medium p-0">{participant.name}</p>
                      <p className="text-sm text-gray-600 p-0">{participant.wallet}</p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-sm btn-error"
                      onClick={() => handleRemoveParticipant(index)}
                    >
                      <Trash size={16}/>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        {step > 1 && (
          <button className="btn btn-secondary" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {step < 2 && (
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        )}
        {step === 2 && (
          <button className="btn btn-success" onClick={handleSaveGroup}>
            Save Group
          </button>
        )}
      </div>
    </div>
  );

  return (
    <FloatingButton
      onClick={handleSaveGroup}
      ModalProp={ModalContent}
      tooltip="Add Group"
      icon={<Plus size={24} />}
      modalId="add-expense-modal"
    />
  );
};

export default AddGroup;
