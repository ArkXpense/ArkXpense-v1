"use client";

import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { StarknetConfig, starkscan } from "@starknet-react/core";
import { Header } from "~~/components/Header";
import { Sidebar } from "./sidebar";
import { appChains, connectors } from "~~/services/web3/connectors";
import provider from "~~/services/web3/provider";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-stark/useNativeCurrencyPrice";
import { useAccount } from "~~/hooks/useAccount";

const ScaffoldStarkApp = ({ children }: { children: React.ReactNode }) => {
  useNativeCurrencyPrice();
  const { status } = useAccount(); // Hook que retorna el estado del usuario

  const [isAuthPage, setIsAuthPage] = useState(false);

  useEffect(() => {
    // Verificar si estamos en las páginas "/login" o "/register"
    const currentPath = window.location.pathname;
    const authPages = ["/login", "/register"];
    setIsAuthPage(authPages.includes(currentPath));

    // Redirigir al login si no está autenticado y no está en una página de autenticación
    if (status !== "connected" && !authPages.includes(currentPath)) {
      window.location.href = "/login";
    }
  }, [status]);

  return (
    <>
      <div className={`flex relative min-h-screen ${isAuthPage ? "" : "bg-main"}`}>
        {/* Renderiza Header y Sidebar solo si no estamos en páginas de autenticación */}
        {!isAuthPage && <Sidebar />}
        <div className="flex flex-col w-full">
          {!isAuthPage && <Header />}
          <main className="relative flex flex-col flex-1 overflow-auto">{children}</main>
        </div>
      </div>
      {/* Mostrar Toaster si no estamos en páginas de autenticación */}
      {!isAuthPage && <Toaster />}
    </>
  );
};

export const ScaffoldStarkAppWithProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <StarknetConfig
      chains={appChains}
      provider={provider}
      connectors={connectors}
      explorer={starkscan}
    >
      <ScaffoldStarkApp>{children}</ScaffoldStarkApp>
    </StarknetConfig>
  );
};
