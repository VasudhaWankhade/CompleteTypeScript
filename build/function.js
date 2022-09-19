"use strict";
// One
function add(x, y) {
    console.log(x + y);
}
// Two
function addition(a, b) {
    return a + b;
}
// Three
function displayName(firstName, lastName) {
    console.log(firstName + lastName);
}
// displayName("Vasudha","Wankhade")
// Four
function addV(a, b) {
    return a + b;
}
// function TakeFun(x:number,y:number,fn:Function){
//     let a = fn(x)  // Getting NaN
//     console.log(a)
// }
// TakeFun(12,10,addV)
// For above code solution is using arrow function
function TakeFun(x, y, fn) {
    let a = fn(x, y); // So here ts will show error
    console.log(a);
}
TakeFun(12, 10, addV);
