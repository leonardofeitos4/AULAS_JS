let umaString = " um \"texto\"";
let umString = 'leonardo feitosa leonardo'
console.log(umaString);
console.log(umaString.charAt(4));
console.log(umaString.concat('em', 'um', 'lindo')); //acrescentar algo na variavel 
console.log(umaString[4]);
console.log(umaString.indexOf('texto')); // pegar a palavra texto
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.match(/[a-z]/g)); //expressao regular
console.log(umaString.search(/x/)); //falar onde ta o indece
console.log(umaString.replace('um','O')); //Mudar o ''um''

console.log(umString.replace(/l/g, 'G')); //mudar todas as letras L para G
console.log(umString.length); // saber o tamanho
console.log(umString.slice(2,5));//pegar do indice 2 ao 4
console.log(umString.split(' ',' 3'));
console.log(umString.toUpperCase());
console.log(umString.toLowerCase());
