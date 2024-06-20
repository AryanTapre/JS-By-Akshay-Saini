console.log("hello there!");

const promise = new Promise((resolve,reject) => {
    var error = true;

    setTimeout(() => {
        console.log("resolving the issue");
        if(!error) {

            resolve("resolved")
        } 
        else {
            reject("error")
        }
    },2000);
})

promise.then((data) => {
    console.log(data);
})
.catch((error)=> {
    console.log(error);
})


console.log("ending....");