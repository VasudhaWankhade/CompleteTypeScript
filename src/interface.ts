// interface ==> rule implementation
// always related to objects and classes

interface add{
name:string;
age:number;
display():void;
}

let vasu:add={
    name:"Vasudha",
    age:23,
    display() {
        console.log(this.name)
    },
}
console.log(vasu.name)
console.log(vasu.age)
console.log(vasu.display())