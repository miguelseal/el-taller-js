const SEPARATOR = "*******************";
// FOR ex.
let n, m; // Numero enteros que ingresa el usuario para los ejercicios
const H2 = document.getElementById('ex');
const P = document.getElementById('out');
// //Ej.1
n = parseInt(prompt('1-Ingrese un entero'));

for (let i = 1; i <= n; i++) {
    console.log(i);
    
}

console.log(SEPARATOR);

//Ej.2
n = parseInt(prompt('2-Ingrese un entero'));

for (let i = 1; i <= n; i+=2) {
    console.log(i);
}

console.log(SEPARATOR);

//Ej.3 Factorial n

let factorial = 1;

for (let i = parseInt(prompt('3-Ingrese un entero')); i > 0; i--) {
    factorial *= i;  
}

console.log(factorial);
console.log(SEPARATOR);

//Ej.4 Divisores
n = parseInt(prompt('4-Ingrese un entero'));

for (let i = n; i > 0; i--) {
    if (n % i === 0) {
        console.log(i);
    }   
}

console.log(SEPARATOR);

//Ej.5 2 Divisores
n = parseInt(prompt('5-Ingrese un entero'));
m = lowest = parseInt(prompt('Ingrese otro entero'));

if (n < lowest) {
    lowest = n;
}

for (let i = lowest; i > 0; i--) {
    if (m % i === 0 && n % i === 0) {
        console.log(i);
    }
}

console.log(SEPARATOR);

//Ej.6 Vocales.
let phrase = prompt('6-Escribe una frase').toLowerCase();
let vocals = ['a', 'e', 'i', 'o', 'u'];
let result = [];

for (let i = 0; i < phrase.length; i++) {
    if (vocals.includes(phrase[i]) && !result.includes(phrase[i])) {
        result.push(phrase[i]);
    }
}

console.log(result.sort());
console.log(SEPARATOR);

//Ej.7 Numero primo
n = parseInt(prompt('7-Escribe un entero'));
msg = 'Primo';

for (let i = 2; i < n; i++) {

    if (n % i === 0) {
        msg = 'No primo';
    } else {
        continue;
    }
}
console.log(msg);

console.log(SEPARATOR);

//Ejercicio 8 - Mostrar numeros de N a 1, step 1.
n = parseInt(prompt('8-Ingrese un entero'));

for (let i = n; i > 0; i-- ) {
    console.log(i);
}

console.log(SEPARATOR);

//Ejercicio 9 - Escribir tabla del 9.
console.log('Ejercicio 9-Tabla del 9');

for (let i = 1; i <= 10; i++) {
    
    console.log(`${String(i)} x 9 = ${String(i*9)}`);
}

console.log(SEPARATOR);

//Ejercicio 10 - 1 a 50 con multiplos de 4 y 9.
H2.innerHTML = 'Ejercicio 10';
let K = 50;
let multiploDeCuatroMsg = '(Múltiplo de 4)';
let multiploDeNueveMsg = '(Múltiplo de 9)';


for (let i = 1; i <= K; i++) {
    let msg = '';
    //Line horizontal.
    if (i % 5 === 0) {
        document.write('<hr class="hide-later">');
        continue; // Para que no se ejecute el doc.write final.
    } else if (i % 4 === 0) {
        msg = multiploDeCuatroMsg;
        
    } else if (i % 9 === 0) {
        msg = multiploDeNueveMsg;
    }
    document.write(`<p class="hide-later">${String(i)} ${msg}</p>`);   
}

console.log(SEPARATOR);


//Ejercicio 11 - Agrega '-' en cada caracter de un string. Esta en consola.

let texto = prompt('Escribe un string').toUpperCase();
let token = '-';
let resultado = '';

for (let i = 0; i < texto.length; i++) {
    i < texto.length - 1 ?
        resultado += texto.charAt(i) + token:
        resultado += texto.charAt(i);
}

console.log(resultado);

console.log(SEPARATOR);

//Ejercicios WHILE;
//1-1
//1-2
//1-3
//1-4
//1-5
//1-6
//1-7
//1-8
//1-9
//1-10
//1-11


// 2 - Media aritmetica de numeros
let totalizer = 0;
let inputCounter = 0;
let userInput; // float or int
let avg;

do {
    userInput = Number(prompt('WHILE 2-Promedio : Ingresa un numero (0 para terminar)'));

    if (userInput === 0) { break; }

    totalizer += userInput;
    inputCounter += 1;
    //for debugging:
    console.log(userInput, inputCounter, totalizer);
} while (userInput !== 0)

avg = totalizer / inputCounter;
alert(`Media Aritmetica de los numeros ingresados: ${String(avg)}`);

//3












//Ejercicio Bucle anidado 1. Piramide de numeros.
//En consola
let i, j, fila;
K = 30;

for (i = 1; i <= K; i++) {
    fila = '';

    for (j = 0; j < i; j++) {
        fila += i; // implicit casting
    }

    console.log(fila);
}

console.log(SEPARATOR);

//Ejercicio Bucle anidado 2 - tabla de filas y columnas
let rows, cols, numberToDisplay, rowDisplay;

rows = parseInt(prompt('BA-2 : Escriba numero de filas'));
cols = parseInt(prompt('BA-2 : Escriba numero de columnas'));
numberToDisplay = rows * cols;

for (let i = 1; i <= rows; i++) {
    rowDisplay = '';

    for (let j = 1; j <= cols; j++) {
        rowDisplay += `${String(numberToDisplay)} `;
        numberToDisplay --;
    }
    console.log(rowDisplay);
}

console.log(SEPARATOR);

//Ejercicio Bucle anidado 3 -. Piramide de cosas raras. En consola
let rowCounter, colCounter, tokenFicha, token1, token2;
K = 6;

tokenFicha = 'Ficha:';
token1 = '|';
token2 = ':';

for (rowCounter = 1; rowCounter <= K; rowCounter++) {
    texto = tokenFicha;

    for (colCounter = 1; colCounter <= rowCounter; colCounter++) {
        texto += ` ${token1}${rowCounter}${token2}${colCounter}${token1}`;
    }

    console.log(texto);
}

console.log(SEPARATOR);