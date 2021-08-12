function condition(a,b,c){
    let exp=(a>b && a>c)
    return exp;
}
let value=condition(30,20,10);
console.log(value);

function condition1(a,b,c){
    let exp=(a<b || a<c)
    return exp;
}
let value1=condition1(30,20,10);
console.log(value1);