import { useState } from "react";
import { PosicionContext } from "./context/PosicionContext";
import { CajaMovil } from "./components/CajaMovil";
import { Coordenadas } from "./components/Coordenadas";

function App() {
  const [visible, setVisible] = useState(true);
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });

  return (
    <PosicionContext.Provider value={{ posicion, setPosicion }}>
      <div style={{ padding: "1rem" }}>
        <h1>Caja con useReducer</h1>

        <Coordenadas />

        <p>Haz clic aquí y usa las flechas del teclado.</p>

        <button onClick={() => setVisible((v) => !v)}>
          {visible ? "Ocultar" : "Mostrar"} caja
        </button>

        {visible && <CajaMovil />}
      </div>
    </PosicionContext.Provider>
  );
}

export default App;
