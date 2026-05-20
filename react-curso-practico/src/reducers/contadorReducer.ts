export type EstadoContador = {
  valor: number;
  historial: string[];
};

export type AccionContador =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "reiniciar" }
  | { type: "sumar"; payload: number }
  | { type: "establecer"; payload: number };

export const estadoInicial: EstadoContador = { valor: 0, historial: [] };

export function contadorReducer(
  estado: EstadoContador,
  accion: AccionContador,
): EstadoContador {
  const agregarHistorial = (nuevo: string) => {
    return [...estado.historial, nuevo].slice(-3);
  };

  switch (accion.type) {
    case "incrementar":
      return {
        valor: estado.valor + 1,
        historial: agregarHistorial(accion.type),
      };
    case "decrementar":
      return {
        valor: Math.max(0, estado.valor - 1),
        historial: agregarHistorial(accion.type),
      };
    case "reiniciar":
      return { valor: 0, historial: agregarHistorial(accion.type) };
    case "sumar":
      return {
        valor: estado.valor + accion.payload,
        historial: agregarHistorial(accion.type),
      };
    case "establecer":
      return {
        valor: accion.payload,
        historial: agregarHistorial(accion.type),
      };
    default:
      return estado;
  }
}
