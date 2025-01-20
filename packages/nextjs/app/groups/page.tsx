'use client'

import { Users, Activity, Bell } from 'lucide-react'

  const groups = [
    {
      id: 'group-1',
      emoji: '👨‍👩‍👧‍👦',
      title: 'Family Expenses',
      description: 'Track shared household expenses and family activities',
      members: 4,
      balance: 1250.75
    },
    {
      id: 'group-2',
      emoji: '🏠',
      title: 'Home Utilities',
      description: 'Monthly bills for electricity, water, and internet',
      members: 2,
      balance: 385.50
    },
    {
      id: 'group-3',
      emoji: '✈️',
      title: 'Travel Group',
      description: 'Upcoming trip expenses and planning',
      members: 6,
      balance: 2800.00
    },
    {
      id: 'group-4',
      emoji: '🍕',
      title: 'Food & Dining',
      description: 'Restaurant visits and grocery shopping',
      members: 3,
      balance: 175.25
    },
    {
      id: 'group-5',
      emoji: '🎁',
      title: 'Gift Pool',
      description: 'Group gift contributions and special occasions',
      members: 8,
      balance: 420.00
    }
  ]

const recentActivity = [
  { id: 'activity-1', user: 'Alice', action: 'added an expense', group: 'Family Expenses', amount: 50.00 },
  { id: 'activity-2', user: 'Bob', action: 'settled up', group: 'Travel Group', amount: 120.50 },
  { id: 'activity-3', user: 'Charlie', action: 'created a new group', group: 'Movie Night', amount: null },
  { id: 'activity-4', user: 'Diana', action: 'commented on', group: 'Home Utilities', amount: null },
]

export default function GroupsPage() {
  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold mb-8">Groups Overview</h1>
      
      {/* Group Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-figure text-white">
            <Users size={36}/>
          </div>
          <div className="stat-title">Total Groups</div>
          <div className="stat-value">{groups.length}</div>
        </div>
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-figure text-secondary">
            <Activity size={36} />
          </div>
          <div className="stat-title">Active Balances</div>
          <div className="stat-value">${groups.reduce((sum, group) => sum + group.balance, 0).toFixed(2)}</div>
        </div>
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-figure text-accent">
            <Bell size={36} />
          </div>
          <div className="stat-title">Pending Actions</div>
          <div className="stat-value">7</div>
        </div>
      </div>

      {/* Groups Accordion Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Groups</h2>
        <div className="join join-vertical w-full">
          {groups.map((group) => (
            <div key={group.id} className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion" /> 
              <div className="collapse-title text-xl font-medium flex items-center gap-3">
                <span className="text-2xl">{group.emoji}</span>
                {group.title}
                <span className="ml-auto text-sm font-normal">Balance: ${group.balance.toFixed(2)}</span>
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70 mb-2">{group.description}</p>
                <p className="text-sm mb-4">Members: {group.members}</p>
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-primary">View Details</button>
                  <button className="btn btn-sm btn-outline">Add Expense</button>
                  <button className="btn btn-sm btn-outline">Settle Up</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          {recentActivity.map((activity) => (
            <li key={activity.id} className="bg-base-200 p-4 rounded-box flex justify-between items-center">
              <div>
                <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium">{activity.group}</span>
              </div>
              {activity.amount && <span className="badge badge-primary">${activity.amount.toFixed(2)}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
