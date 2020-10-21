
/*******************************************
 * PRACTICO 1
 *******************************************/

// Ejercicio 1
document.write("<h2>Practico 1</h2>");
alert("Hola Mundo desde js externo");

// Ejercicio 2
var num1 = 6;
var num2 = 9;

var sum = num1 + num2;

console.log(sum);

// Ejercicio 3
alert("Hola Mundo desde Javascript");
alert("Hola, tengo " + num1);

// Ejercicio 4
var even = null;

if (num1 % 2 === 0) {
    even = "Par"
} else {
    even = "Impar";
}

console.log(even);

// Ejercicio 5
var num3 = 12; // los otros ya estan desde el ejercicio 2

var product = num1 * num2 * num3;
console.log(product);

//Ejercicio 6
var name = "Fernando";
var age = 38;

document.write("<p>Hola, me llamo ", name, ", tengo ", age, " años.</p><hr>");
document.write("<p>Me gusta estudiar <strong>programación</strong>.</p>");


/*******************************************
 * PRACTICO 2
 *******************************************/

//Ejercicio 1 (area del circulo)
document.write("<h2>Practico 2 - Ej 1.</h2>");

const PI = 3.14;
const RADIUS = 10 * 100; // convierto a cm.

// area = r^2 * PI
var area = RADIUS ** 2 * PI;

// Resultados:
document.write("<p>El area de un circulo de 10 mts de radio es: ", area, " cm.^2.</p>");


//Ejercicio 2 (suma de dos valores ingresados por el usuario)

document.write("<h2>Practico 2 - Ej 2.</h2>");

var num1 = parseInt(prompt("Escribe un numerito"));
var num2 = parseInt(prompt("Escribe otro numerito"));

// Calculando la suma y mostrando resultados en el doc.
var sum = num1 + num2;
document.write("<p>La suma de los dos numeros ingresados por Usted es: ", sum, ".</p>");


//Ejercicio 3 (Que numero es mayor?)
document.write("<h2>Practico 2 - Ej 3.</h2>");

var num1 = parseInt(prompt("Numero 1"));
var num2 = parseInt(prompt("Numero 2"));

if (num1 >= num2) {
    document.write("<p>El primer numero es <strong>mayor</strong> (o igual) que el segundo.</p>");
} else {
    document.write("<p>El segundo numero que ingresaste es <strong>mayor</strong>.</p>");
}


// Ejercicio 4 (Mayor de 3 numeros)
document.write("<h2>Practico 2 - Ej 4.</h2>");
var msg = "Ingresa un entero.";
var num, greatest;

num = parseInt(prompt(msg));
greatest = num;

for (var i = 0; i < 2; i++) {
    num = parseInt(prompt(msg));

    num > greatest ? greatest = num : num = undefined;
}

document.write("<p>El mayor numero de los 3 es: ", greatest, ".</p>");

//Ejercicio 5 (Divisible por 2).
document.write("<h2>Practico 2 - Ej 5.</h2>");


