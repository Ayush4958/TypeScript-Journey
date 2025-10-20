// abstract is used to define classes that cannot be instantiated directly it meeans that you cannot create an object of abstract class
// abstract classes are usually used as base classes from which other classes are derived

abstract class Animal{
    constructor(
        public name: string , 
        public species: string ,
        public gender: "Male" | "Female"
    ){}

    // we define abstract method which say that the method doesn't have any implementation but it will be defined in derived class
    abstract makeSound(): string ;
}

// below will give error as we cannot create object of abstract class
// const dog = new Animal("James" , "Monkey" , "Male")
// we have to extend the abstract class and create object of derived class

class Dog extends Animal {
    constructor(
        public name: string , 
        public species: string ,
        public gender: "Male" | "Female" ,
        public sound : string ,
    ){
        super(name , species , gender)
    }

    makeSound(): string {
        return `The Dog makes ${this.sound}`
    }
}