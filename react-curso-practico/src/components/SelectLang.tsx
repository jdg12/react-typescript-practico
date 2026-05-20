import { useContext } from "react";
import { LangControlContext } from "../context/ControlContext"; // ajusta ruta
import type { Lang } from "../context/LangContext";

export default function SelectLang() {
  const context = useContext(LangControlContext);

  if (!context) {
    throw new Error("SelectLang debe usarse dentro de LangProvider");
  }

  const { lang, setLang } = context;

  return (
    <label>
      Idioma:{" "}
      <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
        <option value="es">ES</option>
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </label>
  );
}
