// Ejercicio 1
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
    even = true;
} else {
    even = false;
}

console.log(even);

// Ejercicio 5
var num3 = 12; // los otros ya estan desde el ejercicio 2

var product = num1 * num2 * num3;
console.log(product);

//Ejercicio 6
var name = "Fernando";
var age = 38;

document.write("<p>Hola, me llamo " + name + ", tengo " + age + " años.</p>");
document.write("<p>Me gusta estudiar <strong>programación</strong>.</p>");