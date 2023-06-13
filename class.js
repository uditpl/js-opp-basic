class Person {
    constructor(name , age){
        this.name =name,
        this.age = age
    }
    showDetails(){
        return this.name
    }
}

class PersonChild extends Person{
    constructor(){
        super('steve')
    }
}
 
let person1 = new Person("adam" , 23);
console.log(person1);
console.log(person1.showDetails());
console.log("--------------------------------------------------------");

let person2 = new PersonChild();
person2.age = 20
console.log(person2);
console.log(person2.showDetails());
console.log("--------------------------------------------------------");