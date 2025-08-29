import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Solana wallet adapter
import { clusterApiUrl } from '@solana/web3.js';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

const network = WalletAdapterNetwork.Devnet; // Devnet for testing
const endpoint = clusterApiUrl(network);

const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

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