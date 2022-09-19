"use strict";
// Program 1
class Department {
    constructor(nd) {
        this.country = "India";
        this.staff = [];
        this.nameOfDept = nd;
    }
    addNewEmployee(employeeName) {
        this.staff.push(employeeName);
    }
    describe() {
        console.log(this.nameOfDept);
    }
    displayEmployeesList() {
        console.log(this.staff);
    }
}
let electrical = new Department("EXPO");
console.log(electrical);
let mechanical = {
    nameOfDept: "Mechanical",
    describe: electrical.describe
};
mechanical.describe();
// Program 2
let civil = new Department("Civil");
civil.addNewEmployee("Vasudha");
civil.addNewEmployee("Sanjivani");
// civil.country = "Japan" // can not update beacause we used readonly keyword
civil.displayEmployeesList();
