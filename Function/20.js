// function getFactorial(number){
//     var factorial=1;
//     let i=1;
//     while(i<=number){
//         factorial=factorial*i;
//         i++;
//     }
//     return factorial;
// }
// const myFactorial=getFactorial(5);
// console.log(myFactorial);

function getFactorial(number){
    var factorial=1;
    let i=number;
    while(i>=1){
        factorial=factorial*i;
        i--;
    }
    return factorial;
}

const myFactorial=getFactorial(5);
console.log(myFactorial);
