import { useContext } from "react";
import { PosicionContext } from "../context/PosicionContext";

export function Coordenadas() {
  const { posicion } = useContext(PosicionContext);

  return (
    <p>
      X: {posicion.x} | Y: {posicion.y}
    </p>
  );
}
