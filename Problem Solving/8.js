// function getFactorial(number) {
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// var firstFactorial = getFactorial(7);
// console.log('factorial of 7 is ', firstFactorial);

// var secondFactorial = getFactorial(9);
// console.log('Factorial of 9 is ', secondFactorial);

// for loop reverse

function getFactorial2(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

const myFactorial = getFactorial2(6);
console.log(myFactorial);