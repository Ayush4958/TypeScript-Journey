// Interface in TS
interface user {
    email : string ,
    name : string ,
    userId : number ,
}

var ayush: user = {
    email : "ayush@gmail.com" ,
    name : "Ayush" ,
    userId : 1 ,
}

console.log(ayush);

// ⚠️ When Not to Use Enums

// If the set of values is dynamic (e.g. fetched from an API)
// If you need more flexibility than enums allow
// When working in codebases where enums are discouraged in favor of literal union types (e.g. 'admin' | 'user' | 'guest')
