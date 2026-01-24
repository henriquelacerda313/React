import { useState } from "react";

// gerenciar o estado de algum valor

function App () {
  const [nome] = useState("Henrique");
  const [number, setNumber] = useState(0);

  console.log(nome);

  const changeNumber = () => {
    setNumber(number + 1);
  }


  return (
      <div className="App">
      <h2>Meu Nome é: {nome}</h2>

      <p>Numero: {number}</p>
    <button onClick={changeNumber}>Mudar numero</button>
    </div>

 
  );
}

export default App;