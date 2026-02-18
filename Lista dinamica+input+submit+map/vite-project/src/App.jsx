// Importa o useState do React
// useState serve para criar e controlar estado (dados que mudam)
import { useState } from "react";

function App() {

  // Cria um estado chamado "texto"
  // texto = valor atual
  // setTexto = função que altera o valor de texto
  const [texto, setTexto] = useState("");

  // Cria um estado chamado "itens"
  // Ele começa como um array vazio []
  // Vai guardar a lista de itens adicionados
  const [itens, setItens] = useState([]);

  // Função chamada quando o formulário é enviado
  function handleSubmit(e) {

    // Impede o comportamento padrão do navegador
    // Normalmente o form recarrega a página
    e.preventDefault();

    // Se o campo estiver vazio, não faz nada
    if (texto === "") return;

    // Atualiza o estado "itens"
    // ...itens copia todos os itens antigos
    // texto adiciona o novo item no final
    setItens([...itens, texto]);

    // Limpa o input depois de adicionar
    setTexto("");
  }

  return (
    <div>

      <h1>Lista dinâmica</h1> 

      {/* Quando o form é enviado, chama handleSubmit */}
      <form onSubmit={handleSubmit}>

        {/* Input controlado */}
        <input
          value={texto} 
          // value faz o input mostrar o valor do estado

          onChange={(e) => setTexto(e.target.value)}
          // onChange dispara quando o usuário digita
          // e.target.value pega o texto digitado
          // setTexto atualiza o estado
          
          placeholder="Digite um item"
        />

        {/* Botão que envia o formulário */}
        <button type="submit">
          Adicionar
        </button>

      </form>

      {/* Renderiza a lista */}
      <ul>

        {/* map percorre o array itens */}
        {itens.map((item, index) => (

          // key ajuda o React a identificar cada item da lista
          <li key={index}>
            {item}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default App;
