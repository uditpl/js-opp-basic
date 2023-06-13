// let car1 = {
//     brand : "bmw",
//     model : "x5",
//     color : "white"
// }
// let car2 = {
//     brand : "mercides",
//     model : "s class",
//     color : "red"
// }



function car(brand, model, color){
    this.Brand = brand 
    this.Model = model
    this.Color = color

    this.drive = function(){
        console.log("i am driving "+ this.Model)
    }
}
let car1 = new car("bmw" , "x5" , "white");   //this - {}
console.log(car1);

let car2 = new car("mercides" , "s class" , "blue");   //this - {}
console.log(car2);

car1.Brand = "OD"
console.log(car1);

console.log(car1.Model);
console.log(car2.Color);

car1.drive();
car2.drive();