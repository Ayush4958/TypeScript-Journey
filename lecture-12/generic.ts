// generics in TypeScript

// a function which taked parameter of boolean & number type and return the variable with either boolean or number type
function identityOne(val : boolean | number) : boolean | number {
    return val ;
}

// this function take params as a any type and return the variable with any type 
function identityTwo(val: any) : any {
    return val ;
}

// We also can any capital letter instead if 'Type'
function identityThree<Type>(val : Type) : Type {
    return val ;
}

// creating my own type in the object form
interface Bottle {
    name : string , 
    price : number ,
}

identityThree<Bottle>({name:"Miltion" , price:100}) ;