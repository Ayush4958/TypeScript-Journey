// Function in TS

function sumTwo(num : number):number { // this will now only return the data with only number data type
    return num + 2;
}
sumTwo(8);

function getUpper(val : string){
    return val.toUpperCase();
}
getUpper("HEllo, Ayush");

function signUp(name : string , email :string , pass : string , paid : boolean){
    return `${name} and his email is ${email} with password which is ${pass} and he is paid user as his status is ${paid}`;
}
signUp("Ayush" , "Ayush@example.com" , "123456" , true);

// Arrow function
let logIn = (name : string , email :string , paid : boolean = false) =>{ // setting default value of an argument
    return "Hello , Ayush !!!";
}
logIn("Ayush" , "Ayush@example.com");

// It is the case where return type can be more than one
function getVal1(val:number){
    if(val > 5){
        return true
    }
    return "Status Code : 202"
}

// Using void data type
const getVal2 = (val:string):void =>{
    console.log(val);
}

// using never data type
const handleError = (errmsg:string):never =>{
    throw new Error("Oops You get into Error");
}

export {}; 