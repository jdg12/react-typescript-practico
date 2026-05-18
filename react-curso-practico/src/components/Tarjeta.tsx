type TarjetaProps = {
  titulo: string;
  children: React.ReactNode;
};

export function Tarjeta({ titulo, children }: TarjetaProps) {
  return (
    <article className="tarjeta">
      <h3>{titulo}</h3>
      {children}
    </article>
  );
}
