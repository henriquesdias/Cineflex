import { useState } from "react";
export default function Form({chosenSeats}){
  const [name, setName] = useState(""); 
  const [cpf, setCpf] = useState(0); 
  function rentSeats(event){
    event.preventDefault();
    const infoUser = {
      ids: chosenSeats,
      name: name,
      cpf: cpf,
    }
    console.log(infoUser);
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
        />
        <p>CPF do comprador</p>
        <input
          type="number"
          value={cpf}
          placeholder="Digite seu CPF ..."
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <button type="submit">Reservar assento(s)</button>
    </form>
  );
}