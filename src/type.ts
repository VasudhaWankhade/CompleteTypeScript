// Program 1

type wholeNo = {
    firstName:string
    lastName:string
}

type integer = {
rollNo:number
isEligible:boolean
}

type all = wholeNo & integer

let obj1:all={
    firstName:"Vasudha",
    lastName:"Wankhade",
    rollNo:25,
    isEligible:true
}

console.log(obj1)

// Program 2

type a1= number | boolean
type b1= string | number
type uni = a1 & b1
let o : uni = 12

// Program 3

// function add(a:number,b:number):number
// function add(a:number,b:number):number
// function add(a:string,b:string):string

// Program 4

class Car{
   drive(){console.log("I am driving car")} 
}

class Truck{
    drive(){console.log("I am driving Truck")} 
    load(l:number){console.log("The load on truck is ",l)}
}

type VehicleM= Car | Truck

let car = new Car()
let truck = new Truck()

function Driving(vehicle:VehicleM){
    vehicle.drive()
    if(vehicle instanceof Truck){vehicle.load(1000)}
}
Driving(car)
Driving(truck)

// Program 5

interface Bird{
    type:'Bird'
flyingSpeed:number
}

interface Animal{
    type:'Animal'
    runningSpeed:number
}
type LivingBeing = Bird | Animal

function movement(livingBeing:LivingBeing){
if(livingBeing.type == 'Bird'){
// livingBeing.flyingSpeed =10000
console.log(livingBeing.flyingSpeed)
}
else if(livingBeing.type == 'Animal'){
    // livingBeing.runningSpeed = 2000
    console.log(livingBeing.runningSpeed)
}
}

movement({type:'Bird',flyingSpeed:20000})
movement({type:'Animal',runningSpeed:100})

// Program 6

let para = document.querySelector('p')
// para.value // Will give error because null don't have any property like value
let h =<HTMLHeadElement> document.querySelector('#heading')//Type Casting
let input = document.querySelector('#input')!
