// Object can not be created from abstract class
// classes who inherit abstract class have to give defination of abstract 
// properties and methods mentioned in the abstract class
// abstract class can have abstract and and non abstract method

abstract class Woman{
    abstract job():void;
    abstract age:number;
    abstract qualificationLevel(education:string):void
    readonly nm :string = "Vasudha"
}

class Girl extends Woman{
    job(): void {
        console.log("Student")
    }
    age= 18;
    qualificationLevel(education:string){
console.log(education)
    }
}

let  v = new Girl()
console.log(v.nm)
console.log(v.job())
console.log(v.age)
console.log(v.qualificationLevel("Graduate"))