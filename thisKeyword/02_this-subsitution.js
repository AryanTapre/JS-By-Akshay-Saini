//"use strict";


/**   TODO: In non-strict mode  

--------------------------THIS SUBSITUTION CONCEPT =>

    THE VALUE OF "THIS" WILL ALWAYS POINTS OBJECT !.


in the context of regular function:
    -> generally this keyword refers to undefined / null value.
    -> if regular function invoked with any this context i.e null / undefined then it will refer to global object.
    -> If the function is called with "this" set to primitive value, this get subsituited with the primitive value's wrapper object.


*/


function x() {
    console.log(this);
    
}

x.call(undefined);