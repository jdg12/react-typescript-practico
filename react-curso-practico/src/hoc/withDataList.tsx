import { useEffect, useState, type ComponentType } from "react";
import type { Usuario } from "../components/InfoUsuario";

export function withDataLista<P extends object>(
  Wrapped: ComponentType<P & { data: Usuario[] }>,
  url: string,
) {
  return function WithDataLista(props: P) {
    const [data, setData] = useState<Usuario[]>([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      let cancelado = false;

      async function cargar() {
        try {
          setError(false);
          const res = await fetch(url);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);

          const json: Usuario[] = await res.json();

          if (!cancelado) setData(json);
        } catch {
          if (!cancelado) {
            setData([]);
            setError(true);
          }
        } finally {
          if (!cancelado) setCargando(false);
        }
      }

      cargar();

      return () => {
        cancelado = true;
      };
    }, [url]);

    if (cargando) return <p>Cargando lista…</p>;
    if (error) return <p>Error en fetch</p>;

    return <Wrapped {...props} data={data} />;
  };
}
