//TODO: Real life Promise Example....



class User {
   

    constructor(_url,_status) {
        this.url = _url;
        this.status = _status;
    }
    
}



fetch('https://api.github.com/users/')
.then((response)=> {

    if(response.status == 403) {
         console.log("error");
    } 

    console.log(response);
    const user = new User(response.url,response.status);
    return user;

})
.then((user) => {

    //destructuring the data.....
    const {status,url} = user;
    console.log(status);
    console.log(url);

    console.log(`Status is : ${user.status}`);
    console.log(`URL is : ${user.url}`);

})




//TODO: 
const DummyData = "https://jsonplaceholder.typicode.com/users/";

async function getUser() {
    try {

        const response = await fetch(DummyData);
        const data =  await response.json();
        console.log(data);

    } catch (error) {
        console.log(`E:`,error);
    }
}
getUser();


fetch('https://api.github.com/users/')
.then((response) => {
    return response.json();
})

.then((data) => {

    return {
        msg:data.message,
        docURL:data.documentation_url
    }
})

.then((obj) => {
    console.log(`Your message is : ${obj.msg}`);
    console.log(`Your documentation URL : ${obj.docURL}`);
})

.catch((error) => {
    console.log("error here: ",error);
});




