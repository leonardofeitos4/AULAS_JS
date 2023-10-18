/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'LEONARDO',
    sobrenome: 'FEITOSA'
  };
  const b = {...a}; //copiou o valor de A mas nao alterou o B
  
  b.nome = 'João'; //trocou a variavel nome, mas nao alterou do A
  console.log(a);
  console.log(b);

let d = [1,2,3];
let e = [...d]; //copiando o valor de D
let f = e
