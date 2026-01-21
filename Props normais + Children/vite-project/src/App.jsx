import Box from "./box"

function App() {
  return (
    <div>

      <h1>Exemplo de Box</h1>

      <Box cor = "red">
        <p>Texto dentro da BOX vermelha</p>
      </Box>

      <Box cor ="blue" >
        <h2>Titulo Azul</h2>
        <p>Outro conteudo</p> 
      </Box>

      <Box cor = "green">
        <p>BOX verde</p>
      </Box>

    </div>
  );
}

export default App;