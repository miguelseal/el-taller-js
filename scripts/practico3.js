const SEPARATOR = "*******************";
// FOR ex.
let n, m, lowest, phrase, vocals, result, isPrime, msg, factorial, token, counter; // Variables utilizadas
let multiploDeCuatroMsg, multiploDeNueveMsg, K; // Utilizadas en ej. 10
const H2 = document.getElementById('ex');
const P = document.getElementById('out');

//Ej.1
n = parseInt(prompt('FOR 1 - Contador natural: Ingrese un entero positivo'));

for (let i = 1; i <= n; i++)
    console.log(i);  

console.log(SEPARATOR);

//Ej.2
n = parseInt(prompt('FOR 2 - Step 2: Ingrese un entero positivo'));

for (let i = 1; i <= n; i+=2)
    console.log(i);

console.log(SEPARATOR);

//Ej.3 Factorial n

factorial = 1;

for (let i = parseInt(prompt('FOR 3 - Factorial: Ingrese un entero positivo')); i > 0; i--)
    factorial *= i;  

console.log(factorial);
console.log(SEPARATOR);

//Ej.4 Divisores
n = parseInt(prompt('FOR 4 - Divisores: Ingrese un entero'));

for (let i = n; i > 0; i--) {
    if (n % i === 0)
        console.log(i); 
}

console.log(SEPARATOR);

//Ej.5 2 Divisores Comunes

n = parseInt(prompt('FOR 5 - Divisores Comunes: Ingrese un entero positivo'));
m = lowest = parseInt(prompt('Ingrese otro entero positivo'));

if (n < lowest)
    lowest = n;

for (let i = lowest; i > 0; i--) {
    if (m % i === 0 && n % i === 0)
        console.log(i);
}

console.log(SEPARATOR);

//Ej.6 Vocales.
phrase = prompt('FOR 6 - Vocales en frase: Escribe una frase').toLowerCase();
vocals = ['a', 'e', 'i', 'o', 'u'];
result = [];

for (let i = 0; i < phrase.length; i++) {
    if (vocals.includes(phrase[i]) && !result.includes(phrase[i]))
        result.push(phrase[i]);
}

console.log(result.sort());
console.log(SEPARATOR);

//Ej.7 Numero primo
isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0)
            return 'no es primo';
    }
    return 'es primo';
}

n = [];
result = [];
n.push(parseInt(prompt('FOR 7 - Numeros primo?: Escribe un entero positivo')));
n.push(parseInt(prompt('Escribe otro entero positivo')));

for (let i = 0; i < n.length; i++)
    result.push(isPrime(n[i]));

msg = `El número ${n[0]} ${result[0]}.\nEl número ${n[1]} ${result[1]}.`;
console.log(msg);
console.log(SEPARATOR);




//Ejercicio 8 - Mostrar numeros de N a 1, step 1.
n = parseInt(prompt('FOR 8: Ingrese un entero'));

for (let i = n; i > 0; i-- )
    console.log(i);

console.log(SEPARATOR);

//Ejercicio 9 - Escribir tabla del 9.
console.log('Ejercicio FOR 9: Tabla del 9');

for (let i = 1; i <= 10; i++)
    console.log(`${String(i)} x 9 = ${String(i*9)}`);

console.log(SEPARATOR);

//Ejercicio 10 - 1 a 50 con multiplos de 4 y 9.
H2.innerHTML = 'Ejercicio FOR 10: Múltiplos de 4 y 9.';
K = 50;
multiploDeCuatroMsg = '(Múltiplo de 4)';
multiploDeNueveMsg = '(Múltiplo de 9)';


for (let i = 1; i <= K; i++) {
    msg = '';
    //Line horizontal.
    if (i % 5 === 0) {
        document.write('<hr class="hide-later">');
        continue; // Para que no se ejecute el doc.write final.
    } else if (i % 4 === 0) {
        msg = multiploDeCuatroMsg;    
    } else if (i % 9 === 0) 
        msg = multiploDeNueveMsg;

    document.write(`<p class="hide-later">${String(i)} ${msg}</p>`);   
}

//Ejercicio 11 - Agrega '-' en cada caracter de un string. Esta en consola.

phrase = prompt('FOR 11: Escribe un string').toUpperCase();
token = '-';
result = '';

for (let i = 0; i < phrase.length; i++) {
    i < phrase.length - 1 ?
        result += phrase.charAt(i) + token:
        result += phrase.charAt(i);
}

console.log(result);
console.log(SEPARATOR);

//Ejercicios WHILE;
//1-1
counter = 0
n = parseInt(prompt('WHILE 1 - Contador natural: Ingrese un entero positivo'));

while (counter < n)
    console.log(++counter);

console.log(SEPARATOR);

//1-2
counter = 1;
n = parseInt(prompt('WHILE 2 - Step 2: Ingrese un entero positivo'));

while (counter <= n) {
    console.log(counter);
    counter += 2;
}

console.log(SEPARATOR);

//1-3
factorial = 1;
n = parseInt(prompt('WHILE 3 - Factorial: Ingrese un entero positivo'));

while (n > 1)
    factorial *= n--;

console.log(factorial);
console.log(SEPARATOR);

//1-4
counter = 1;
n = parseInt(prompt('WHILE 4 - Divisores: Ingrese un entero positivo'));

while (counter <= n) {
    if (n % counter === 0)
        console.log(counter);
    counter++;
}

console.log(SEPARATOR);

//1-5
counter = 1;
n = parseInt(prompt('WHILE 5 - Divisores Comunes: Ingrese un entero positovo'));
m = parseInt(prompt('Ingrese otro entero positivo'));

lowest = Math.min(n,m);

while (counter <= lowest) {
    if (n % counter === 0 && m % counter === 0)
        console.log(counter);
    counter++;
}

console.log(SEPARATOR);

//1-6
phrase = prompt('WHILE 6 - Vocales en frase: Escribe una frase').toLowerCase();
vocals = ['a', 'e', 'i', 'o', 'u'];
result = [];
counter = 0;

while (counter < phrase.length) {
    if (vocals.includes(phrase[counter]) && !result.includes(phrase[counter]))
        result.push(phrase[counter]);
    counter++;
}
console.log(result.sort());
console.log(SEPARATOR);

//1-7
isPrime = function(number) {
    let counter = 2;

    while (counter < number) {
        if (number % counter === 0)
            return 'no es primo';
        counter++;
    }

    return 'es primo';
}

counter = 0;
n = [];
result = [];
n.push(parseInt(prompt('WHILE 7 - Numeros primo?: Escribe un entero positivo')));
n.push(parseInt(prompt('Escribe otro entero positivo')));

while (counter < n.length)
    result.push(isPrime(n[counter++]));

msg = `El número ${n[0]} ${result[0]}.\nEl número ${n[1]} ${result[1]}.`;
console.log(msg);
console.log(SEPARATOR);

1-8
n = counter = parseInt(prompt('WHILE 8 - Numeros descendentes: Escribe un entero positivo'));

while (counter > 0)
    console.log(counter--);

console.log(SEPARATOR);

//1-9 - tabla del 9
console.log('Ejercicio WHILE 9: Tabla del 9');
counter = 1;

while (counter <= 10) {
    console.log(`${String(counter)} x 9 = ${String(counter*9)}`);
    counter++;
}

console.log(SEPARATOR);

//1-10 1 a 50 con multiplos de 4 y 9.
H2.innerHTML = 'Ejercicio WHILE 10: Múltiplos de 4 y 9.';
K = 50;
counter = 1;
multiploDeCuatroMsg = '(Múltiplo de 4)';
multiploDeNueveMsg = '(Múltiplo de 9)';

while (counter <= K) {
    msg = '';
    //Line horizontal.
    if (counter % 5 === 0) {
        document.write('<hr class="hide-later">');
        counter++;
        continue; // Para que no se ejecute el doc.write final.
        
    } else if (counter % 4 === 0) {
        msg = multiploDeCuatroMsg;
        
    } else if (counter % 9 === 0) {
        msg = multiploDeNueveMsg;
    }
    document.write(`<p class="hide-later">${String(counter++)} ${msg}</p>`);   
}

//1-11 - Agrega '-' en cada caracter de un string. Esta en consola.

phrase = prompt('FOR 11: Escribe un string').toUpperCase();
token = '-';
result = '';
counter = 0;

while (counter < phrase.length) {
    counter < phrase.length - 1 ?
        result += phrase.charAt(counter++) + token:
        result += phrase.charAt(counter++);
}

console.log(result);
console.log(SEPARATOR);

// 2 - Media aritmetica de numeros
let totalizer = 0;
let inputCounter = 0;
let userInput; // float or int
let avg;

do {
    userInput = Number(prompt('WHILE 2-Promedio : Ingresa un numero (0 para terminar)'));

    if (userInput === 0)
        break;

    totalizer += userInput;
    inputCounter += 1;
    
} while (userInput !== 0)

avg = totalizer / inputCounter;
alert(`Media Aritmetica de los numeros ingresados: ${String(avg)}`);

//3 Pedir cadenas de phrase hasta que se pulsa cancelar, concatenarlas con un guión.
let inputText, outputText = '';

while (inputText !== null) {
    inputText = prompt('WHILE 3: Ingrese un string');

    if (inputText !== null)
        outputText += `${inputText}-`;
    else
        outputText = outputText.slice(0, -1);
}

console.log(outputText);    
console.log(SEPARATOR);

//Ejercicio Bucle anidado 1. Piramide de numeros.
//En consola
let i, j, fila;
K = 30;

for (i = 1; i <= K; i++) {
    fila = '';

    for (j = 0; j < i; j++)
        fila += i; // implicit casting

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
    phrase = tokenFicha;

    for (colCounter = 1; colCounter <= rowCounter; colCounter++)
        phrase += ` ${token1}${rowCounter}${token2}${colCounter}${token1}`;

    console.log(phrase);
}

console.log(SEPARATOR);