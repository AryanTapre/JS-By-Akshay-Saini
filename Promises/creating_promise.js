//TODO: implementing a small e-commerce
/**
 *  @add items to cart
 *  @create an order/place an order
 *  @make a payment
 *  @show the order summary
 *  @update the e-wallet
 *  @FrontMan
 */

    let myCart = [];

    let addCart = (...cartItems) => {
        for(let item of cartItems) {
            myCart.push(item);
        }
    }


    let createOrder = (myCart) => {
        return new Promise((resolve,reject) => {

            if(myCart.length == 0) {
                const error = new Error("Cart is empty!");
                reject(error);
            } else {
                setTimeout(() => {
                    resolve("odID56453012459810");
                    console.log("in create order");
                },1000);
            }

        })
    }


    let payment = (orderID) => {
        const promise = new Promise((resolve,reject) => {
            if(orderID === undefined) {
                const error = new Error("orderID not Found!");
                reject(error);

            } else {
                setTimeout(() => {
                    resolve("payRef128963012478");
                    console.log("in payment");
                },5000);
            }
        });

        return promise;
    }

    
    let orderSummary = (payRefID) => {
        return new Promise((resolve,reject) => {
            if(payRefID === undefined) {
                const error = new Error("pay not done");
                reject(error);
            
            } else {
                resolve("your order summary is here...");
                console.log("in order summary");
            }
        });
        
    }

    let updateWallet = (d) => {
        return new Promise((resolve,reject) => {
            if(d === undefined) {
                const error = new Error("can not update the wallet");
                reject(error);
            
            } else {
                resolve("your order summary is here...");
                console.log("in update wallet");
            }
        });
    }

    

    //FIXME: Handling transactions....

    addCart("phone","tablet","laptops","mouse","motherboard","radiator","compressor","pouch","pen","writing pad","led","lcd");

    createOrder(myCart) 
    .then((orderID) => {
        return payment(orderID);
    })
    .then((payRef) => {
        return orderSummary(payRef);
    })
    .then((data) => {
        return updateWallet(data);
    })
    .then((info) => {
        console.log(info);
    })
    .catch(error => console.log(error.message));
  
    
    