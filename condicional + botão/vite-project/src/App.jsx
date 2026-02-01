import { useState } from "react";

function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
         {mostrar ? "Esconder" : "Mostrar"}
      </button>
     {mostrar ? <p>Agora você me vê 👀</p> : null}
     
    </div>
  );
}

export default App;
