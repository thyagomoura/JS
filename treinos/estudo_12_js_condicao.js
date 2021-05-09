//receber hora da maquina ou do local em que esta sendo executado(servidor)
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora sao exatamente ${hora} horas.`)
//condições aninhadas de if e else
if(hora < 12){
    console.log('Bom dia!')
}else if(hora <=18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}

//condiçoes de escolha caso
var agora = new Date()
var diaSem = agora.getDay()

/*
Dias da semana em js:
0 domingo
1 segunda
2 terça
3 quarta
4 quinta
5 sexta
6 sabado
*/

switch (diaSem) {
    case 0:
        console.log('Bom Domingo')
        break;

    case 1:
        console.log('Boa Segunda!')
        break
    case 2:
        console.log('Boa Terça!')
        break
    case 3:
        console.log('Boa Quarta!')
        break
    case 4:
        console.log('Boa Quinta!')
        break
    case 5:
        console.log('Boa Sexta!')
        break
    case 6:
        console.log('Bom Sabado!')
        break
    default:
        console.log('[ERRO] Dia não encontrado.')
        break;
}