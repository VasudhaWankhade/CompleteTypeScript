interface strict{
    employeeNo:number;
    employeeName:string;
}

interface elgibility{
    education:string;
    mobileNo:number;
}

class Employee implements strict,elgibility{
employeeNo: number;
employeeName:string;
education:string;
mobileNo:number;
constructor(emNo:number,emNm:string,education:string,mobileNo:number){
    this.employeeNo = emNo
    this.employeeName= emNm
    this.education = education
    this.mobileNo = mobileNo
}
}

let one = new Employee(1009,"Ram","Engineer",1218389393)
console.log(one.employeeName)
console.log(one.employeeNo)

