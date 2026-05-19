export function nombreValido(nombre: string): boolean {
  if (nombre.length >= 2) {
    return true;
  }
  return false;
}
