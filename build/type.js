"use strict";
// Program 1
let obj1 = {
    firstName: "Vasudha",
    lastName: "Wankhade",
    rollNo: 25,
    isEligible: true
};
console.log(obj1);
let o = 12;
// Program 3
// function add(a:number,b:number):number
// function add(a:number,b:number):number
// function add(a:string,b:string):string
// Program 4
class Car {
    drive() { console.log("I am driving car"); }
}
class Truck {
    drive() { console.log("I am driving Truck"); }
    load(l) { console.log("The load on truck is ", l); }
}
let car = new Car();
let truck = new Truck();
function Driving(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.load(1000);
    }
}
Driving(car);
Driving(truck);
function movement(livingBeing) {
    if (livingBeing.type == 'Bird') {
        // livingBeing.flyingSpeed =10000
        console.log(livingBeing.flyingSpeed);
    }
    else if (livingBeing.type == 'Animal') {
        // livingBeing.runningSpeed = 2000
        console.log(livingBeing.runningSpeed);
    }
}
movement({ type: 'Bird', flyingSpeed: 20000 });
movement({ type: 'Animal', runningSpeed: 100 });
// Program 6
let para = document.querySelector('p');
// para.value // Will give error because null don't have any property like value
let h = document.querySelector('#heading'); //Type Casting
let input = document.querySelector('#input');
