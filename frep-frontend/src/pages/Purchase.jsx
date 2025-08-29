import React, { useState, useEffect } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { Sun, Moon } from "lucide-react";
import "../App.css"; // غير المسار حسب موقع CSS الآن

const SOLANA_RPC = "https://api.mainnet-beta.solana.com";
const connection = new Connection(SOLANA_RPC);

export default function Purchase() {   // ✅ غير الاسم من App إلى Purchase
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState(null);
  const [theme, setTheme] = useState("light");
  const [network, setNetwork] = useState("solana");
  const [amount, setAmount] = useState("");
  const [frep, setFrep] = useState(0);

  // toggle light/dark mode
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  // fetch solana balance
  useEffect(() => {
    if (connected && publicKey) {
      connection.getBalance(publicKey).then((lamports) => {
        setBalance(lamports / 1e9);
      });
    }
  }, [connected, publicKey]);

  // calculate FREP
  useEffect(() => {
    if (amount) {
      setFrep(amount / 0.001);
    } else {
      setFrep(0);
    }
  }, [amount]);

  const availableNetworks = ["solana", "ethereum", "bsc"];

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 transition ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex w-full justify-between items-center max-w-4xl mb-8">
        <h1 className="text-2xl font-bold">FREP Launchpad</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <WalletMultiButton />
        </div>
      </div>

      {/* Wallet Info */}
      {connected && publicKey && (
        <div className="mb-6 text-center">
          <p className="text-sm">
            Connected Wallet:{" "}
            <span className="font-mono">{publicKey.toBase58()}</span>
          </p>
          <p className="text-sm">
            Balance:{" "}
            <span className="font-semibold">
              {balance !== null ? `${balance.toFixed(3)} SOL` : "..."}
            </span>
          </p>
        </div>
      )}

      {/* Network Switcher */}
      {connected && (
        <div className="mb-6">
          <label className="block mb-2 font-medium">Select Network:</label>
          <select
            className="px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-600"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            {availableNetworks.map((net) => (
              <option key={net} value={net}>
                {net.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}