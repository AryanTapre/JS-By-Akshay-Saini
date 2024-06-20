/*
    VAR : 
        function scope

    LET and CONST :
        if let and const not declared within block they, they are attached to SCRIPT
        if let and const are declared within block scope, they  are attached to BLOCK

        so let and const are BLOCKED scoped..

*/



/*
    BLOCK:
        it is also called as Compounding Statement
        We are Grouping set of statements into a single unit, and that unit can be used where JS accept only
        Single line of statement

        for e.g if() structure
         it accept only single line after if() condition
         If we wish to run multiple lines upon condition being True, There is where we use BLOCK.


        As LET and CONST are blocked scope, Anything outside the block scope they will not interfere
        
        As block get executed they are Deleted from the memory...

*/



/*
    BLOCK SCOPE:
        Area that is accessible within  block..

*/



/*
    SHADOWING:
        means to hide data (i.e variables) by re declaring it onto other scope
        e.g 

        var x = "aryan";
        function b() {
            var x = "tapre";   // var x shadows the x outside b() function
            console.log(x);
        }
        x();
        console.log(x);

        shadowing is only possible within block or a scope..

        here var x declared inside function b() is shadowing the x that is being declared outside the function b()..

        the scope of "tapre" is limited to function b()'s scope..
        the scope of "aryan" is on Global level..
*/


var pop = "aryan";
function fun(){
    var pop = "tapre"; // pop shadows pop i.e declared outside the function scope
    console.log(pop);
}
fun();
console.log(pop);


let a = 86;

{
    let a = 45;
    const b = 56;
    var c = 100;

    console.log(a);
    console.log(b);
    console.log(c);

    a = 500;
}

console.log(a);




