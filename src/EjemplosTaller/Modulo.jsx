import { suma, resta, multiplicacion } from "./Operaciones.js";
export default function Modulo() {
  return (
    <div>
      <h2>Modulo</h2>
      <p>suma 2+9 = {suma(2, 9)}</p>
      <p>resta 2-9 = {resta(2, 9)}</p>
      <p>Multiplicacion 2*9 = {multiplicacion(2, 9)}</p>
    </div>
  );
}
