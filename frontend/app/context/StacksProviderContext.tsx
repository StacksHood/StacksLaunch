"use client";

import React, { createContext, useContext, useState } from "react";

interface StacksProviderContextType {
  isConnected: boolean;
  address: string | null;
  balance: number;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  truncateAddress: (addr: string) => string;
  requestSTX: (amount: number) => Promise<string>;
}

const StacksProviderContext = createContext<StacksProviderContextType | undefined>(undefined);

export function StacksProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState(0);

  const truncateAddress = (addr: string): string => {
    if (!addr) return "";
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  const connectWallet = async () => {
    try {
      setIsConnected(true);
      setAddress("SP1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T");
      setBalance(5000);
    } catch (error) {
      console.error("Wallet connection failed:", error);
      setIsConnected(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress(null);
    setBalance(0);
  };

  const requestSTX = async (amount: number) => Promise<string> {
    // Placeholder for transaction submission
    return "0xdeadbeef123456789";
  };

  return (
    <StacksProviderContext.Provider
      value={{ isConnected, address, balance, connectWallet, disconnectWallet, truncateAddress, requestSTX }}
    >
      {children}
    </StacksProviderContext.Provider>
  );
}

export function useStacksProvider() {
  const context = useContext(StacksProviderContext);
  if (context === undefined) {
    throw new Error("useStacksProvider must be used within a StacksProvider");
  }
  return context;
}
