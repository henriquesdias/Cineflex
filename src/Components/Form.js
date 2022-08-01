import { useState } from "react";
import { useNavigate } from "react-router-dom";

function validateCPF(cpf){
  if (cpf.length === 10) {
    return true;
  }
  return false;
}
function atLeastOneSeat(seatNumbers){
  if (seatNumbers.length < 1) {
    return false;
  }
}
export default function Form({ chosenSeats, completeInfoMovie , seatNumbers }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  function rentSeats(event) {
    event.preventDefault();
    const infoUser = {
      ids: chosenSeats,
      name: name,
      cpf: cpf,
    };
    console.log(chosenSeats);
    navigate("/sucesso", { state: 
      { seats: seatNumbers, 
        name: name, 
        cpf: cpf , 
        title: completeInfoMovie.movie.title,
        time: completeInfoMovie.name,
        date: completeInfoMovie.day.date
      } });
  }
  return (
    <form onSubmit={rentSeats}>
      <div>
        <p>Nome do comprador</p>
        <input
          type="text"
          value={name}
          placeholder="Digite seu nome ..."
          onChange={(e) => setName(e.target.value)}
          required
        />
        <p>CPF do comprador</p>
        <input
          type="number"
          value={cpf}
          placeholder="Digite seu CPF ..."
          onChange={(e) => setCpf(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit">Reservar assento(s)</button>
    </form>
  );
}