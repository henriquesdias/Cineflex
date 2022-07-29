export default function Form(){
  return (
    <form>
      <div>
        <p>Nome do comprador</p>
        <input type="text" placeholder="Digite seu nome ..." />
        <p>CPF do comprador</p>
        <input type="password" placeholder="Digite seu CPF ..."/>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}