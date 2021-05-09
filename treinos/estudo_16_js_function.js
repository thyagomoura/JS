function parImpar(n){
    if(n%2 ==0){
        return 'Par'
    } else{
        return 'Impar!'
    }
}

var res = parImpar(8)
console.log(res)

//segunda funçao
function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(8))

//terceira funçao
let v = function(x){
    return x*2
}
console.log(v(5))

//quarta funçao
function fatorial(n){
    var fat = 1
    for(let c=n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//quinta funçao
function fatorial_2(n){
    if(n==1){
        return 1
    }else{
        return n*fatorial_2(n-1)
    }
}
console.log(fatorial_2(5))