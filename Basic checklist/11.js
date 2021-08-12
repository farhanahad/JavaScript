// console unique value

let marks=[33,77,88,88,77,00,55,-87,-98];
let unique=[];
for(let value of marks){
    if(unique.indexOf(value)== -1){
        unique.push(value);
    }
}
console.log(unique);