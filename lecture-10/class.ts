class NewUser {
    name : string ; 
    email : string ;
    age : number ;
    readonly country : string = "India"

    constructor(name : string , email : string , age : number ){
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

var ayush = new NewUser("Ayush" , "ayushex@.com" , 22);

// Error : cannot assign to 'country' because it have read-only property of TypeScript
// ayush.country = "Japan" 