
// TODO: Trust Issues With setTimeOut() function..

console.log("started..");

setTimeout(function cb() {
    console.log("called back..");
},5000);

let startDate = new Date().getTime();
console.log(`Start date : ${startDate}`);
let endDate = startDate;

while(endDate <= startDate + 10000) {
    endDate += new Date().getTime();
}

console.log(`End date : ${endDate}`);
console.log("Ended..");