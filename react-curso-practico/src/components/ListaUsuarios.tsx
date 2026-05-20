import type { Usuario } from "./InfoUsuario";

type Props = {
  data: Usuario[];
};

export function ListaUsuarios({ data }: Props) {
  return (
    <ul>
      {data.map((usuario) => (
        <li key={usuario.id}>{usuario.name}</li>
      ))}
    </ul>
  );
}
