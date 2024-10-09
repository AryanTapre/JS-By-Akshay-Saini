// Hositing is behavious of JS interpreter not a lnaguage feature
//it was introduced before introducing ES6 (ecma script 2015)

// Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their respective scopes, regardless of their actual position in the code. This means that you can use a variable or function before it is declared, and the interpreter will treat it as if it were declared at the beginning of the scope

//Important notes:

//1 Hoisting is a behavior of the JavaScript interpreter, not a language feature.
//2 Hoisting can lead to unexpected behavior if not understood properly.
//3 It is generally recommended to avoid using variables or functions before they are declared, as this can make your code harder to read and understand.
//4 The let and const declarations introduced in ES6 do not have hoisting behavior. This means that you cannot use a let or const variable before it is declared.


console.log(window.a);
var a = 10;