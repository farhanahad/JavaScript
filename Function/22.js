function kmToMeter(km){
    if(km<0){
        return "input valid number";
    }
    else{
        return km*1000;
    }
}
console.log(kmToMeter(4));