import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");

  function handleChange(event) {
    setNome(event.target.value);
  }

  function limpar() {
    setNome("");
  }

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={handleChange}
      />

      <p>Você digitou: {nome.toUpperCase()}</p>
      <p>Caracteres: {nome.length}</p>

      <button onClick={limpar}>Limpar</button>
    </div>
  );
}

export default App;

/*
length = comprimento - contou quantos caracters foram digitados
handle change = manipular mudança - apenas um nome para variavel
to upper case = tornar letras maiusculas

*/
