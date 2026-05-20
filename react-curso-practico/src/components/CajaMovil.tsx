import { useEffect, useReducer, useContext } from "react";
import {
  cajaReducer,
  posicionInicial,
  TAMANO_CAJA,
} from "../reducers/cajaReducer";
import { PosicionContext } from "../context/PosicionContext";

export function CajaMovil() {
  const [pos, dispatch] = useReducer(cajaReducer, null, posicionInicial);

  const { setPosicion } = useContext(PosicionContext);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      dispatch({ type: "tecla", key: e.key });
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setPosicion(pos);
  }, [pos]);

  return (
    <div
      style={{
        width: TAMANO_CAJA,
        height: TAMANO_CAJA,
        backgroundColor: "crimson",
        position: "fixed",
        left: pos.x,
        top: pos.y,
      }}
    />
  );
}
