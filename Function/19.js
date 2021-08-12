// function getFactorial(number){
//     let factorial=1;
//     for(let i=1;i<=number;i++){
//         factorial=factorial*i;
//     }
//     return factorial;
// }

// var firstFactorial= getFactorial(5);
// console.log(firstFactorial);

// var secondFactorial= getFactorial(7);
// console.log(secondFactorial);

function getFactorial2(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

const myFactorial = getFactorial2(6);
console.log(myFactorial);