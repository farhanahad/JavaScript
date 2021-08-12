function number(num1,num2){
    console.log(`Two number: `,num1,num2);

    var sum=num1+num2;
    return sum;
}
var value=number(20,10);
console.log(`Summation is `,value);

// Substraction

function substractionTwoNumbers(num1, num2) {
    var result = num1 - num2;
    return result;
}

var total = substractionTwoNumbers(100,50);
console.log('Subscation is', total);

//multiplication

function multiplicationTwoNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}

var total = multiplicationTwoNumbers(100,5);
console.log('Multiplication is', total);

//Division

function DivisionTwoNumbers(num1, num2) {
    var result = num1 / num2;
    return result;
}

var total = DivisionTwoNumbers(100,5);
console.log('Division is', total);