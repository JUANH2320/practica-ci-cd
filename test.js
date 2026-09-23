const assert = require("assert");
const { sumar } = require("./app.js");

// Prueba unitaria básica
assert.strictEqual(sumar(2, 3), 5, "La suma de 2 + 3 debe ser 5");
console.log("Pruebas unitarias pasaron exitosamente.");