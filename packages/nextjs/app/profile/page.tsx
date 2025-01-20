"use client";

import { useState } from "react";
import { User, Mail, Bell, Shield, LogOut } from "lucide-react";

export default function ProfilePage() {
  const [nickname, setNickname] = useState("santivillarley");
  const [isEditing, setIsEditing] = useState(false);
  const email = "santivillarley1010@gmail.com";

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="bg-base-200 p-6 rounded-box shadow-lg">
        <div className="flex items-center mb-6">
          <div className="avatar placeholder mr-4">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span className="text-3xl">{nickname[0].toUpperCase()}</span>
            </div>
          </div>
          <div>
            {isEditing ? (
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  className="input input-bordered mr-2"
                />
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            ) : (
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold mr-2">{nickname}</h2>
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-sm btn-ghost"
                >
                  Edit
                </button>
              </div>
            )}
            <p className="text-base-content/70">{email}</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="space-y-4">
          <div className="flex items-center">
            <User className="mr-2" />
            <span>Account Information</span>
            <button className="btn btn-sm btn-ghost ml-auto">Edit</button>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2" />
            <span>Email Preferences</span>
            <button className="btn btn-sm btn-ghost ml-auto">Configure</button>
          </div>
          <div className="flex items-center">
            <Bell className="mr-2" />
            <span>Notifications</span>
            <button className="btn btn-sm btn-ghost ml-auto">Manage</button>
          </div>
          <div className="flex items-center">
            <Shield className="mr-2" />
            <span>Security</span>
            <button className="btn btn-sm btn-ghost ml-auto">Review</button>
          </div>
        </div>

        <div className="divider"></div>

        <button className="btn btn-outline btn-error w-full">
          <LogOut className="mr-2" />
          Log Out
        </button>
      </div>
    </div>
  );
}
