
let num1 = 0.7; // number
let num2 = 0.1; // number

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2)); 

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));


// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2)); representação binaria
// console.log(num1.toFixed(2)); quantas casas decimas quero deixar
// console.log(Number.isInteger(num1)); saber se é inteiro = false ou true
// console.log(Number.isNaN(temp)); saber se é conta invalidade TRUE OU FALSE
// let temp = num1 + '5';
// console.log(temp);