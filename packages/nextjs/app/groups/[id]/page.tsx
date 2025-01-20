"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Users, DollarSign, PlusCircle, MinusCircle, ArrowLeftRight } from "lucide-react"

const groups = [
  {
    id: "group-1",
    emoji: "👨‍👩‍👧‍👦",
    title: "Family Expenses",
    description: "Track shared household expenses and family activities",
    members: 4,
    balance: 1250.75,
  },
  {
    id: "group-2",
    emoji: "🏠",
    title: "Home Utilities",
    description: "Monthly bills for electricity, water, and internet",
    members: 2,
    balance: 385.5,
  },
  {
    id: "group-3",
    emoji: "✈️",
    title: "Travel Group",
    description: "Upcoming trip expenses and planning",
    members: 6,
    balance: 2800.0,
  },
  {
    id: "group-4",
    emoji: "🍕",
    title: "Food & Dining",
    description: "Restaurant visits and grocery shopping",
    members: 3,
    balance: 175.25,
  },
  {
    id: "group-5",
    emoji: "🎁",
    title: "Gift Pool",
    description: "Group gift contributions and special occasions",
    members: 8,
    balance: 420.0,
  },
]

// Simulated expenses and debts (you would fetch this data from an API in a real application)
const simulatedExpenses = [
  { id: "1", description: "Groceries", amount: 150, paidBy: "Alice" },
  { id: "2", description: "Utilities", amount: 200, paidBy: "Bob" },
  { id: "3", description: "Dinner", amount: 100, paidBy: "Charlie" },
]

const simulatedDebts = [
  { from: "Bob", to: "Alice", amount: 50 },
  { from: "Charlie", to: "Alice", amount: 75 },
  { from: "Alice", to: "Bob", amount: 25 },
]

export default function GroupDetailsPage() {
  const params = useParams()
  const [group, setGroup] = useState(null)
  const [activeTab, setActiveTab] = useState("expenses")

  useEffect(() => {
    const groupId = params.id
    const foundGroup = groups.find((g) => g.id === groupId)
    setGroup(foundGroup)
  }, [params.id])

  if (!group) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <span>{group.emoji}</span>
          {group.title}
        </h1>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          <span>{group.members} miembros</span>
        </div>
      </div>

      <p className="text-base-content/70 mb-4">{group.description}</p>

      <div className="stats shadow w-full mb-6">
        <div className="stat">
          <div className="stat-figure text-primary">
            <DollarSign className="w-8 h-8" />
          </div>
          <div className="stat-title">Balance Total</div>
          <div className="stat-value text-primary">${group.balance.toFixed(2)}</div>
        </div>
      </div>

      <div className="tabs tabs-boxed mb-4">
        <a className={`tab ${activeTab === "expenses" ? "tab-active" : ""}`} onClick={() => setActiveTab("expenses")}>
          Gastos
        </a>
        <a className={`tab ${activeTab === "debts" ? "tab-active" : ""}`} onClick={() => setActiveTab("debts")}>
          Deudas
        </a>
      </div>

      {activeTab === "expenses" && (
        <div className="bg-base-200 p-4 rounded-box">
          <h2 className="text-xl font-semibold mb-4">Gastos del Grupo</h2>
          <ul className="space-y-2">
            {simulatedExpenses.map((expense) => (
              <li key={expense.id} className="flex items-center justify-between bg-base-100 p-3 rounded-box">
                <div>
                  <p className="font-medium">{expense.description}</p>
                  <p className="text-sm text-base-content/70">Pagado por {expense.paidBy}</p>
                </div>
                <span className="font-bold">${expense.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <button className="btn btn-primary mt-4 w-full">
            <PlusCircle className="w-5 h-5 mr-2" />
            Añadir Gasto
          </button>
        </div>
      )}

      {activeTab === "debts" && (
        <div className="bg-base-200 p-4 rounded-box">
          <h2 className="text-xl font-semibold mb-4">Deudas del Grupo</h2>
          <ul className="space-y-2">
            {simulatedDebts.map((debt, index) => (
              <li key={index} className="flex items-center justify-between bg-base-100 p-3 rounded-box">
                <div className="flex items-center">
                  <span className="font-medium">{debt.from}</span>
                  <ArrowLeftRight className="w-4 h-4 mx-2" />
                  <span className="font-medium">{debt.to}</span>
                </div>
                <span className="font-bold">${debt.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <button className="btn btn-secondary mt-4 w-full">
            <MinusCircle className="w-5 h-5 mr-2" />
            Liquidar Deuda
          </button>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Miembros del Grupo</h3>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: group.members }, (_, i) => (
            <div key={i} className="badge badge-lg">
              Miembro {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

