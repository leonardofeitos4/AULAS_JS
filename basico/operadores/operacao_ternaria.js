// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usario VIP' : 'Usurário normal';
console.log(nivelUsuario);

const corUsuario = null; 
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao)