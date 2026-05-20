import { ThemeProvider } from "./context/ThemeContext";
import { PanelTema } from "./components/PanelTema";

function App() {
  return (
    <ThemeProvider>
      <h1 style={{ padding: "1rem 1rem 0" }}>Tema con Context</h1>
      <PanelTema />
    </ThemeProvider>
  );
}

export default App;
