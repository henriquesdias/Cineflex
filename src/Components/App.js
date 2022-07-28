import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalPage from "./PrincipalPage";
import Schedules from "./Schedules";
import "./CSS/reset.css";
import "./CSS/style.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PrincipalPage />}></Route>
          <Route path="/filme/:idFilme" element={ <Schedules />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

