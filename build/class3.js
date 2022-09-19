"use strict";
class Mother {
    constructor(motherName, lastName) {
        this.city = "Amravati";
        this.motherName = motherName;
        this.lastName = lastName;
    }
    displayName() {
        console.log(this.motherName + this.lastName);
    }
}
class Daughter extends Mother {
    constructor(motherName, lastName, daughterName) {
        super(motherName, lastName);
        this.daughterName = daughterName;
    }
    displayName() {
        console.log(this.daughterName + this.lastName);
        super.displayName();
    }
}
let vasudha11 = new Daughter("Mamta", "Wankhade", "Vasudha");
// vasudha11.city ==> private so can call it inside mother class only
// vasudha11.lastName
vasudha11.displayName();
// private ------> within class
// public ---- class , in extended class , outside class
// protected --- in class and in extended class
