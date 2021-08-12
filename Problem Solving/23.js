

function seerToMon(seer){
    if(seer<=0){
        return "Plase enter a valid number"
    }
    else{
    let mon=seer/40;
    return mon;
    }
}

let value=seerToMon(-8);
console.log(value);
let value1=seerToMon(80);
console.log(value1);