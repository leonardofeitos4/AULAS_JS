/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
*/

function falarOi() {

    return 'oi';

}

const vaiExecutar = 'leonardo';

console.log(vaiExecutar && falarOi()) 

console.log( 0 || false || 'leonardo' || true) //retorna o primeiro valor verdadeiro

const cor = 'vermelho';
const corPadrao = cor || 'branco'

console.log(corPadrao)

