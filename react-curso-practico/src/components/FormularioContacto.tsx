import { emailValido } from "../utils/validarEmail";
import { useState, type FormEvent } from "react";
import { nombreValido } from "../utils/validarNombre";

export function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const emailOk = emailValido(email);
  const nombreOk = nombreValido(nombre);

  const contMensaje = mensaje.length;

  const [enviado, setEnviado] = useState(false);

  type ResumenEnviado = { nombre: string; email: string; mensaje: string };
  const [resumen, setResumen] = useState<ResumenEnviado | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailOk || !nombreOk || contMensaje > 500) return;
    setResumen({ nombre, email, mensaje });
    setNombre("");
    setEmail("");
    setMensaje("");
    setEnviado(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Contacto</h2>
        <label>
          Nombre
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Mensaje
          <textarea
            name="mensaje"
            rows={4}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          <p>{contMensaje}</p>
        </label>
        <button
          type="submit"
          disabled={!emailOk || !nombreOk || contMensaje > 500}
        >
          Enviar
        </button>
        {!emailOk && email.length > 0 && (
          <p style={{ color: "crimson" }}>Introduce un email válido.</p>
        )}
        <button
          onClick={() => {
            setNombre("");
            setEmail("");
            setMensaje("");
            setEnviado(true);
            setResumen(null);
          }}
        >
          Nuevo mensaje
        </button>
      </form>
      {resumen && (
        <div
          style={{ marginTop: "1rem", padding: "1rem", background: "#f0f0f0" }}
        >
          <h3>Resumen enviado</h3>
          <p>
            <strong>Nombre:</strong> {resumen.nombre}
          </p>
          <p>
            <strong>Email:</strong> {resumen.email}
          </p>
          <p>
            <strong>Mensaje:</strong> {resumen.mensaje}
          </p>
        </div>
      )}
    </div>
  );
}
