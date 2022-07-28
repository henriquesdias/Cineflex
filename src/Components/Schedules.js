import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";


export default function Schedules(){
  const idFilm = useParams();
  const [listOfSessionTime , setListOfSessionTime ] = useState([]);
  useEffect( () => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`);

  })
  return (
      <>
        <h1 className="title">Selecione o horário</h1>
        <div className="info">
          <span>Quinta-feira - 24/06/2021</span>
          <div>
            <div className="time">15:00</div>
            <div className="time">19:00</div>
          </div>
        </div>
      </>
    )
}