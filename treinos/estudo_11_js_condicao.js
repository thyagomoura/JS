var idade = 67

if(idade<16){
    console.log('Menor de idade')
    console.log('Nao vota')
}else if(idade < 18 || idade > 65){
    console.log('Voto opcional')
    
}else{
    console.log('Maior de idade')
    console.log('Voto obrigatorio')
}