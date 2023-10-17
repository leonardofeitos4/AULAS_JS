function criaPessoa(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('leonard', 'feitosa', 19);
const pessoa2 = criaPessoa('livia', 'feitosa', 19);
console.log(pessoa2.nome, pessoa2.idade)