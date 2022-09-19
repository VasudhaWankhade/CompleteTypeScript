console.log("Hello")

let a:number = 10
console.log(a)

let b: string = "Vasudha"
console.log(b)

let t:boolean = true
console.log(t)

let ar:number[] =[1,3,5,6,6,7]
console.log(ar)

let obj:object={
    firstName:"Vasudha",
    lastName:"Wankhade"
}
console.log(obj)

// tuple ==> array with fixed length

let arr:[number,string]=[12,"Vasudha"]
console.log(arr)

// type

type n ={firstName:string,age:number}
let nn :n ={
    firstName:"Vasudha",
    age:23
}

type studentInfo={
    namee:string,
    address:string,
    subjects:string[],
    age:number
}

let vasudha:studentInfo={
    namee:"Vasudha",
    address:"Amravati",
    subjects:["Maths","Physics","Chemistry"],
    age:23
}
console.log(vasudha)