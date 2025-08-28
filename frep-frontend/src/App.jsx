import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Whitepaper from './pages/Whitepaper';
import Airdrop from './pages/Airdrop';
import HowToBuy from './pages/HowToBuy';
import Purchase from './pages/Purchase';

export default function App() {
  return (
      <BrowserRouter>
            <header className="nav">
                    <nav>
                              <Link to="/">Home</Link> | <Link to="/whitepaper">Whitepaper</Link> | <Link to="/airdrop">Airdrop</Link> | <Link to="/how-to-buy">How to Buy</Link> | <Link to="/purchase">Purchase</Link>
                                      </nav>
                                            </header>
                                                  <main style={{ padding: 20 }}>
                                                          <Routes>
                                                                    <Route path="/" element={<Home />} />
                                                                              <Route path="/whitepaper" element={<Whitepaper />} />
                                                                                        <Route path="/airdrop" element={<Airdrop />} />
                                                                                                  <Route path="/how-to-buy" element={<HowToBuy />} />
                                                                                                            <Route path="/purchase" element={<Purchase />} />
                                                                                                                    </Routes>
                                                                                                                          </main>
                                                                                                                              </BrowserRouter>
                                                                                                                                );
                                                                                                                                }