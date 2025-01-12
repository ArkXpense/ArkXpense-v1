"use client";

import React from "react";
import { FloatingButton } from "~~/components/floating-button";
import { Plus } from "lucide-react";

const AddExpense = () => {
  const handleAddExpense = () => {
    console.log("Add Expense clicked!");
  };

  return (
    <FloatingButton
      onClick={handleAddExpense}
      ModalProp={<div className="text-center">Add Expense Modal</div>}
      tooltip="Add Expense"
      icon={<Plus size={24} />}
      modalId="add-expense-modal"
    />
  );
};

export default AddExpense;
