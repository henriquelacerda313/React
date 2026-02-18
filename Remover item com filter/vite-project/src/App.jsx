import { useState } from "react";

function App() {

  // Estado do input
  const [texto, setTexto] = useState("");

  // Estado da lista (array)
  const [lista, setLista] = useState([]);

  // Função para adicionar item
  function handleSubmit(e) {
    e.preventDefault(); // impede reload da página

    if (texto === "") return; // não adiciona vazio

    // Cria novo array copiando os antigos + novo item
    setLista([...lista, texto]);

    setTexto(""); // limpa input
  }

  // Função para remover item pelo índice
  function removerItem(indexParaRemover) {

    // filter cria um NOVO array
    // Mantém apenas os itens cujo índice
    // seja diferente do índice clicado
    const novaLista = lista.filter((item, index) => {
      return index !== indexParaRemover;
    });

    // Atualiza estado com novo array
    setLista(novaLista);
  }

  return (
    <div>

      <h1>Lista com Remoção</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={texto} // valor controlado pelo estado
          onChange={(e) => setTexto(e.target.value)} // atualiza estado
        />

        <button type="submit">
          Adicionar
        </button>
      </form>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}

            {/* Botão chama remover passando o index */}
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
