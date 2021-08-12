function inchToFeet(inches){
    var feet=inches/12;
    return feet;
}
var myInches=132;
console.log(inchToFeet(myInches));

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadi inches in feet', feet);