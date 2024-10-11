//FIXME: creating small e-commerce Functionality...
let cart = ["shoes","t-shirts","pants","laptops","iphone","android phone"];



//callback hell hell
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


