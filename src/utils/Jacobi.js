function jacobi(A, b, err=0.0001, maxIter) {
    const n = b.length;
    let x = new Array(n).fill(0); // Inicializamos x con ceros
    let xPrev;
    let iter = 0;

    while (iter < maxIter) {
        xPrev = x.slice(); // Copiamos los valores de x en la iteración anterior

        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 0; j < n; j++) {
                if (j !== i) {
                    sum += A[i][j] * xPrev[j];
                }
            }
            x[i] = (b[i] - sum) / A[i][i];
        }

        // Calculamos el error relativo
        let error = 0;
        for (let i = 0; i < n; i++) {
            error = Math.max(error, Math.abs((x[i] - xPrev[i]) / x[i]));
        }

        if (error < err) {
            console.log(`Convergió en ${iter + 1} iteraciones.`);
            return x;
        }

        iter++;
    }

    console.log("No se alcanzó la convergencia en el número máximo de iteraciones.");
    return x;
}

export default jacobi

// Ejemplo de uso
const A = [
    [0.13, -1.14, -9.93],
    [-1.08, -4.43, 5.68],
    [-9.71, 82.4, 0.75]
];
const b = [-31.94, 7.1, 157.34];
const err = 0.0001; // Tolerancia para la convergencia
const maxIter = 7; // Número máximo de iteraciones

const solution = jacobi(A, b, err, maxIter);
console.log("Solución:", solution); 