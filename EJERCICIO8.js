// Ejercicio 8: Verificando si Algún Hechizo es lo Suficientemente Poderoso
// Instrucciones: Verifica si al menos un hechizo tiene un poder mayor a 100.
const hechizos = [60, 80, 115, 95, 85];
// Escribe tu solución aquí usando some():
const algunoEsIlegible = hechizos.some(valor => valor < 100);
console.log(algunoEsIlegible)
