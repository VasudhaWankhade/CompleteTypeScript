"use strict";
// Object can not be created from abstract class
// classes who inherit abstract class have to give defination of abstract 
// properties and methods mentioned in the abstract class
// abstract class can have abstract and and non abstract method
class Woman {
    constructor() {
        this.nm = "Vasudha";
    }
}
class Girl extends Woman {
    constructor() {
        super(...arguments);
        this.age = 18;
    }
    job() {
        console.log("Student");
    }
    qualificationLevel(education) {
        console.log(education);
    }
}
let v = new Girl();
console.log(v.nm);
console.log(v.job());
console.log(v.age);
console.log(v.qualificationLevel("Graduate"));
