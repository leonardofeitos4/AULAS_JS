function soma(x,y) {
    const resultado = x + y;
    return resultado
    //apos return, nada mais aparece no print
}

console.log(soma(2,3));
console.log(soma(3,3));

function soma1(x = 1,y = 3) {
    const resultado = x + y;
    return resultado
    //apos return, nada mais aparece no print
}
console.log(soma1());


const raiz = function(n) {
    return n ** 0.5
};

console.log(raiz(64))


const raiz1 = (n) => n * 0.5; //função menor

console.log(9)