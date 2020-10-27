/*********************************
 * PRACTICO 1
 ********************************/

// Handlers
const H2 = document.getElementById('ex');
const P = document.getElementById('out');

/*
1)Añadir javascript cómo archivo externo y mostrar un mensaje con
alert diciendo ‘Hola mundo desde js externo’.
*/

H2.innerHTML = 'P1-E1';
alert('Hola mundo desde js externo');

/*
2)Calcular la suma de dos números enteros positivos y mostrar el
resultado.
*/
H2.innerHTML = 'P1-E2';

let num1 = 38;
let num2 = 35;
let sum = num1 + num2;

P.innerHTML = `${String(num1)} + ${String(num2)} = ${String(sum)}`;

console.log(sum);
alert('Continuar'); // Para que se vean los resultados

/*
3)Mostrar por un alert , mostrar el siguiente mensaje ‘Hola Mundo
desde Javascript !’ y luego en otro alert el siguiente mensaje ‘Hola
tengo : $variable’ , en $variable debemos concatenar una variable
que sea un número.
*/
H2.innerHTML = 'P1-E3';
P.innerHTML = '';
alert('Hola Mundo desde Javascript !');
alert(`Hola tengo : ${String(num1)}`);

/*
4)Calcular si un número es par o impar , y luego mostrar el
resultado en consola .Esto se tiene que implementar con una
variable inicial un número que sea par
*/
H2.innerHTML = 'P1-E4';
P.innerHTML = 'Ver consola';

let odd = num1 % 2; // 0 (even).

odd === 0 ? console.log('Par') : console.log('Impar');

alert('Continuar');


/*
5)Calcular la multiplicación de tres variables de tipo número
*/
H2.innerHTML = 'P1-E5';
P.innerHTML = 'Ver consola';

let num3 = 31;
let product = num1 * num2 * num3;

console.log(product);
alert('Continuar');

/*
6)Utilizando ahora document.write escribir el siguiente texto:
Hola me llamo $Nombre , tengo $edad años
Me gusta estudiar programación
*/
H2.innerHTML = 'P1-E6';
P.innerHTML = '';

let myName = 'Fernando';

document.write(`<p class="remove-later">Hola me llamo ${String(myName)}, tengo ${String(num1)} años</p><hr class="remove-later"><p class="remove-later">Me gusta estudiar <strong>programación</strong></p>`); //La clase es para poder borrarlos luego con JS.

alert('Continuar al Práctico 2');








/*********************************
 * PRACTICO 2
 ********************************/

/*
1)Se solicita el área de un círculo , sabiendo que el radio es 10 m(se debe de convertir a cm ).

Realiza con javascript el cálculo del área y además muestre un mensaje en pantalla (alert o writeln). Para el valor de Pi, se debe de usar la siguiente línea : const pi = 3.14;
*/

H2.innerHTML = 'P2-E1';

//Primero vamos a "borrar" el document.write del ultimo ejercicio...
let myArrayHandler = document.getElementsByClassName('remove-later');

for (let i = 0; i < myArrayHandler.length; i++) {
    myArrayHandler[i].style.display = 'none';
}

//Ahora encaramos el ejercicio
const PI = 3.14;
const CIRCLE_RADIUS = 10 * 100; //conv. cm.

let circleArea = PI * CIRCLE_RADIUS ** 2;

P.innerHTML = `El área del círculo de radio ${String(CIRCLE_RADIUS)} cm., es: ${String(circleArea)} cm. cuadrados. PI ${String(PI)}.`;

alert('Continuar');

/*
2) Se debe calcular la suma de dos variables ingresadas por el usuario por medio del prompt 'Escribe un número'. Mostrarel resultado en pantalla.
*/
H2.innerHTML = 'P2-E2';
P.innerHTML = '';

// num1, num2, sum, ya estaban inicializados
num1 = parseInt(prompt('Escribe un número'));
num2 = parseInt(prompt('Escribe otro número'));

sum = num1 + num2;

P.innerHTML = `La suma de ${String(num1)} y ${String(num2)} es: ${String(sum)}.`;

alert('Continuar');

/*
3) Escribe un programa que pida dos numeros y escriba en la pantalla el mayor.
*/
H2.innerHTML = 'P2-E3';
P.innerHTML = '';

let greatestNumber;

num1 = parseInt(prompt('Escribe un número'));
greatestNumber = num1;
num1 = parseInt(prompt('Escribe otro número'));

if (num1 > greatestNumber) {
    greatestNumber = num1;
}

P.innerHTML = `Mayor: ${String(greatestNumber)}`;

alert('Continuar');

/*
4) Escribe un programa que pida tres numeros y escriba en la pantalla el mayor.
*/

H2.innerHTML = 'P2-E4';
P.innerHTML = '';

num1 = greatestNumber = parseInt(prompt('Escribe un número'));

for (i = 0; i < 2; i++) {
    num1 = parseInt(prompt('Escribe otro número'));
    
    if (num1 > greatestNumber) {
        greatestNumber = num1;
    }
}

P.innerHTML = `Mayor: ${String(greatestNumber)}`;
alert('Continuar');

/*
5) Escribe un programa que pida un numero y diga si es divisible entre 2.
*/

H2.innerHTML = 'P2-E5';
P.innerHTML = '';

num1 = parseInt(prompt('Escribe un número entero'));

(num1 % 2 === 0) ? P.innerHTML = `2 SI divide a ${String(num1)}.` : P.innerHTML = `2 NO divide a ${String(num1)}.`;

alert('Continuar');
/*
6)Escribe un programa que responda a un usuario el total de su compra
dependiendo que tipo de helado selecciono.
El helado de oreo cuesta 1 pesos.
El helado de KitKat cuesta 1.50 pesos.
El helado de brownie cuesta 0.75 pesos.
El helado de Menta Granizada cuesta 0.95 pesos.
En caso de seleccionar un helado que no esté en la lista ,mostrar el
mensaje de ‘No existe este helado' .Luego informar del precio del helado.
*/
H2.innerHTML = 'P2-E6';
P.innerHTML = '';

const ICE_CREAM_PRICES = [1.00, 1.50, .75, .95];

let clientChoice = parseInt(prompt("Elige tu helado:\n\n1-Oreo\n2-KitKat\n3-Brownie\n4-Menta Granizada")) - 1; //choice = array index
let price = ICE_CREAM_PRICES[clientChoice];

(price === undefined || price < 0 || price > ICE_CREAM_PRICES.length) ? //
    P.innerHTML = 'No existe este helado': 
    P.innerHTML = `Precio a pagar: ${String(price)}.`;

alert('Continuar');

/*
7)Escribe un programa que pregunte al usuario si es culpable o no.
Usando prompt(). Asumimos que:
En caso afirmativo el usuario responderá si
En caso contrario responderá no.
Si el usuario responde si se escribirá por el documento «irás a la cárcel».
Si el usuario responde no se escribirá por el documento web «irás a casa».
En cualquier caso, en el documento web se escribirá «la documentación
por favor».
*/
H2.innerHTML = 'P2-E7';
P.innerHTML = '';

let userGuilty = prompt("Eres culpable? (si/no)").toLocaleLowerCase();

switch(userGuilty) {
    case 'no':
        P.innerHTML = 'Irás a casa';
        break;
    case 'si':
        P.innerHTML = 'Irás a la cárcel';
        break;
}

document.write('<p class="remove-later">La documentación por favor</p>');
alert('Continuar');

myArrayHandler[3].style.display = 'none'; // quita del html el ultimo doc.write, viene del principio del practico 2

/*
8)Utilizar el Operador Ternario para realizar el siguiente ejercicio
Escriba un programa que pida una edad y diga si es mayor o no de 18
años (considero > 18, sin tener en cuenta que es mayor de edad (18 cumplidos))
*/
H2.innerHTML = 'P2-E8';
P.innerHTML = '';

let userAge = parseInt(prompt('Que edad tienes?'));

userAge > 18 ? P.innerHTML = 'Estrictamente mayor a 18': P.innerHTML = 'No estrictamente mayor que 18';

alert('Continuar');

/*
9)Utilizar el operador SWITCH para realizar el ejercicio 6
*/ 

H2.innerHTML = 'P2-E9';
P.innerHTML = '';

// Utilizamos variables anteriores: ICE_CREAM_PRICES array, clientChoice, price
clientChoice = parseInt(prompt("Elige tu helado:\n\n1-Oreo\n2-KitKat\n3-Brownie\n4-Menta Granizada"));

switch (clientChoice) {
    case 1: 
        price = ICE_CREAM_PRICES[0];
        P.innerHTML = `Precio a pagar: ${String(price)}.`;
        break;
    case 2: 
        price = ICE_CREAM_PRICES[1];
        P.innerHTML = `Precio a pagar: ${String(price)}.`;
        break;
    case 3: 
        price = ICE_CREAM_PRICES[2];
        P.innerHTML = `Precio a pagar: ${String(price)}.`;
        break;
    case 4: 
        price = ICE_CREAM_PRICES[3];
        P.innerHTML = `Precio a pagar: ${String(price)}.`;
        break;
    default:
        P.innerHTML = 'No existe ese helado.';
}

alert('Continuar');

/*
10) Escribe un programa que pida el nombre y edad del usuario , si el
nombre es igual a ‘Test’ y además es mayor a 18 años , mostrar un
mensaje que diga ‘Hola usuario Test’.
*/
H2.innerHTML = 'P2-E10';
P.innerHTML = '';

let userName = prompt('Nombre:');
userAge = parseInt(prompt('Edad:'));

if (userName === 'Test' && userAge >= 18 ) {
    P.innerHTML = `Hola usuario ${String(userName)}`;
}
alert('Continuar');




/*
11) Escribe un programa que pida el valor de un pago de una cuenta y
dependiendo de los datos ,realizar las diferentes acciones :
Si el monto ingresado es mayor que 100 pesos y paga con tarjeta de
crédito , mostrar un mensaje que diga ‘Gracias por pagar con crédito ’
Si el monto es mayor que 100 pesos y no paga con tarjeta de crédito ,
mostrar un mensaje que diga ‘Gracias por pagar con efectivo’.
Si el monto es menor que 100 pesos , mostrar un mensaje que diga ‘Lo
siento no puedes pagar esta cuenta’.
Para saber si pago con tarjeta de crédito o no, se es necesario utilizar un
Boolean
 */
H2.innerHTML = 'P2-E11';
P.innerHTML = '';

// Out Msgs.
const CREDIT_SUCCESS = 'Gracias por pagar con crédito';
const CASH_SUCCESS = 'Gracias por pagar con efectivo';
const FAIL = 'Lo siento, no puedes pagar esta cuenta';

// Variables
let amount, payMethodCredit;

amount = parseInt(prompt('Monto a pagar:'));

// Utilizo >= como valido, se chequea ingreso invalido NaN en monto.
amount < 100 || isNaN(amount) ? alert(FAIL): payMethodCredit = parseInt(prompt('Método de pago:\n1-Tarjeta de Crédito\n2-Efectivo'));

switch (payMethodCredit) { // Boolean requested.
    case 1:
        payMethodCredit = true;
        P.innerHTML = CREDIT_SUCCESS;
        break;
    case 2:
        payMethodCredit = false;
        P.innerHTML = CASH_SUCCESS;
        break;
    default:
        alert(FAIL);
}

document.write('<p><a href="practico3.html">Ir al Practico 3</a></p>');