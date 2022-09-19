class Mother{
    public motherName:string
    protected lastName:string
    private city ="Amravati"
    constructor(motherName:string,lastName:string){
    this.motherName = motherName
    this.lastName = lastName
    }

    displayName(){
        console.log(this.motherName + this.lastName)
    }
}

class Daughter extends Mother{
    public daughterName:string
    constructor(motherName:string,lastName:string,daughterName:string){
    super(motherName,lastName)
    this.daughterName = daughterName
    }

    displayName(){
        console.log(this.daughterName+this.lastName)
        super.displayName()
    }
}

let vasudha11 = new Daughter("Mamta","Wankhade","Vasudha")
// vasudha11.city ==> private so can call it inside mother class only
// vasudha11.lastName
vasudha11.displayName()
// private ------> within class
// public ---- class , in extended class , outside class
// protected --- in class and in extended class

