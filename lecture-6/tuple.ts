// normal array with different data type
const user : (string | number)[] = [1 , "Hello!" ];

// creating a tuple
// In case of tuple the order of data type also matters
const user1 : [string , number ,  boolean] = ["Ayush !!" , 2 ,  false];

// tuple with type alias
type Ofrgb = [number , number , number];
const rgb : Ofrgb= [255 , 233 ,190];

// Problem with tuple
rgb[1] = 400;  // I can change the value manually of tuple , to avoid this we have to put some restriction by our side
user1.push("sdsdvs") // I can also push the value in tuple , without any error 

export {}