import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

function selectSeat(seat,setSelect,select){
  if (seat.isAvailable === false) {
    alert("Esse assento não está disponível");
  } else {
    if (select === "") {
      setSelect("select");
    } else {
      setSelect("");
    }
  }
}

function Seat({element}){
  const [select, setSelect] = useState("");
  return (
    <div
      className={
        element.isAvailable === true ? `circle ${select}` : "circle indisponible"
      }
      onClick={() => selectSeat(element,setSelect,select)}
    >
      {element.name <= 9 ? `0${element.name}` : element.name}
    </div>
  );
}
export default function Session() {
  const { idSessao } = useParams();
  const [seats , setSeats] = useState([]);
  useEffect( () => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao.slice(1)}/seats`
    );
    promise.then( answer => {
      setSeats(answer.data.seats);
      console.log(answer.data);
    });
  },[])
  return (
      <>
        <h1 className="title">Selecione o(s) assento(s)</h1>
        <div className="seats">
          {seats.map( (element,index) => 
          (<Seat element={element}  key={index}/>)
        )}
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
