//FIXME: creating small e-commerce Functionality...
let cart = ["shoes","t-shirts","pants","laptops","iphone","android phone"];



//callback hell
api.createOrder(cart, function () {
    api.proceedToPayment(function() {
        api.orderSummary(function() {
            api.updateWallet(function() {
                api.home();
            });
        });
    });
});

// loosing the control on Each Call back...

//TODO: Handling a single promise
const promise = api.createOrder(cart);

promise.then(() => {
    api.proceedToPayment();
});

promise.catch();


//TODO: Handling promise chain....

const promise1 = api.createOrder(cart);
promise1.then((data) => {
    return api.proceedToPayment(data);
})

.then((data) => {
    return api.orderSummary(data);
})

.then((data) => {
    api.updateWallet(data);
})

// another way of writing....
api.createOrder(cart)
.then((data) => {return api.proceedToPayment(data)})
.then((data) => {return api.orderSummary(data)})
.then((data) => {return api.updateWallet(data)});


