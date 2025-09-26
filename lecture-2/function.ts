// Function in ts
function sumTwo(num : number) {
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
let logIn = () =>{
    return "Hello , Ayush !!!";
}
logIn();

export {}; 