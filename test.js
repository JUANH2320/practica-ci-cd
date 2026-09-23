const assert = require("assert");
const { sumar } = require("./app.js");

// Corrección: el resultado esperado vuelve a ser 5
assert.strictEqual(sumar(2, 3), 5, "La suma de 2 + 3 debe ser 5");
console.log("Pruebas unitarias pasaron exitosamente.");