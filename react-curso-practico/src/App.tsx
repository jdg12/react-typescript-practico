import { Boton } from "./components/Boton";
import { withBorder } from "./hoc/withBorder";
import { withHover } from "./hoc/withHover";

const BotonConEstilos = withBorder(withHover(Boton));

function App() {
  return (
    <div style={{ padding: "1rem", display: "flex", gap: "1rem" }}>
      <Boton onClick={() => alert("Botón normal")}>Normal</Boton>
      <BotonConEstilos onClick={() => alert("Botón con hover")}>
        Con hover
      </BotonConEstilos>
    </div>
  );
}

export default App;
