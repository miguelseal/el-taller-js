// Ejercicio 1 - Pi con redondeo de 2 decimales
let pi2Dec = () => Number(Math.PI.toFixed(2));

//Ejercicio 2 - Calcular total con iva
let ticket = (sub_total, iva = 21) => sub_total + iva / 100 * sub_total;

//Ejercicio 3 - Reverse string
function reverseString(string) {
    let stringReversed = '';

    for (let i = string.length - 1; i >= 0; i--) {
        stringReversed += string[i];
    }

    return(stringReversed);
}

//Ejercicio 4 - Par o Impar
let evenOdd = (int) => {
    if (int % 2 === 0) 
        return 'Par';
    else
        return 'Impar';
}

let userInput = parseInt(prompt('4-Ingrese un entero'));
alert(`El numero ingresado es: ${evenOdd(userInput)}`);

//Ejercicio 5 - 2 valores para sumar
let sumar = (num_1, num_2) => num_1 + num_2;

//Ejercicio 6 - error check
let checkNum = function (num) {
    if (parseInt(num) !== parseFloat(num))
        return 'Error';
}

//Ejercicio 7 - string length
let sizeOfString = (string) => string.length;

//Ejercicio 8 - Operaciones matematicas basicas
function doMathOperation(num_1, num_2, operator = '+') {
    /* 
    toma dos numeros y opera con un operador ingresado por el usuario como string. Si no se ingresa operador, los numeros se suman.
    Operadores permitidos: '+', '-', '*', '/', '**'
    */
    switch(operator) {
        case '+':
            return num_1 + num_2;
        case '-':
            return num_1 - num_2;
        case '*':
            return num_1 * num_2;
        case '/':
            return num_1 / num_2;
        case '**':
            return num_1 ** num_2;
   }
}