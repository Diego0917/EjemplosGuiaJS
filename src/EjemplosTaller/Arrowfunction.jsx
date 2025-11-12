export default function Arrowfunction() {
  const suma = (a, b) => a + b;
  const nombre = (nombre) => `Hola ${nombre}`;

  return (
    <div>
      <h2>Funcion flecha</h2>
      <p>suma 2+9 = {suma(2, 9)}</p>
      <p>Tu nombre es = {nombre("juan")}</p>
    </div>
  );
}
