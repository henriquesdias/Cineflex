import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Sucess() {
  const {state} = useLocation();
  return (
    <>
      <div className="sucess">
        Pedido feito <br /> com sucesso
      </div>
      <div className="info-sucess">
        <h2>Filme e sessão</h2>
        <p>{state.title}</p>
        <p>
          {state.date} {state.time}
        </p>
        <h2>Ingressos</h2>
        {state.seats.map((element, index) => (
          <p key={index}>Assento {element}</p>
        ))}
        <h2>Comprador</h2>
        <p>Nome: {state.name}</p>
        <p>
          CPF: {state.cpf.slice(0, 3)}.{state.cpf.slice(3, 6)}.{state.cpf.slice(6,9)}-{state.cpf.slice(9,11)} 
        </p>
      </div>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="home">Voltar para Home</div>
      </Link>
    </>
  );
}
