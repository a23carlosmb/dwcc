// FP, Tarea realizada por el alumno Martínez Bourio

// EN este caso básicamente la diferencia con javaSCript serían las declaraciones de los tipos de datos,
// vistos en el apunte "Typescript tipos de datos"

// Tabla de multiplicar del 9 con bucle while
console.log("Tabla de multiplicar del 9 con bucle while:");
let i: number = 1;
while (i <= 10) {
    console.log(`9 x ${i} = ${9 * i}`);
    i++;
}

// Fibonaci, uso bucle do while
console.log("\nPrimeros 10 números de la sucesión de Fibonacci con bucle do while:");
let fib: number[] = [0, 1];
let j: number = 2;
do {
    fib[j] = fib[j - 1] + fib[j - 2];
    console.log(fib[j]);
    j++;
} while (j < 10);

// Determinar si un número es primo o no, usaré el bucle for
function esPrimo(numero: number): boolean {  // Declaración de tipo
    for (let i: number = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}
//test
let numeroPrimo: number = 13; // declaro tipo
console.log(`\n${numeroPrimo} ${esPrimo(numeroPrimo) ? 'es' : 'no es'} primo.`);

// Pedir al usuario que introduzca un número y mostrar la clasificación
let edad: number = parseInt(prompt("Introduce tu edad:"));
if (!isNaN(edad)) {
    switch (true) {
        case edad >= 0 && edad <= 12:
            console.log("neno");
            break;
        case edad >= 13 && edad <= 18:
            console.log("adolescente");
            break;
        case edad >= 19 && edad <= 30:
            console.log("xoven");
            break;
        case edad >= 31 && edad <= 64:
            console.log("adulto");
            break;
        case edad >= 65 && edad <= 100:
            console.log("xubilado");
            break;
        default:
            console.log("ERROR, edad no contemplada");
    }
} else {
    console.log("ERROR, entrada no válida");
}



