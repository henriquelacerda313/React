import { useState } from "react";

function App() {

  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Remove espaços e padroniza para minúsculo
    const textoFormatado = texto.trim().toLowerCase();

    // Verifica campo vazio
    if (textoFormatado === "") {
      setErro("Digite algo válido");
      return;
    }

    // Verifica se já existe
    if (lista.includes(textoFormatado)) {
      setErro("Esse item já existe");
      return;
    }

    // Adiciona novo item
    setLista([...lista, textoFormatado]);

    // Limpa erro
    setErro("");

    // Limpa input
    setTexto("");
  }

  function removerItem(indexParaRemover) {
    setLista(
      lista.filter((item, index) => index !== indexParaRemover)
    );
  }

  return (
    <div>

      <h1>Lista sem duplicados</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite um item"
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* Mostra erro se existir */}
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removerItem(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;