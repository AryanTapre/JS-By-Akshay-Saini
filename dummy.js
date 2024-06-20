function outer(){
    let data = 1;
    let temp = 45;
    return function inner (){
        console.log(data);
    }
}
outer()();