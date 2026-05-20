import { useState } from "react";
import { useContador } from "../hooks/userContador";

export function ContadorReducer() {
  const {
    valor,
    historial,
    incrementar,
    decrementar,
    reiniciar,
    sumar,
    establecer,
  } = useContador();

  const [input, setInput] = useState(5);

  return (
    <div>
      <button onClick={decrementar}>−1</button>

      <strong>{valor}</strong>

      <button onClick={incrementar}>+1</button>

      <button onClick={() => sumar(5)}>+5</button>

      <button onClick={reiniciar}>Reset</button>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />

      <button onClick={() => establecer(input)}>Establecer</button>

      <ul>
        {historial.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
