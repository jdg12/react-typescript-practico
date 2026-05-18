import { ListaProductos } from "./components/ListaProductos";
import { productos } from "./data/productos";
import type { Producto } from "./types/producto";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Catálogo</h1>
      <ListaProductos
        items={productos.sort((p1: Producto, p2: Producto) => {
          return p2.precio - p1.precio;
        })}
      />
    </div>
  );
}

export default App;
