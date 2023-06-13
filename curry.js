function add(a ,b){
    console.log(a+b);
}
add(2,3);
console.log("------------------------");

let addWith2 = add.bind(this , 2);
addWith2(2);
console.log("------------------------");

let adddWith2 = add.bind(this);
adddWith2(2);
console.log("------------------------");

let addddWith2 = add.bind(this ,2 ,5);
addddWith2();
console.log("------------------------");

//closure curry
function adD(x){
    return function(y){
        console.log(x+y)
    }
}

let adDWith2 = adD(2);
adDWith2(3);