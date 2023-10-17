//               0       1        2          3      4
let alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo 
alunos = 123;

console.log(typeof alunos);
console.log(alunos instanceof Array);

// alunos.push('Luiza');  adicionando
// alunos.push('Eduardo');

// console.log(alunos.slice(0, -2)); pegar do elemento 0 ao -2

// console.log(alunos[50]); acessar indice que nao existe = undefined

// delete alunos[1]; deleta o texto do indice 1 e fica VAZIO
// console.log(alunos[1]);

// const removido = alunos.shift(); remove do começo e pop() remove do final
// console.log(removido);
// console.log(alunos);

// alunos.unshift('Fábio'); // Adiciona no começo
// alunos.unshift('Luiza');


// alunos.push('Luiza'); // Adiciona no fim
// alunos.push('Fábio');

// alunos[alunos.length] = 'Luiza';  // Adiciona no fim
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// alunos[0] = 'Eduardo'; // Altera
// alunos[3] = 'Luiza'; // Adicionando

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);