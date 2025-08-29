import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Solana wallet adapter
import { clusterApiUrl } from '@solana/web3.js';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

// محفظة افتراضية واحدة لتظهر مباشرة كزر Wallet Adapter
import { WalletAdapter } from '@solana/wallet-adapter-base';

const network = WalletAdapterNetwork.Devnet; // Devnet for testing
const endpoint = clusterApiUrl(network);

// مصفوفة المحافظ تحتوي على محفظة واحدة فقط
const wallets = [new WalletAdapter()];

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={false}>
        <WalletModalProvider>
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </React.StrictMode>
);