let person1 = {

name : 'adam',
age : 25,

}

let showDetails = function(city , state){
    console.log(this.name + " is " + this.age + " years old" +' '+city+' '+state);
}

let showDetailsBind = showDetails.bind(person1 , "noida", "up");
console.log(showDetailsBind);
showDetailsBind();

console.log("------------------------------------------------------------");

//polly fills of bind
Function.prototype.myBind = function(...args){
    let obj = this
    params = args.slice(1)
    return function(...args2){
        obj.apply(args[0] , [...params, ...args2] )
    }
}
let showDetailsMyBind = showDetails.myBind(person1 , "noida", "up");
console.log(showDetailsBind);
showDetailsMyBind();