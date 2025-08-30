import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BuyPage from "./pages/BuyPage"; // صفحة الشراء

export default function App() {
  return (
      <Router>
            <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
                    {/* الرابط إلى صفحة الشراء */}
                            <Link
                                      to="/buy"
                                                className="px-6 py-3 bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transition"
                                                        >
                                                                  الذهاب إلى صفحة الشراء
                                                                          </Link>

                                                                                  {/* المسارات */}
                                                                                          <Routes>
                                                                                                    <Route path="/buy" element={<BuyPage />} />
                                                                                                            </Routes>
                                                                                                                  </div>
                                                                                                                      </Router>
                                                                                                                        );
                                                                                                                        }