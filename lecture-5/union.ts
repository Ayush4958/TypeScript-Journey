// Multiple Data Type in single variable
let score: number | string = 33

// Entering different Type of data in variable
score = 44;
score = "I win";

type user = {
    name: string ;
    id : number ;
}

type admin = {
    username : string ;
    id : number ;
}

// setting 2 type on single variable 
let ayush : user | admin = {name:"Ayush" , id : 24}
ayush = {
  username:"Ayush" , id : 24  
}

// Union narrowing
function getId(id : number | string){
    if(typeof id === "string") {
        id.toLowerCase();
    }
}

// Array using union

// now it can be either totally string or number , does not accept mixed in below case
const Data : number[] | string[] = [1 , 2 ,3 ,4]

// now you can mix the different data type 
const Data2 : (number | string)[] = [ 1 , 2 , 3 , "4"]

export {}