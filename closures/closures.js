
/*
    TODO:CLOSURE:
        A closure is a function that has access to outer function's scope, even though after outer  function
        is returned.

        A closure is formed when an inner function is defined within outer Function.
        It is essentially a combination of inner function's and outer function's scope
        which means inner function can access outer functions data/variables even after outer function
        has finished execution.

        definition:
            A closure is just a combination of function bundled together with reference to it's surrounding 
            State (the Lexical environment)

            Closure gives access to outer function scope from inner function

    
    TODO:IMPORTANT:7
        Closures are created every time a function is Created..
        they are used in DATA HIDING

*/

/*
    Using closure we can remember data that was within some scope, but now that scope is deleted/undefined..

    In below example,
    we can have access to function's a() variables i.e x
    even after a() get deleted From the memory..

    we have stored closure of a i.e closure(a) in b_reference const literal


    USES OF CLOSURES:
        -   Module Design pattern
        -   Currying
        -   Memoize
        -   maintaining state in Async World
        -   setTimeOuts
        -   Iterators
        -   and many more..       

*/


/*
    function a() {
        let x = 100;

        return function b() {
            console.log(x);
        }
    }

    same as below code..
*/



function a() {
    let x = 10;
    function b() {console.log(x);}
    return b;
} a();



const b_reference = a();
console.log(b_reference);

b_reference(); // i can have access to closure of a() though it get executed..



function bankWithdrawl (amount) {
    let bankBalance = 1000;
    function withdrawl() {
        if(bankBalance > amount) {
            bankBalance -= amount;
            return bankBalance;
        }else {
            return "insufficient funds";
        }
    }

    return withdrawl();
    
}

let amt = bankWithdrawl(1000);
console.log(amt);


// closures Advance part
function x() {
    for(var i=1; i<=5; i++) {
        let y = i;
        setTimeout(function() {
            console.log(y);
        },y*1000);
    }
}

x();