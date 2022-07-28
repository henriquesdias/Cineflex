import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Session() {
  const { idSessao } = useParams();
  console.log(idSessao);
  return <h1 className="title">Selecione o(s) assento(s)</h1>;
}
