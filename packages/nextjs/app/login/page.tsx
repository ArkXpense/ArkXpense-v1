"use client";
import React, { useEffect, useState } from "react";
import { CustomConnectButton } from "~~/components/scaffold-stark/CustomConnectButton";
import { useAccount } from "~~/hooks/useAccount";
import { useRouter } from "next/navigation";

export default function Page() {
  const { status, address:walletAddress } = useAccount(); // Asegúrate de que useAccount retorne walletAddress
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de un llamado a un API con walletAddress
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("Simulando llamada al API...");
        const response:any = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, walletAddress });
          }, 2000); // Simula 2 segundos de espera
        });

        console.log("Llamada al API completada", response);

        if (response.success && status === "connected") {
          router.push("/");
        }
      } catch (error) {
        console.error("Error durante la simulación del API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [status, walletAddress, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-300">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300">
      <CustomConnectButton />
    </div>
  );
}
