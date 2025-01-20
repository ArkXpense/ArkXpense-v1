"use client";

import { useState } from "react";
import { ArrowLeftRight, PlusCircle } from "lucide-react";
import { useAccount } from "~~/hooks/useAccount";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-stark/useScaffoldWriteContract";

const GroupDetailsPage = () => {
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState("expenses");
  const [expenses, setExpenses] = useState([
    { id: "1", description: "Groceries", amount: 150, paidBy: "Alice" },
    { id: "2", description: "Utilities", amount: 200, paidBy: "Bob" },
    { id: "3", description: "Dinner", amount: 100, paidBy: "Charlie" },
    { id: "4", description: "Internet", amount: 50, paidBy: "Alice" },
    { id: "5", description: "Transport", amount: 75, paidBy: "Bob" },
  ]);
  const [debts, setDebts] = useState([
    { from: "Bob", to: "Alice", amount: 50 },
    { from: "Charlie", to: "Alice", amount: 75 },
    { from: "Alice", to: "Bob", amount: 25 },
  ]);
  const [newExpense, setNewExpense] = useState({
    description: "",
    amount: 0,
    paidBy: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { sendAsync, isPending } = useScaffoldWriteContract({
    contractName: "Strk",
    functionName: "transfer",
    args: [
      "0x0062AA48B515E0f2E6057069aB44dA249C60469e3111ea1801659bF5D1576d58",
      1000, // Fixed amount in STRK
    ],
    onSuccess: () => {
      setDebts([]); // Reset debts
      setExpenses([]); // Reset expenses
      alert("Debts settled successfully!");
    },
    onError: (error) => {
      console.error("Error settling debts:", error);
      alert("Failed to settle debts. Please try again.");
    },
  });

  const handleSettleDebts = async () => {
    if (!address) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      await sendAsync();
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  const handleAddExpense = () => {
    if (!newExpense.description || !newExpense.amount || !newExpense.paidBy) {
      alert("Please fill all fields.");
      return;
    }

    const expense = {
      id: String(expenses.length + 1),
      description: newExpense.description,
      amount: newExpense.amount,
      paidBy: newExpense.paidBy,
    };

    setExpenses([...expenses, expense]);
    setNewExpense({ description: "", amount: 0, paidBy: "" });
    setIsModalOpen(false);
  };

  const renderExpenses = () => (
    <div className="bg-base-200 p-4 rounded-box">
      <h2 className="text-xl font-semibold mb-4">Group Expenses</h2>
      <ul className="space-y-2">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className="flex items-center justify-between bg-base-100 p-3 rounded-box"
          >
            <div>
              <p className="font-medium">{expense.description}</p>
              <p className="text-sm text-base-content/70">
                Paid by {expense.paidBy}
              </p>
            </div>
            <span className="font-bold">{expense.amount.toFixed(2)} STRK</span>
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary w-full mt-4"
        onClick={() => setIsModalOpen(true)}
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        Add Expense
      </button>
    </div>
  );

  const renderDebts = () => (
    <div className="bg-base-200 p-4 rounded-box">
      <h2 className="text-xl font-semibold mb-4">Group Debts</h2>
      <ul className="space-y-2">
        {debts.map((debt, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-base-100 p-3 rounded-box"
          >
            <div className="flex items-center">
              <span className="font-medium">{debt.from}</span>
              <ArrowLeftRight className="w-4 h-4 mx-2" />
              <span className="font-medium">{debt.to}</span>
            </div>
            <span className="font-bold">{debt.amount.toFixed(2)} STRK</span>
          </li>
        ))}
      </ul>
      <button
        className="btn btn-secondary mt-4 w-full"
        onClick={handleSettleDebts}
        disabled={isPending}
      >
        {isPending ? "Processing..." : "Settle Debt"}
      </button>
    </div>
  );

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <div className="tabs tabs-boxed mb-4">
        <a
          className={`tab ${activeTab === "expenses" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("expenses")}
        >
          Expenses
        </a>
        <a
          className={`tab ${activeTab === "debts" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("debts")}
        >
          Debts
        </a>
      </div>

      {activeTab === "expenses" ? renderExpenses() : renderDebts()}

      <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Expense</h3>
          <div className="mt-4 space-y-2">
            <input
              type="text"
              placeholder="Description"
              className="input input-bordered w-full"
              value={newExpense.description}
              onChange={(e) =>
                setNewExpense({ ...newExpense, description: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Amount (STRK)"
              className="input input-bordered w-full"
              value={newExpense.amount}
              onChange={(e) =>
                setNewExpense({ ...newExpense, amount: Number(e.target.value) })
              }
            />
            <input
              type="text"
              placeholder="Paid by"
              className="input input-bordered w-full"
              value={newExpense.paidBy}
              onChange={(e) =>
                setNewExpense({ ...newExpense, paidBy: e.target.value })
              }
            />
          </div>
          <div className="modal-action">
            <button className="btn" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleAddExpense}>
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetailsPage;
