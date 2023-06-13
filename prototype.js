//let arr = [1, 2, 3, 4]

let person1 = {
    name : 'steve',
    age : '25',

    showDetail : function(){
        console.log(this.name + ' ' + this.age);
    }
}

let person2 = {
    name : 'steve'
}

person2.__proto__=person1
console.log(person2.name + ' '+ person2.age);
person2.showDetail();