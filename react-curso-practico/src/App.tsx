import { withData } from "./hoc/withData";
import { InfoUsuario } from "./components/InfoUsuario";
import { withDataLista } from "./hoc/withDataList";
import { ListaUsuarios } from "./components/ListaUsuarios";

const InfoUsuarioConDatos = withData(
  InfoUsuario,
  "https://jsonplaceholder.typicode.com/users/1",
);
const ListaConDatos = withDataLista(
  ListaUsuarios,
  "https://jsonplaceholder.typicode.com/users",
);

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>HOC withData</h1>
      <InfoUsuarioConDatos />
      <ListaConDatos />
    </div>
  );
}

export default App;
