class NewUser {
    name : string ; 
    email : string ;
    age : number ;

    constructor(name : string , email : string , age : number ){
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

var ayush = new NewUser("Ayush" , "ayushex@.com" , 22);
console.log(ayush);