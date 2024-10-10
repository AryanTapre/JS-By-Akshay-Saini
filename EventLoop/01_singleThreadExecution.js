// creating a delay.
console.log("before the delay was created");

// function delayBySeconds(second) {
//     let start = Date.now();
    
//     let end = start + (second*1000);
//     while(start <= end) {
//         start = Date.now();
//     }
// }

function delayBySeconds(sec) {
    let start = now = Date.now();
    while(now-start < (sec*1000)) {
        now = Date.now();
    }
} 

delayBySeconds(1);

console.log("After the delay");

