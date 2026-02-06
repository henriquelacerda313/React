import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");//mostrar nome após submit

  function handleSubmit(e) {
    e.preventDefault();

    if (nome === "") {
      setMensagem("Campo vazio");
      return;
    }

    setMensagem(`Nome enviado: ${nome}`);
    setNome("");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

    <h1>Formulario com Submit</h1>

        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      {mensagem && (
        <p className={nome === "" ? "erro" : "sucesso"}>
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default App;
