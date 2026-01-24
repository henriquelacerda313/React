/*
Objetivo do exercício

Você deve controlar se o children aparece ou não com base em uma condição.
*/  
  
  import Card from "./card";  

  function App() {

    return (

        <div>
          <Card mostrar={true}>
          <p>conteudo visivel</p>
          </Card>

          <Card mostrar={false}>
           <p>você não deveria ver isso</p>
          </Card>
        </div>


    );



  }

  export default App;