import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Time({ day, date, hours }) {
  return (
    <div className="info">
      <span>
        {day} - {date}
      </span>
      <div>
        {hours.map( (element,index) => (
          <Link to={element.id} key={index}>
            <div className="time" key={index}>{element.name}</div>  
          </Link>
        ) )}
      </div>
    </div>
  );
}
export default function Schedules(){
  const { idFilm } = useParams();
  const [listOfSessionTime , setListOfSessionTime ] = useState([]);
  useEffect( () => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm[1]}/showtimes`);
    promise.then( answer => setListOfSessionTime(answer.data.days)); 
  },[]);
  return (
      <>
        <h1 className="title">Selecione o horário</h1>
        {listOfSessionTime.map( (time,index) => (
          <Time day={time.weekday} date={time.date} key={index} hours={time.showtimes} />
        ) )}
      </>
    )
}
