import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import Seat from "./Seat";
import Form from "./Form";
import Footer from "./Footer";

const infoSeats = [
  { className: "select", text: "Selecionado" },
  { className: "disponible", text: "Disponível" },
  { className: "indisponible", text: "Indisponível" },
];
export default function Seats() {
  const { idSessao } = useParams();
  const [seats , setSeats] = useState([]);
  const [chosenSeats, setChosenSeats] = useState([]);
  const [ seatNumbers , setSeatNumbers] = useState([]);
  const [completeInfoMovie , setCompleteInfoMovie] = useState([]);
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
            seatNumbers={seatNumbers}
            setSeatNumbers={setSeatNumbers}
            key={index}
          />
        ))}
      </div>
      <div className="info-seats">
        {infoSeats.map( (element,index) => 
          <div key={index}>
            <div className={element.className}></div>
            <p>{element.text}</p>
          </div>    
         )}
      </div>
      <Form chosenSeats={chosenSeats} 
      completeInfoMovie={completeInfoMovie}
      seatNumbers={seatNumbers} />
      {completeInfoMovie.length !== 0 ? (
        <Footer 
        img={completeInfoMovie.movie.posterURL}
        title={completeInfoMovie.movie.title}
        weekday={completeInfoMovie.day.weekday}
        date={completeInfoMovie.name}
        />
      ) : ""}
    </>
  );
}
