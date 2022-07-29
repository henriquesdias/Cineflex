import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

export default function Session() {
  const { idSessao } = useParams();
  const [seats , setSeats] = useState([]);
  useEffect( () => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao[1]}/seats`
    );
    promise.then( answer => {
      setSeats(answer.data.seats);
    });
  },[])
  return (
      <>
        <h1 className="title">Selecione o(s) assento(s)</h1>
        <div className="seats">
          {seats.map( (element,index) => (<div className="circle" key={index}>{element.name}</div>) )}
        </div>
        <div className="info-seats">
          <div>
            <div className="select"></div>
            <p>Selecionado</p>
          </div>
          <div>
            <div className="disponible"></div>
            <p>Disponível</p>
          </div>
          <div>
            <div className="indisponible"></div>
            <p>Indisponível</p>
          </div>
        </div>
        <Form />
      </>
    );
}
