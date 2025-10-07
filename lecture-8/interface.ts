// Interface in TS

interface user {
    readonly dbId : number ,
    email : string ,
    name : string ,
    userId : number ,
    // StartTrial and getCoupon are methods 
    // Methods are functions inside an object
    StartTrial() : string ,
    getCoupon(Cname : string , Cvalue : number) : number 
}

// This is useful when we are working with large codebase and we want to add some more properties to the defined interface 
// we can use the concept of it "Interface Merging" in this if we define the same interface again so we can add some more properties to it
// only possible when interface not with alias type
interface user {
    githubToken : string ,
}

interface Admin extends user {
    role : "TL" | "HM" | "PM" | "Admin"
}

var ayush: user = {
    dbId : 552211 ,
    email : "ayush@gmail.com" ,
    name : "Ayush" ,
    userId : 1 ,
    githubToken : "githubAyush1234" ,
    StartTrial : () => {
        return "Trial Started"
    } ,
    getCoupon : (name : "AyushCoupon" , value : 4500) => {
        return 10
    }
}

var AdminAyush: Admin = {
    role : "TL" ,
    dbId : 552211 ,
    email : "ayush@gmail.com" ,
    name : "Ayush" ,
    userId : 1 ,
    githubToken : "githubAyush1234" ,
    StartTrial : () => {
        return "Trial Started"
    } ,
    getCoupon : (name : "AyushCoupon" , value : 4500) => {
        return 10
    }
}