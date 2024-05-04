function eliminarGaussiana(matriz) {
    // Calcula el número de filas de la matriz
    const filas = matriz.length;
    // Calcula el número de columnas de la matriz (asumiendo que todas las filas tienen la misma longitud)
    const columnas = matriz[0].length;
    
    // Bucle que recorre las filas de la matriz
    for (let i = 0; i < filas - 1; i++) {
        // Variables para el pivoteo parcial
        let maxIndex = i; // Índice de la fila con el valor máximo en la columna actual
        let maxValue = Math.abs(matriz[i][i]); // Valor absoluto del elemento en la posición (i, i)

        // Bucle para encontrar el máximo en la columna actual
        for (let k = i + 1; k < filas; k++) {
            // Si el valor absoluto del elemento en la posición (k, i) es mayor que el valor máximo encontrado hasta ahora
            if (Math.abs(matriz[k][i]) > maxValue) {
                maxIndex = k; // Actualiza el índice del máximo
                maxValue = Math.abs(matriz[k][i]); // Actualiza el valor máximo
            }
        }
        
        // Pivoteo parcial: intercambio de filas si es necesario
        if (maxIndex !== i) {
            let temp = matriz[i]; // Almacena temporalmente la fila actual
            matriz[i] = matriz[maxIndex]; // Reemplaza la fila actual con la fila con el máximo
            matriz[maxIndex] = temp; // Reemplaza la fila con el máximo con la fila original
        }
        
        // Escalonamiento: elimina los elementos debajo del pivote
        for (let j = i + 1; j < filas; j++) {
            let factor = matriz[j][i] / matriz[i][i]; // Factor de eliminación
            // Resta la fila actual multiplicada por el factor de la fila j
            for (let k = i; k < columnas; k++) {
                matriz[j][k] -= matriz[i][k] * factor;
            }
        }
    }
    
    // Sustitución hacia atrás para obtener las soluciones
    const soluciones = new Array(filas).fill(0); // Array para almacenar las soluciones
    for (let i = filas - 1; i >= 0; i--) {
        soluciones[i] = matriz[i][columnas - 1] / matriz[i][i]; // Calcula la solución para la variable i
        // Actualiza las filas anteriores para eliminar la variable i
        for (let j = i - 1; j >= 0; j--) {
            matriz[j][columnas - 1] -= matriz[j][i] * soluciones[i];
        }
    }
    
    return soluciones; // Devuelve las soluciones encontradas
}


export default eliminarGaussiana;



// Ejemplo de uso

/*
const sistemaEcuaciones = [
    [0.13, -1.14, -9.93, -31.94],
    [-1.08, -4.43, 5.68, 7.1],
    [-9.71, 82.4, 0.75, 157.34]
];

const soluciones = eliminarGaussiana(sistemaEcuaciones);
console.log("Las soluciones son:", soluciones); */