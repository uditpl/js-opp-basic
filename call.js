let person1 = {
    name : 'adam',
    age : 25,

    showDetails : function(){
        console.log(this.name + " is " + this.age + " years old");
    }

}

let person2 = {
    name : 'setve',
    age : 20
}

let showDetail = function(){
    console.log( `${this.age} years old is a ${this.name}` );
}

let getDetails =   function(city , car){
    console.log(`${this.name} is ${this.age} years old , he is lives in ${city} and he drives ${car}`);
}


//-----------------call of function------------------//

person1.showDetails();
console.log("---------------------------------------");

person1.showDetails.call(person2)   //-------> function borrowing from another function
console.log("---------------------------------------");

showDetail.call(person1)            //-------> function borrowing
showDetail.call(person2)
console.log("---------------------------------------");

getDetails.call(person1 , "noida" , "bmw");            
getDetails.call(person2 , "mubai" , "OD");
console.log("---------------------------------------");


//--------------------apply-------------------------//

getDetails.apply(person1 , ["noida" , "bmw"]);            
getDetails.apply(person2 , ["mubai" , "OD"]);
console.log("---------------------------------------");


//--------------------bind-------------------------//
let getDetailsBind = getDetails.bind(person1 , "noida" , "bmw");
console.log(getDetailsBind);
getDetailsBind();