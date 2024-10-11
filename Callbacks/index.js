/* FIXME: CALLBACKS 

    .✅Callback function is a function, that is passed as an Parameter to another Function

    ✅Function that Accepts the callback Now is it's Responsibility when to call that callback Function.

    ✅ With the help of callbacks function, we can Achieve asynchronous behaviour in Javascript synchronous Environment

    function x(callback) {
        console.log("x() function control..");
        callback();
    }

    x(function y() {
        console.log("y is being Called..");
    });

*/


/* TODO: Blocking The main Thread
    
    JS has a single thread , means a Call Stack
    Thread will Execute one task at a TIME

    Suppose A heavy operations pushed onto Stack that lot of time to get executed
    In that case, will Say OUR MAIN THREAD HAS BEEN BLOCKED BY THAT HEAVY FUNCTION

    To get Rid of it, Create a Async Behaviour of heavy Task..

*/



/* FIXME: Achieving Async Nature via CallBacks

    function pop() {
    console.log("Timer..");
    }
    setTimeout(pop,5000);

    ✅ for 5 seconds pop() function has been locked, as Time expires After 5 seconds pop() can be executed at Any Time..
*/


/* FIXME: Event Listeners in Deep WITH CLOSURES

    ✅Closure used to achieve data hiding..
    ✅Whenever event is called by interacting with widgets(can be click, hover..) The handler of that event ie. function get pushed onto callStack and then get Executed..

*/
function attachEventListener() {

    let buttonClickCount = 0;
    document.getElementById("clickme").addEventListener("click", function xyz () {
        buttonClickCount++;
        console.log(`button clicked : ${buttonClickCount}`);
    });

}

// attachEventListener();


/* FIXME: Garbage Collection & Remove Event Listeners
    
    ✅ Event listeners are bit heavier, Because their handlers are function and Forms a Closure
    That closure might carrying lots of variables , functions,arrays.. and etc

    ✅ Even though They are not executed they Reserve memory

    ✅ if a web app has lot's of Listeners, memory reservation will also be Leaden Web app get loads slow,,

    ✅ Therefore, if listeners are not in used Remove them, for saving Memory and faster execution

    ✅ Listeners 👂 that are Removed are Garbage 🗑️🚮 Collected..
 */

const users = [
    {firstName:"aryan", lastName:"tapre", age:22},
    {firstName:"elon", lastName:"musk", age:26},
    {firstName:"harshad", lastName:"mehta", age:21},
    {firstName:"donald", lastName:"trump", age:26},
];


// task: get firstname of person having age 26 using reduce function only

const output = users.reduce((acc,obj) => {
    if(obj.age == 26) {
        acc.push(obj.firstName)
    }
    return acc;
},[]);

console.log("output is : "+ output);
