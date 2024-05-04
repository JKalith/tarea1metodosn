//Jacobi
// Definición de la función f(x)
function f(x) {
    return 2 - Math.exp(x / 2) * Math.cos(Math.PI * x);
}

// Definición de la función f'(x)
function derivative_f(x) {
    return -0.5 * Math.exp(x / 2) * Math.cos(Math.PI * x) - Math.PI * Math.exp(x / 2) * Math.sin(Math.PI * x);
}

// Ejemplo de uso:
const x = 1; // Valor de x para evaluar las funciones

// Evaluación de la función f(x) en x
const result_f = f(x);
console.log("f(" + x + ") =", result_f);

// Evaluación de la derivada f'(x) en x
const result_derivative_f = derivative_f(x);
console.log("f'(" + x + ") =", result_derivative_f);


function calcularOperacion(x, e, b) {
    return x - (e / b);
}


console.log("Nuevo punto " + calcularOperacion(x, result_f, result_derivative_f))