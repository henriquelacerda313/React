function App() {
  const nomes = ["Ana", "Carlos", "João", "Maria"];

  return (
    <div>
      <h1>Lista de nomes</h1>

      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

{nomes.map((nome, index) => (<li key={index} >{nome}</li>))}
