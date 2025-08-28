import React, { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, SystemProgram, Transaction, PublicKey } from '@solana/web3.js';

// CONFIG: price settings (Devnet testing)
const FREP_PRICE_USD = 0.001; // USD per token (for display)
const FREP_PRICE_SOL = 0.000001; // SOL per token (for creating tx) — adjust as you like
const TREASURY_ADDRESS = 'REPLACE_WITH_YOUR_DEVNET_WALLET_ADDRESS';

export default function Purchase(){
  const [amount, setAmount] = useState('');
    const { publicKey, connected, sendTransaction, disconnect } = useWallet();
      const { connection } = useConnection();

        const numericAmount = parseFloat(amount) || 0;
          const usdValue = numericAmount * FREP_PRICE_USD;
            const solValue = numericAmount * FREP_PRICE_SOL;
              const lamports = Math.round(solValue * LAMPORTS_PER_SOL);

                async function handleBuy(){
                    if(!connected) return alert('Please connect your wallet first');
                        if(numericAmount <= 0) return alert('Enter a valid amount');

                            const tx = new Transaction().add(
                                  SystemProgram.transfer({
                                          fromPubkey: publicKey,
                                                  toPubkey: new PublicKey(TREASURY_ADDRESS),
                                                          lamports,
                                                                })
                                                                    );

                                                                        try{
                                                                              const sig = await sendTransaction(tx, connection);
                                                                                    await connection.confirmTransaction(sig, 'confirmed');
                                                                                          alert('Transaction confirmed: ' + sig);
                                                                                              }catch(err){
                                                                                                    alert('Transaction failed: ' + (err.message || err));
                                                                                                        }
                                                                                                          }

                                                                                                            return (
                                                                                                                <div style={{maxWidth:700, margin:'0 auto'}}>
                                                                                                                      <h2>Purchase (Devnet)</h2>

                                                                                                                            {/* Connect button + modal with wallets (Phantom & Solflare) */}
                                                                                                                                  <div style={{display:'flex', gap:10, alignItems:'center'}}>
                                                                                                                                          <WalletMultiButton />

                                                                                                                                                  {connected && (
                                                                                                                                                            <>
                                                                                                                                                                        <button onClick={() => disconnect()} className="btn-secondary">Disconnect</button>
                                                                                                                                                                                    <div>Address: {publicKey.toBase58().slice(0,6)}...{publicKey.toBase58().slice(-4)}</div>
                                                                                                                                                                                              </>
                                                                                                                                                                                                      )}
                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                  {/* Calculator */}
                                                                                                                                                                                                                        <div style={{marginTop:20}}>
                                                                                                                                                                                                                                <input type="number" min="0" step="any" placeholder="Amount of FREP" value={amount} onChange={e=>setAmount(e.target.value)} />
                                                                                                                                                                                                                                        <p>USD Value: ${usdValue.toFixed(4)}</p>
                                                                                                                                                                                                                                                <p>SOL to send: {solValue.toFixed(8)} SOL</p>
                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                            <div style={{marginTop:10}}>
                                                                                                                                                                                                                                                                    <button onClick={handleBuy} disabled={!connected || numericAmount <= 0}>Buy Now</button>
                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                }