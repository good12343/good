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
            {/* Header */}
                  <header className="nav bg-gray-900 text-white fixed top-0 w-full z-50 shadow">
                          <nav className="max-w-6xl mx-auto flex justify-center sm:justify-start gap-6 py-4 px-6">
                                    <Link to="/" className="hover:text-blue-400 transition">Home</Link>
                                              <Link to="/whitepaper" className="hover:text-blue-400 transition">Whitepaper</Link>
                                                        <Link to="/airdrop" className="hover:text-blue-400 transition">Airdrop</Link>
                                                                  <Link to="/how-to-buy" className="hover:text-blue-400 transition">How to Buy</Link>
                                                                            <Link to="/purchase" className="hover:text-blue-400 transition">Purchase</Link>
                                                                                    </nav>
                                                                                          </header>

                                                                                                {/* Main content */}
                                                                                                      <main className="pt-24 px-4 sm:px-6 lg:px-8">
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