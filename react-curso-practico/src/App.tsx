import { LangProvider } from "./context/LangContext";
import { Layout } from "./components/Layout";
import SelectLang from "./components/SelectLang";

function App() {
  return (
    <LangProvider>
      <SelectLang></SelectLang>
      <Layout>
        <p>Contenido principal de la página.</p>
      </Layout>
    </LangProvider>
  );
}

export default App;
