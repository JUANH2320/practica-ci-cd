const assert = require("assert");
const { sumar } = require("./app.js");

// Error intencional: forzamos que espere 99 en lugar de 5
assert.strictEqual(sumar(2, 3), 99, "La suma de 2 + 3 debe ser 5");
console.log("Pruebas unitarias pasaron exitosamente.");