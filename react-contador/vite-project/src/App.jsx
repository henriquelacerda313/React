import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  return (
    <div>
      <h1>Contador</h1>
      <p>Valor: {contador}</p>

      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
    </div>
  );
}

export default App; 
// “Esse arquivo está exportando o componente App como principal”.
// export serve para enviar algo de um arquivo para outro.
//Sem export default, o React não saberia o que renderizar.

/*
O que é useState

useState é um hook do React que cria um estado.
Estado = um valor que pode mudar e que, quando muda, atualiza a tela automaticamente.

O set (ex: setContador, setNome) é a única forma correta de alterar um estado.

*/
