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

// It's a generic function with array type and we use 2 different ways to define array type 
function getProducts <T> (products : Array <T>) : T[] {
    return new Array().concat(...products) ;
}

// same function but with arrow function syntax
// ',' used after T for understanding that it's a generic type not any Tag in JSX / TSX
const getMoreProducts = <T,> (products : T[]) : T[] => {
     return new Array().concat(...products) ;
}

// generic function with 2 different type parameters
function uniqueFunction <T ,U> (param1 : T , param2 : U) : object {
    return {
        param1 ,
        param2 ,
    };
}
uniqueFunction(5 , "5");

// generic function with constraint
interface Database {
    connection : string , 
    id : number , 
    pass : string ,
}

// U extend Database means U must have all the properties of Database type 
function uniqueFunction2 <T , U extends Database> (param1 : T , param2 : U) : object {
    return {
        param1 ,
        param2 ,
    }
}
uniqueFunction2(55 , {
    connection : "LocalHost:5055" ,
    id : 100001 ,
    pass : "Dont give a damn about it" ,
})