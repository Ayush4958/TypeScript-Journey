const user = {
    name : "Ayush" ,
    email : "bhandariaysuh@gmail.com",
    active : false 
}

// Way of a fucntion to accept a typescript object
function creatUser({name , paid}:{name:string , paid:boolean}){}
creatUser({name : "aysuh" , paid : true});

// If we use object with extra key we can also parse that
const user2 = {
    name : "Ayush3" , 
    paid : false , 
    email : "bhandariaysuh@gmail.com",
}
// we parse the object with extra key and value pair but no error , its a also one of JS wierdness
creatUser(user2); 

// way of obejct to return the object with different data types
function creatCOurse():{name: string , price : number}{
    return {name:"React-JS" , price : 499};
};

// defining the object , in this we define what type of value we parse not defining the keys and value pair
type student = { // Now no one can change the _id parameter as it is only read only
    //readonly _id : string;
    name : string ; 
    active : boolean ;
    email : string ;
    card? : number; // this will tell that its not that this key value will be recieved
}

// in this we define we have a parameter user and next of defining the user that user should have data type as student
function idealUser({user}:{user:student}){}
const emptyData = {
    name : "",
    active : false,
    email : "",
}
idealUser({user : emptyData});

// merging of 2 type
type cardNumber = {
    acnum : number;
}

type cardHolder = {
    name : string ;
}
// & will merge the 2 types of in another type
type cardDetails = cardNumber & cardHolder & {
    cvv : number ;
}

export {}