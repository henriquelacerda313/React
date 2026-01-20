import Usuario from "./usuario";

function App() {
  return (
    <div>
      <h1>Lista de usuários</h1>

      <Usuario nome="Ana" idade={25} />
      <Usuario nome="Carlos" idade={30} />
      <Usuario nome="Maria" idade={22} />
    </div>
  );
}

export default App;
