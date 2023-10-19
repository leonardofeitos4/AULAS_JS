                    //ano,mes,dia,hora,minutos,segundos 
// const data = new Date(2023, 9, 19, 18,   28      ,10);
// console.log(data.toString())


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`; //se numero for maior ou igual a 10 ela retorna o numero
    //o contrario disso ela retorna o 0 a esquerda do numero
  }
  
  function formataData(data) {
    const dia = zeroAEsquerda(data.getDate()); //obtem o numero do dia 
    const mes = zeroAEsquerda(data.getMonth() + 1); //o mes
    const ano = zeroAEsquerda(data.getFullYear()); //ano
    const hora = zeroAEsquerda(data.getHours()); //horas
    const min = zeroAEsquerda(data.getMinutes()); //minutos
    const seg = zeroAEsquerda(data.getSeconds()); //segundos
  
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
  }
  
  const data = new Date();
  const dataBrasil = formataData(data);
  console.log(dataBrasil);