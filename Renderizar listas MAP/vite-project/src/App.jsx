function App() {
  const nomes = ["Ana", "Carlos", "João", "Maria", "Fernanda"];

  return (
    <div>
      <h1>Nomes com mais de 4 letras</h1>

      <ul>
        {nomes
          .filter(nome => nome.length > 4)
          .map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
