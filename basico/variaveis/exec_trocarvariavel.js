let varA = 'A';
let varB = 'B';
let varC = 'C';

/*

basico

const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;

*/

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);