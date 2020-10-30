// Variables
let userInput, workingArray, result;

/**
 * Usuario ingresa items separados por coma mediante un popup, se deben convertir en un array.
 **/
result = [];
userInput = prompt('Ingrese palabras separadas por coma (,))');
workingArray = userInput.split(',');

console.log(workingArray);

workingArray.forEach(item => {
    result.push(item.trim());
});

console.log(result);

