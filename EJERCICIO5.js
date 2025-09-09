// Ejercicio 5: Conteo de Espadas Potentes
// Instrucciones: Cuenta cuántas espadas tienen un poder mayor a 50.
const espadas = [20, 60, 45, 80, 90, 30];
// Escribe tu solución aquí usando reduce():
const cantidadPotentes = espadas.reduce((contador, poder) => {
  if (poder > 50) {
    return contador + 1;
  }
  return contador;
}, 0);

console.log(cantidadPotentes);
