
/*
    SPECIAL NOTE:
    TODO: Whenever an execution context is being created and pushed onto the call Stack of JS RunTime Environment
    Global Object named "WINDOW" in context of web browser added inside the Global Execution Context

    This keyword , A special pointer pointing to Global Object

    Every thing(variables, functions..) that is defined inside execution Context, get Attached to Global Object i.e WINDOW 
    To Access that use OBJECT.<identifier_name>
    e.g
        var role = "Admin";
        console.log(window.role); or
        console.log(this.role)



    Along with that We have Something called as LEXICAL SCOPE inside every execution context 
    Pointing to scope of itself and lexical Environment of it's Parent..

*/



/*
    SCOPE:
    scope is something like accessibility Area of variables,Functions, and etc in a Program..
*/

/*
    LEXICAL SCOPE : 
        lexical means, Hierarchy or Sequence performed to Achieve some thing..

        lexical scope means , Current Local Scope along with Lexical environment of its' parent execution context / scope
*/

var bab = 100;

a();

// lexical scope : scope of GEC along with scope of NULL i.e parent of GEC

function a() {
    
    console.log("log in a() scope : ",bab);
    b();
    //lexical scope : scope of a() along with scope of global execution context GEC i.e parent of a()

    function b() {
        
        console.log("log in b() scope : ",bab);
        c();
        //lexical scope : scope of b() along with scope of a() i.e parent of b()

        function c() {
            bab = 30;
            console.log("log in c() scope : ",bab);
            // lexical scope: scope of c() along with scope of b() i.e  parent of c()
        }
    }
    console.log("return value in a() scope : ",this.returnvalue);
    return 50;
}



