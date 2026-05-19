import { useState, useEffect } from "react";

function formatearHora(fecha: Date): string {
  console.log("Formateando hora");
  return fecha.toLocaleTimeString("es-ES", { hour12: false });
}
function formatearFecha(fecha: Date): string {
  console.log("Formateando hora");
  return fecha.toLocaleDateString("es-ES");
}

export function Reloj() {
  const [hora, setHora] = useState(() => formatearHora(new Date()));
  const [fecha, setFecha] = useState(() => formatearFecha(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setHora(formatearHora(new Date()));
      setFecha(formatearFecha(new Date()));
    }, 500);

    return () => {
      window.clearInterval(id);
    };
  });

  return (
    <div>
      <p>Hora: {hora}</p>
      <p>Fecha: {fecha}</p>
    </div>
  );
}
