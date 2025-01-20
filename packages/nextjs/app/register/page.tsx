"use client";

import { useState } from "react";
import { CustomConnectButton } from "~~/components/scaffold-stark/CustomConnectButton";
import { useAccount } from "@starknet-react/core";

export default function RegisterForm() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Obtener la wallet conectada
  const { address: walletId } = useAccount();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que haya una wallet conectada
    if (!walletId) {
      alert("Please connect your wallet before registering.");
      return;
    }

    // Crear el objeto con los datos del formulario
    const registrationData = {
      walletId,
      nickname,
      email,
    };

    // Imprimir los datos en la consola
    console.log("Form submitted:", registrationData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 flex flex-col gap-7">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="card-title text-center mb-4">Create an Account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nickname</span>
            </label>
            <input
              type="text"
              placeholder="Enter your nickname"
              className="input input-bordered"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Botón para conectar la wallet */}
          <div className="flex flex-col items-center justify-center">
            <CustomConnectButton />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
