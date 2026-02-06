import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");

  const nomeMaiusculo = nome.toUpperCase();

  return (
    <div className="container">
      <h1>Formulário</h1>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome} // value= "o texto dentro de input é{}"
        onChange={(e) => setNome(e.target.value)}
        //onchange = é um evento! dispara toda vez que o valor do input muda(cada tecla pressionada) 
        //target significa: qual elemento disparou o evento? value={nome}
      />

      <p>Maiúsculo: {nomeMaiusculo}</p>

      <p className={nome === "" ? "vazio" : "preenchido"}>
  {nome === "" ? "Campo vazio" : "Texto preenchido"}
</p>

      <button onClick={() => setNome("")}>
        Limpar
      </button>
    </div>
  );
}

export default App;
