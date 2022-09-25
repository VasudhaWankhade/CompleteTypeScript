class PersonM{
    private firstName:string
    constructor(firstName:string){
        this.firstName = firstName
    }
    set updateName(fn:string){
        this.firstName = fn
    }
    get retrieve(){
        return this.firstName
    }
}
// By using get and set keyword we can use methods as properties
let mamata = new PersonM("Mamata")
mamata.updateName = "Mamta"
let nm = mamata.retrieve
console.log(nm)