import { useState } from "react";

export function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <button
        type="button"
        onClick={() => {
          if (cuenta > 0) {
            setCuenta(cuenta - 1);
          }
        }}
      >
        −
      </button>
      {cuenta === 10 && <p>"Maximo alcanzado"</p>}
      {cuenta < 10 && <p>{cuenta}</p>}
      <button
        type="button"
        onClick={() => {
          if (cuenta < 10) {
            setCuenta(cuenta + 1);
          }
        }}
      >
        +
      </button>
      <button type="button" onClick={() => setCuenta(0)}>
        Reiniciar
      </button>
    </div>
  );
}
