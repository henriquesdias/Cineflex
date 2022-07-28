import { useParams } from "react-router-dom";


export default function Schedules(){
  const params = useParams();
  console.log(params);
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