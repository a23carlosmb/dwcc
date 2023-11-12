// FP, Tarea realizada por el alumno Martínez Bourio

// Tabla de multiplicar del 9 con bucle while
console.log("Tabla de multiplicar del 9 con bucle while:");
let i = 1;
while (i <= 10) {
    console.log(`9 x ${i} = ${9 * i}`);
    i++;
}

// Fibonaci, uso bucle do while
console.log("\nPrimeros 10 números de la sucesión de Fibonacci con bucle do while:");
let fib = [0, 1];
let j = 2;
do {
    fib[j] = fib[j - 1] + fib[j - 2];
    console.log(fib[j]);
    j++;
} while (j < 10);

// Determinar si un número es primo o no, usaré el bucle for
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

// test
let numeroPrimo = 13; 
console.log(`\n${numeroPrimo} ${esPrimo(numeroPrimo) ? 'es' : 'no es'} primo.`);

// parte 2: programa de las edades
let edad = parseInt(prompt("¿Me dices tu edad?"));
if (!isNaN(edad)) {
    if (edad >= 0 && edad <= 12) {
        console.log("neno");
    } else if (edad >= 13 && edad <= 18) {
        console.log("adolescente.");
    } else if (edad >= 19 && edad <= 30) {
        console.log("xoven.");
    } else if (edad >= 31 && edad <= 64) {
        console.log("adulto.");
    } else if (edad >= 65 && edad <= 100) {
        console.log("xubilado");
    } else {
        console.log("ERROR, edad no contemplada");
    }
} else {
    console.log("ERROR, entrada no válida");
}

// Parte 3: no lo entendí, pido disculpas por no hacer la consulta a tiempo.
