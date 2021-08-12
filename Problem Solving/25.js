function deliveryCost(quantity){

    //Shirt Price
    const first100tShirtPrice=100;
    const second100tShirtPrice=80;
    const resttShirtPrice=50;

    // First 100 shirt price
    if(quantity<=100){
        const price= quantity*first100tShirtPrice;
        return price;
    }

    // 200 shirt price

    else if(quantity<=200){
        const first100tShirt = 100 * first100tShirtPrice;
        const restShirt = quantity - 100;
        const second100tShirt =  restShirt * second100tShirtPrice;
        const totalPrice = first100tShirt +second100tShirt;
        return totalPrice;
    }

    
    //Rest shirt price

    else {
        const first100tShirt = 100 *  first100tShirtPrice;
        const second100tShirt = 100 * second100tShirtPrice;
        const  restShirt =  quantity - 200;
        const resttShirt =  restShirt * resttShirtPrice;
        const totalPrice = first100tShirt + second100tShirt +  resttShirt;
        return totalPrice;

    }

}

const totaltShirtPrice=deliveryCost(210);
console.log(totaltShirtPrice);