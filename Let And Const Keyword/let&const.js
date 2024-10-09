/*
    LET & CONST ARE HOISTED ??? ==>
    No, because Let & Const have temporal dead zone.
    means, we can't access let ans const before they are decalred.
    Trying to use a let or const variable before it is declared will result in a ReferenceError.
*/

/*
    TEMPORAL DEAD ZONE
    It's an Time duration between when the LET and CONST are assigned with UNDEFINED at memory declaration phase till they get initialized with actual value assigned..

    I can Say, Space / window before let and const are initialized in code is Temporal Dead Zone

    If we try to access variable in Temporal Dead Zone, JS engine throws errors..

    AVOID TEMPORAL DEAD ZONE : 
        access variables ,functions after they are being initialized

    
    
    So, these dead zones are associated with let and const reserved key words..

*/


/*
    ERROR TYPES:
        1.syntax error -  Not following standard structure
        if() {
        

        2.Reference error - when you try to use a variable that does'nt exist at all.
        e.g

            function my() {
                let b= 10;
            }
            console.log(b);  // error

        
        3.Type error -  TypeError occurs when the variable exists, but the operation you're trying to perform is not appropriate for the type of value it contains. In the case where the detailed message says "is not defined", this can occur if you have a variable whose value is the special undefined value, and you try to access a property of it. 
            e.g 
            const x;
            x = 45;  // error

            const x = 45; // valid




*/



// everything before line NO 62 is considered as TEMPORAL DEAD ZONE of variable let a
console.log(a);x``
let a = 10;



// everything before line NO 44 is considered as TEMPORAL DEAD ZONE of variable const b
const b = 1000;

console.log(b);


// everything before line NO 50 is considered as TEMPORAL DEAD ZONE of variable const b
let myFunction = () => {
    console.log("hello JI..");
}
myFunction();



