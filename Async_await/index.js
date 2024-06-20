
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise reject successfully");
    },25000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved successfullygfgfgf");
    },35000)
})

async function handlePromise() {
    console.log("hello world!!");

    const pr = await  promise
    .catch((error) => {
        console.log(error);
    })
    console.log("Aryan Tapre");
    console.log(pr);

    const pr2 = await  promise2;
    console.log("Aryan Tapre2");
    console.log(pr2);

   return pr;

}

 handlePromise()
 .then(function(data) {
    console.log(data);
 })


function getData() {

    console.log("before promise");

    const promise = getPromise();

    promise.then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err.message);
    })

    console.log(" i am running....");
}

getData();