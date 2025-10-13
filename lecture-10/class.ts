// Classes in TypeScript and the modifiers (public , private , readonly , )
class User {
    public name : string ; 
    // be default if you didn't specify any modifier it will be marked as public
    email : string ;
    // now the age property is private and cannot be assigned or accessed outside the class , only inside the class you can accessed or assigned it 
    // private can also defined with # prefix :- #age
    private age : number ;
    // this property cannot be changed but it can be accessed outside the class
    readonly country : string = "India"
    constructor(name : string , email : string , age : number ){
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
var ayush = new User("Ayush" , "ayushex@.com" , 22);

// with this way of defining class , you dont have to write properties and constructor separately
class Empire {

    constructor
    (
        public cname : string , 
        public population : number , 
        public language : string , 
        private militaryPower : number = 1000
    ){}

    get EmpirePopulation() : string {
        return `The population of ${this.cname} is ${this.population}`
    }

    // private properties cannot be accessed directly so we can create a getter and setter method to access and modify the private property
    get MilitaryPower() : string {
        return `The Military power of ${this.cname} is ${this.militaryPower} forces`
    }

    // set method don't return anything nor have any data type defined
    set MilitaryPower(power : number){
        if(power <= 1000){
            throw new Error("Military power is less than or same as before")
        }
        this.militaryPower = power
    }

    // private method cannot be accessed outside the class
    private display() : string {
        return `The Empire ${this.cname} speaks ${this.language}`
    }
}



// Error : cannot assign to 'country' because it have read-only property of TypeScript
// ayush.country = "Japan" 