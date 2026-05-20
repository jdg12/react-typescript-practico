import { createContext } from "react";
import type { Lang } from "./LangContext";

export const LangControlContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);
