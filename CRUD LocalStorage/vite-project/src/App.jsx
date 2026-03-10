// Importa Hooks do React
import { useState, useEffect } from "react";

function App() {

  // 🔹 Estado principal da lista
  const [lista, setLista] = useState([]);

  // 🔹 Estado do input principal
  const [texto, setTexto] = useState("");

  // 🔹 Controla qual índice está sendo editado
  // null significa: não está editando nenhum item
  const [editandoIndex, setEditandoIndex] = useState(null);

  // 🔹 Texto temporário para edição
  const [textoEditado, setTextoEditado] = useState("");



  // ==========================
  // 🔥 CARREGAR DO LOCALSTORAGE
  // Executa apenas uma vez
  // ==========================
  useEffect(() => {

  // pega dados salvos no localStorage
  const dadosSalvos = localStorage.getItem("lista");

  // se existir algo salvo
  if (dadosSalvos) {

    // converte o texto JSON para array e atualiza o estado
    setLista(JSON.parse(dadosSalvos));
  }

}, []); 
// [] = executa apenas uma vez quando o componente é carregado



  // ==========================
  // 🔥 SALVAR NO LOCALSTORAGE
  // Executa sempre que lista mudar
  // ==========================
  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(lista));
  }, [lista]); //"Execute esse useEffect sempre que lista mudar."
  //parse = tranforma array em objeto
  // stringsy transforma array em texto



  // ==========================
  // 🔥 CREATE
  // ==========================
  function adicionarItem(e) {
    e.preventDefault();

    if (texto.trim() === "") return;

    setLista([...lista, texto]);
    setTexto("");
  }



  // ==========================
  // 🔥 DELETE
  // ==========================
  function removerItem(indexRemover) {
    const novaLista = lista.filter((_, index) => index !== indexRemover);
    setLista(novaLista);
  }



  // ==========================
  // 🔥 INICIAR EDIÇÃO
  // ==========================
  function iniciarEdicao(index) {
    setEditandoIndex(index);
    setTextoEditado(lista[index]);
  }



  // ==========================
  // 🔥 UPDATE
  // ==========================
  function salvarEdicao() {

    if (textoEditado.trim() === "") return;

    const novaLista = lista.map((item, index) =>
      index === editandoIndex ? textoEditado : item
    );

    setLista(novaLista);

    setEditandoIndex(null);
    setTextoEditado("");
  }



  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>

      <h1>CRUD Completo</h1>

      {/* FORMULÁRIO */}
      <form onSubmit={adicionarItem}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite um item"
        />
        <button type="submit">Adicionar</button>
      </form>



      {/* LISTA */}
      <ul>

        {lista.map((item, index) => (

          <li key={index} style={{ marginTop: "10px" }}>

            {editandoIndex === index ? (
              <>
                <input
                  value={textoEditado}
                  onChange={(e) => setTextoEditado(e.target.value)}
                />
                <button onClick={salvarEdicao}>Salvar</button>
              </>
            ) : (
              <>
                {item}
                <button onClick={() => iniciarEdicao(index)}>
                  Editar
                </button>
                <button onClick={() => removerItem(index)}>
                  Remover
                </button>
              </>
            )}

          </li>

        ))}

      </ul>

    </div>
  );
}

export default App;