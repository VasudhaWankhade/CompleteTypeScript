"use strict";
class Person {
    constructor() {
        this.firstName = "Vasudha";
        this.lastName = "Wankhade";
    }
}
let vasudha1 = new Person();
console.log(vasudha1.firstName);
console.log(vasudha1.lastName);
// public   private     protected   default     ==> access modifier
class Student {
    constructor(nameSt) {
        this.standard = '10th';
        this.hobbies = ["Cricket", "Reading Books"];
        this.name = nameSt;
    }
    // getter
    getName() {
        console.log(this.name);
    }
    // setter
    setName(newName) {
        this.name = newName;
    }
}
let sanju = new Student("Sanjivani");
// console.log(sanju.standard)  //not accessible beacuse these properites are accessible inside the class only
// console.log(sanju.hobbies)
// console.log(sanju.name)
// so we have to use getter and setter methods ==> we have to define it inside the class
sanju.getName();
sanju.setName("Radhika");
sanju.getName();
