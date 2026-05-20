import { createContext, useState, type ReactNode } from "react";
import { LangControlContext } from "./ControlContext";

export type Lang = "es" | "en" | "fr";

export type Traducciones = {
  bienvenida: string;
  despedida: string;
};

const traducciones: Record<Lang, Traducciones> = {
  es: {
    bienvenida: "Bienvenido a la aplicación",
    despedida: "Hasta pronto",
  },
  en: {
    bienvenida: "Welcome to the app",
    despedida: "See you soon",
  },
  fr: {
    bienvenida: "Bonjour",
    despedida: "Au revoir",
  },
};

export const LangContext = createContext<Traducciones | null>(null);

type LangProviderProps = {
  children: ReactNode;
};

export function LangProvider({ children }: LangProviderProps) {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <LangControlContext.Provider value={{ lang, setLang }}>
      <LangContext.Provider value={traducciones[lang]}>
        <div style={{ padding: "1rem" }}>{children}</div>
      </LangContext.Provider>
    </LangControlContext.Provider>
  );
}
