// console.log("hello there!");

// const promise = new Promise((resolve,reject) => {
//     var error = true;

//     setTimeout(() => {
//         console.log("resolving the issue");
//         if(!error) {

//             resolve("resolved")
//         } 
//         else {
//             reject("error")
//         }
//     },2000);
// })

// promise.then((data) => {
//     console.log(data);
// })
// .catch((error)=> {
//     console.log(error);
// })

// console.log("ending....");

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => reject("p1 resolved"),5000);    
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => reject("p2 reject"),2000);
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => reject("p3 resolved"),1000);
})


Promise.any([p1,p2,p3])
.then((result) => console.log(result))
.catch((err) => console.log(err))
