import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalPage from "./PrincipalPage";
import Schedules from "./Schedules";
import Sucess from "./SucessPage";
import Seats from "./Seats";
import "./CSS/reset.css";
import "./CSS/style.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PrincipalPage />}></Route>
          <Route path="/filme/:idFilm" element={ <Schedules />}></Route>
          <Route path="/assentos/:idSessao" element={<Seats />}></Route>
          <Route path="/sucesso" element={<Sucess />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

