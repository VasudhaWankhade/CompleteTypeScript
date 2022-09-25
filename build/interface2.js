"use strict";
class Vehicle {
    constructor(numberPlate, vehicleNo, rNo) {
        this.vehicle = "Bike";
        this.numberPlate = numberPlate;
        this.vehicleNo = vehicleNo;
        this.rcNo = rNo;
    }
}
let tvs = new Vehicle(true, 1278, 9988);
tvs.vehicle = "Car";
console.log(tvs);
