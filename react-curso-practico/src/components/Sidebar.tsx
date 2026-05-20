import { LayoutIntermedio } from "./LayoutIntermedio";

type SidebarProps = {
  mensaje: string;
  onAccion: () => void;
};

export function Sidebar({ mensaje, onAccion }: SidebarProps) {
  return (
    <section
      style={{ border: "1px dashed #999", padding: "1rem", marginTop: "1rem" }}
    >
      <p style={{ fontSize: "0.85rem", color: "#666" }}>
        Sidebar — solo reenvía props (prop drilling)
      </p>
      <LayoutIntermedio mensaje={mensaje} onAccion={onAccion} />
    </section>
  );
}
