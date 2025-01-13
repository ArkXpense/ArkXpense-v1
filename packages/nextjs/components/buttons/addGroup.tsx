"use client";

import React, { useState } from "react";
import { FloatingButton } from "~~/components/floating-button";
import { Plus, Users, Group, Trash } from "lucide-react";
import { useFormSetterWithValidation } from "~~/hooks/useFormSetter";

const AddGroup = () => {
  const validators = {
    title: (value: string) => (value.trim() === "" ? "Title is required" : null),
    groupCode: (value: string) =>
      value.trim() === "" ? "Group code is required" : null,
  };

  const [formState, setField, errors] = useFormSetterWithValidation(
    {
      title: "",
      groupCode: "",
      participants: [] as { name: string; wallet: string }[],
    },
    validators
  );

  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step === 1 && !formState.title.trim()) {
      console.error("Title is required");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => setStep((prev) => prev - 1);

  const handleAddParticipant = (name: string, wallet: string) => {
    if (name.trim() && wallet.trim()) {
      setField("participants", [
        ...formState.participants,
        { name, wallet },
      ]);
    }
  };

  const handleRemoveParticipant = (index: number) => {
    setField(
      "participants",
      formState.participants.filter((_, i) => i !== index)
    );
  };

  const handleSaveGroup = () => {
    if (!formState.title.trim() || formState.participants.length === 0) {
      console.error("Validation failed: Title and participants are required");
      return;
    }
    console.log("Group Created:", {
      title: formState.title,
      participants: formState.participants,
    });
  };

  return (
    <FloatingButton
      mainTooltip="Main Actions"
      mainIcon={<Plus size={24} />}
      buttons={[
        {
          id: "new-group-modal",
          tooltip: "New Group",
          icon: <Group size={20} />,
          ModalContent: (
            <div className="text-left space-y-6">
              <ul className="steps w-full">
                <li className={`step ${step >= 1 ? "step-primary" : ""}`}>
                  Details
                </li>
                <li className={`step ${step >= 2 ? "step-primary" : ""}`}>
                  Participants
                </li>
              </ul>
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-medium text-gray-100 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      className={`input input-bordered w-full ${
                        errors.title ? "input-error" : ""
                      }`}
                      placeholder="Group Title"
                      value={formState.title}
                      onChange={(e) => setField("title", e.target.value)}
                    />
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Add Participant
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Name"
                        onBlur={(e) =>
                          handleAddParticipant(e.target.value, "example-wallet")
                        }
                      />
                    </div>
                    {formState.participants.length > 0 && (
                      <div>
                        <h3 className="font-medium text-gray-700 mb-2">
                          Participants
                        </h3>
                        <ul>
                          {formState.participants.map((p, index) => (
                            <li
                              key={index}
                              className="flex justify-between items-center"
                            >
                              <span>{p.name}</span>
                              <span className="text-gray-500">{p.wallet}</span>
                              <button
                                type="button"
                                className="btn btn-sm btn-error"
                                onClick={() => handleRemoveParticipant(index)}
                              >
                                <Trash size={16} />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
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
          ),
        },
        {
          id: "join-group-modal",
          tooltip: "Join Group",
          icon: <Users size={20} />,
          ModalContent: (
            <div className="text-left space-y-6">
              <h3 className="text-lg font-bold">Join a Group</h3>
              <ul className="steps w-full">
                <li className={`step step-primary`}>Details</li>
                <li className={`step`}>Participants</li>
              </ul>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Group Code
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter Group Code"
                  value={formState.groupCode}
                  onChange={(e) => setField("groupCode", e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary w-full"
                onClick={() => console.log("Joining group:", formState.groupCode)}
              >
                Join Group
              </button>
            </div>
          ),
        },
      ]}
    />
  );
};

export default AddGroup;
