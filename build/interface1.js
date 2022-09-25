"use strict";
class Employee {
    constructor(emNo, emNm, education, mobileNo) {
        this.employeeNo = emNo;
        this.employeeName = emNm;
        this.education = education;
        this.mobileNo = mobileNo;
    }
}
let one = new Employee(1009, "Ram", "Engineer", 1218389393);
console.log(one.employeeName);
console.log(one.employeeNo);
