import { Tarjeta } from "./Tarjeta";

export type Producto = { id: number; nombre: string; precio: number };

type ListaProductosProps = {
  productos: Producto[];
};

export function ListaProductos({ productos }: ListaProductosProps) {
  return (
    <div className="grid">
      {productos.map((p) => (
        <Tarjeta key={p.id} titulo={p.nombre}>
          <p>{p.precio.toFixed(2)} €</p>
        </Tarjeta>
      ))}
    </div>
  );
}
