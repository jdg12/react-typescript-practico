import { ListaProductos } from "./components/ListaProductos";

const productos = [
  { id: 1, nombre: "Teclado", precio: 49.9 },
  { id: 2, nombre: "Ratón", precio: 24.5 },
];

function App() {
  return (
    <main>
      <h1>Tienda demo</h1>
      <ListaProductos productos={productos} />
    </main>
  );
}

export default App;
