// One
function add(x:number,y:number):void{
    console.log(x+y)
}

// Two
function addition(a:number,b:number):number{
return a+b
}

// Three
function displayName(firstName:string,lastName:string){
    console.log(firstName + lastName)
}
// displayName("Vasudha","Wankhade")

// Four

function addV(a:number,b:number){
return a + b
}

// function TakeFun(x:number,y:number,fn:Function){
//     let a = fn(x)  // Getting NaN
//     console.log(a)
// }
// TakeFun(12,10,addV)

// For above code solution is using arrow function

function TakeFun(x:number,y:number,fn:(a:number,b:number)=>number){
        let a = fn(x,y)  // So here ts will show error
        console.log(a)
}
TakeFun(12,10,addV)

