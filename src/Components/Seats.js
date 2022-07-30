import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Seat from "./Seat";
import { Link } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

export default function Seats() {
  const { idSessao } = useParams();
  const [seats , setSeats] = useState([]);
  const [chosenSeats, setChosenSeats] = useState([]);
  const [completeInfoMovie , setCompleteInfoMovie] = useState({});
  useEffect( () => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao.slice(1)}/seats`
    );
    promise.then( answer => {
      setSeats(answer.data.seats);
      setCompleteInfoMovie(answer.data);
    });
  },[])
  return (
    <>
      <h1 className="title">Selecione o(s) assento(s)</h1>
      <div className="seats">
        {seats.map((element, index) => (
          <Seat
            element={element}
            idSeat={element.id}
            chosenSeats={chosenSeats}
            setChosenSeats={setChosenSeats}
            key={index}
          />
        ))}
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
      <Form chosenSeats={chosenSeats} />
    </>
  );
}
