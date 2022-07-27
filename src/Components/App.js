import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalPage from "./PrincipalPage";
import "./CSS/reset.css";
import "./CSS/style.css";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PrincipalPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

