"use client";

import { useStacksProvider } from "../context/StacksProviderContext";
import styles from "./ConnectWallet.module.css";

export function ConnectWallet() {
  const {
    isConnected,
    address,
    connectWallet,
    disconnectWallet,
    truncateAddress,
  } = useStacksProvider();

  return (
    <div className={styles.container}>
      {!isConnected ? (
        <button onClick={connectWallet} className={styles.connectButton}>
          <span className={styles.icon}>🔐</span>
          Connect Wallet
        </button>
      ) : (
        <div className={styles.connectedContainer}>
          <span className={styles.status}>●</span>
          <span className={styles.address}>
            {truncateAddress(address || "")}
          </span>
          <button
            onClick={disconnectWallet}
            className={styles.disconnectButton}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
