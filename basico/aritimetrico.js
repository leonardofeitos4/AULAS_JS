
let contador = 1;
contador++;
contador++;
contador++;
contador++;
console.log(contador)

let contador2 = 1;
console.log(++contador2)

let contador3 = 1;
// contador3++; ou contador3--
console.log(contador3++) // ver qual o valor do CONTADOR3

// operador de atribuição
let contador4 = 0
contador4 += 2;
contador4 += 2;
contador4 += 2;
console.log(contador4)

//NaN - Not a number
const num1 = 10;
const nume2 = parseInt('5'); //Transformar em inteiro.
const num3 = parseFloat('5.2')//parseFloat se tiver 5.2, ele remove o 2 e fica só o 5
const num4 = Number('Leonardo') //tenta converter isso em um numero
console.log(num1 + nume2);