// "use strict"; 

// const hello = "aryan";

// function x () {
//     const name = "aryan";
//     console.log(this);
//     //console.log(this.hello);
    
    
// }
// x();
//console.log(this);


// const obj = new Object({
//     name:"aryan" ,
//     age:22,
//     getName: () => {
//         console.log(this);
//     }
// });

// obj.getName();


const obj4 = {
    name: "obj4",
    getThis:function () {
        return this;
    }
};

console.log(obj4.getThis());

