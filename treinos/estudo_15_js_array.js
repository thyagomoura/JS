let num =[1, 2, 3,]

num.push(8)//acrescentar algo ao vetor
console.log(`Nosso vetor é ${num}`)
console.log(num.length)//ver quantos numeros tem no vetor
num.sort()//colocar em ordem crescente
console.log(num.sort())

for (let pos=0; pos < num.length; pos++) {
    console.log(num[pos])
    
}

//repetiçao para vetores
for(let pos in num){
    console.log(num[pos])    
}

num.indexOf(8)//pesquisar um valor
console.log(num.indexOf(8))