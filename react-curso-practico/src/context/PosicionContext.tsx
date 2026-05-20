import { createContext } from "react";
import type { Posicion } from "../reducers/cajaReducer";

export const PosicionContext = createContext<{
  posicion: Posicion;
  setPosicion: (p: Posicion) => void;
}>({
  posicion: { x: 0, y: 0 },
  setPosicion: () => {},
});
