const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toDateString();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
  
    switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda-feira';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'Terça-feira';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta-feira';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta-feira';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta-feira';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto;
    }
  }

h1.innerHTML = getDiaSemanaTexto(data.getDay())  

function getNomeMes(numeroMes) {
    let nomesMes;
  
    switch (numeroMes) {
    case 0:
        nomesMes = 'Janeiro';
        return nomesMes;
    case 1:
        nomesMes = 'Fevereiro';
        return nomesMes;
    case 2:
        nomesMes = 'Março';
        return nomesMes;
    case 3:
      nomesMes = 'Abril';
      return nomesMes;
    case 4:
      nomesMes = 'Maio';
      return nomesMes;
    case 5:
      nomesMes = 'Junho';
      return nomesMes;
    case 6:
      nomesMes = 'Julho';
      return nomesMes;
    case 7:
        nomesMes = 'Agosto';
        return nomesMes;
    case 8:
      nomesMes = 'Setembro';
      return nomesMes;
    case 9:
      nomesMes = 'Outubro';
      return nomesMes;  
    case 10:
        nomesMes = 'Novembro';
        return nomesMes;  
    case 11:
        nomesMes = 'Dezembro';
        return nomesMes;  
    default:
    nomesMes = '';
   return nomesMes;
    }
}

function zeroAEsquerda (num){
    return num >= 10? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    console.log(nomeDia,nomeMes)

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} `+ 
    `Horario: ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    ); 
    
   
}
h1.innerHTML = criaData(data);
