import { useState } from "react";

function App() {
const [nome, setNome] = useState("");


  return(

    <div>

      <h1>Formulário Simples</h1>

      <input 
      type="text"
      placeholder="Digite seu nome: "
      value={nome}
      onChange={(event) => setNome(event.target.value)}>
      </input>


      <p>Você digitou: {nome}</p>
    </div>
  );
}

export default App;