// function statements OR function declaration
    function a() {
        console.log("hey, there");
    }

// function expression

let b = function() {
}

// Anonymous function
    // function () {

    // }

// named function expression
let c = function myName() {
    console.log("aryan..");
}

// difference between parameter & Argument?
/*
    parameter:
        input that are given at function declaration
    Arguments:
        inputs that are given at a function call.

*/    

// First class Function or First Class Citizens
/*
    (1) @function that acts likes a value (function Expression)
    (2) @function that can be passed as an arguments to another functions (callback)
    (3) @function that can be returned from a function (closure)
*/    


// TODO: function expression vs function statement
// function statment are hoisted while function expression are not !.
// in function expression we are storing function into a variable, And the variable is Undefined initially!.


// eg.(1)
var val = function joke() {}

// eg. (2)
var fun = function populate()   {
    let data = "dasdas";
}

function fetchServer(fun) {}

//eg.(3)
function outer() {
    return function inner() {
        console.log("i am Inner Function..");
    }
}



