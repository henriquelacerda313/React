import { useState } from "react";
import Card from "./card";

function App(){

  const [mostrar, setMostrar] = useState(false);

  // ()=>   ,  é uma arrow function de function(){};


  return(
<div> 

<button onClick={()=> setMostrar(!mostrar)}>
  {mostrar ?"Esconder Card" :"Mostrar Card"}
</button>

    


</div>


  );
}

export default App;