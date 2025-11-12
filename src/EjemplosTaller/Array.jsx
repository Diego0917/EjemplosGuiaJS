export default function Array() {
  const numeros = [13, 19, 17, 18, 20, 40, 50, 34];

  return (
    <div>
      <h2>Array ejemplos</h2>
      <p>{numeros.map((numeros) => numeros)}</p>
      <p>{numeros.filter((numeros) => numeros % 2 == 0)}</p>
      <p>{numeros.reduce((numeros) => numeros)}</p>
    </div>
  );
}
