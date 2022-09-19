class Person{
    firstName:string = "Vasudha"
    lastName:string= "Wankhade"
}

let vasudha1 = new Person()
console.log(vasudha1.firstName)
console.log(vasudha1.lastName)

// public   private     protected   default     ==> access modifier

class Student{
    private standard = '10th'
    private hobbies = ["Cricket","Reading Books"]
    private name:string;

    public constructor(nameSt:string){
        this.name = nameSt
    }

    // getter
    public getName(){
        console.log(this.name)
    }

    // setter
    public setName(newName:string){
        this.name = newName
    }
}

let sanju = new Student("Sanjivani")

// console.log(sanju.standard)  //not accessible beacuse these properites are accessible inside the class only
// console.log(sanju.hobbies)
// console.log(sanju.name)

// so we have to use getter and setter methods ==> we have to define it inside the class
sanju.getName()
sanju.setName("Radhika")
sanju.getName()