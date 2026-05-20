import { useReducer } from "react";
import { contadorReducer, estadoInicial } from "../reducers/contadorReducer";

export function useContador() {
  const [estado, dispatch] = useReducer(contadorReducer, estadoInicial);

  return {
    valor: estado.valor,
    historial: estado.historial,

    incrementar: () => dispatch({ type: "incrementar" }),
    decrementar: () => dispatch({ type: "decrementar" }),
    reiniciar: () => dispatch({ type: "reiniciar" }),
    sumar: (cantidad: number) => dispatch({ type: "sumar", payload: cantidad }),
    establecer: (valor: number) =>
      dispatch({ type: "establecer", payload: valor }),
  };
}
