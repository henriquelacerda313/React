import Produto from "./produto";

function App() {
  const produtos = [
    { id: 1, nome: "Mouse", preco: 80 },
    { id: 2, nome: "Teclado", preco: 150 }
  ];

  return (
    <div>
      <h1>Lista de produtos</h1>

      {produtos.map(produto => (
        <Produto
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
        />
      ))}
    </div>
  );
}

export default App;
