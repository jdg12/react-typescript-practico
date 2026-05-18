import type { ReactNode } from "react";

type TarjetaProps = {
  children: ReactNode;
  titulo?: string;
  pie?: ReactNode;
};

export function Tarjeta({ children, titulo, pie }: TarjetaProps) {
  return (
    <div className="tarjeta">
      {titulo ? <h3 style={{ marginTop: 0 }}>{titulo}</h3> : null}
      {children}
      {pie}
    </div>
  );
}
