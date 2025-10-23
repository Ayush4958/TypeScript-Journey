// Type Narrowing in TypeScript

function detectType(val: number | string) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null) {
    if (!id) {
        return new Error("ID not provided");
    }
    return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

interface User {
    name : string , 
    email : string ,
}

interface Admin {
    name : string , 
    email : string ,
    isAdmin : boolean ,
}

function isAdminAcc (account : User | Admin) {
    if ("isAdmin" in account){
        return account.isAdmin
    }
}

// this type narrowing works only with classes and not with interfaces
// new keyword is used to check object type
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = {swim:() => void};
type Bird = {fly:()=> void};

function isFish(animal : Fish | Bird) : animal is Fish {
    return (animal as Fish).swim() !== undefined;
}

function getFood (animal : Fish | Bird){
    if (isFish(animal)){
        animal
        return "Fish Food"
    }
    animal
    return "It's a Bird Food"
}

// Discriminated Unions
interface Circle {
    shape : 'circle' ,
    radius : number ,
}

interface Square {
    shape : "square" ,
    side :  number ,
}

interface Rectangle {
    shape : "rectangle" ,
    length : number ,
    width : number ,
}

type Shape = Circle | Square  | Rectangle ;

function getShape(shape : Shape){
    if (shape.shape === 'circle'){
        return Math.PI * shape.radius ** 2 ;
    }
    else if (shape.shape === 'square'){
        return shape.side ** 2 ;
    }
    else{
        return shape.length * shape.width ;
    }
}

function getArea (shape : Shape){
    switch (shape.shape){
        case "circle" :
            return Math.PI * shape.radius ** 2 ;
            break ;

        case "square" :
            return shape.side ** 2 ;
            break ;

        case "rectangle" :
            return shape.length * shape.width ;
            break ;

        // It will never reach here if all cases are handled
        default :
            const _exhaustableCheck : never = shape ;
            return _exhaustableCheck ;
    }
}