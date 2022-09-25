interface details{
    numberPlate:boolean;
    vehicleNo:number;
    readonly vehicle:string;
    rcNo:number;
}

class Vehicle implements details{
    numberPlate:boolean;
    vehicleNo:number;
    vehicle="Bike"
    rcNo:number;
    constructor(numberPlate:boolean,vehicleNo:number,rNo:number){
        this.numberPlate = numberPlate;
        this.vehicleNo = vehicleNo
        this.rcNo = rNo
    }
}

let tvs = new Vehicle(true,1278,9988)
tvs.vehicle = "Car"
console.log(tvs)