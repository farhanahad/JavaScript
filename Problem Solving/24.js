// problem-2

function totalSales(shirtQuantity,pantQuantity,shoeQuantity){

    //Per pic shirt,pant,shoe price
 
    const shirtPrice=100;
    const pantPrice=200;
    const shoePrice=500;
 
 
    //Individual shirt,pant,shoe price
 
    let shirtTotalPrice=shirtPrice*shirtQuantity;
    let pantTotalPrice=pantPrice*pantQuantity;
    let shoeTotalPrice=shoePrice*shoeQuantity;
 
    //Total Price
    let totalPrice=  shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
 
    return totalPrice;
 
 }
 
 let value= totalSales(1,1,1);
 console.log(value);