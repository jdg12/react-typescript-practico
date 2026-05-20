import { useState } from "react";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [total, setTotal] = useState(0);
  const incrementar = () => setTotal((t) => t + 1);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Prop drilling</h1>
      <p>Total (App): {total}</p>
      <Sidebar mensaje={`Clicks: ${total}`} onAccion={incrementar} />
    </div>
  );
}

export default App;
