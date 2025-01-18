"use client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { StarknetConfig, starkscan } from "@starknet-react/core";
import { Header } from "~~/components/Header";
import { Sidebar } from "./sidebar";
import { appChains, connectors } from "~~/services/web3/connectors";
import provider from "~~/services/web3/provider";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-stark/useNativeCurrencyPrice";
import { useScaffoldStarkApp } from "~~/hooks/scaffold-stark/useScaffoldStarkApp";


const ScaffoldStarkApp = ({ children }: { children: React.ReactNode }) => {
  useNativeCurrencyPrice();
  const { isAuthPage } = useScaffoldStarkApp();

  return (
    <>
      <div className={`flex relative min-h-screen ${isAuthPage ? "" : "bg-main"}`}>
        {!isAuthPage && <Sidebar />}
        <div className="flex flex-col w-full">
          {!isAuthPage && <Header />}
          <main className="relative flex flex-col flex-1 overflow-auto">{children}</main>
        </div>
      </div>
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
