"use strict";
// interface ==> rule implementation
// always related to objects and classes
let vasu = {
    name: "Vasudha",
    age: 23,
    display() {
        console.log(this.name);
    },
};
console.log(vasu.name);
console.log(vasu.age);
console.log(vasu.display());
