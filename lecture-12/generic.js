// generics in TypeScript
// a function which taked parameter of boolean & number type and return the variable with either boolean or number type
function identityOne(val) {
    return val;
}
// this function take params as a any type and return the variable with any type 
function identityTwo(val) {
    return val;
}
// We also can any capital letter instead if 'Type'
function identityThree(val) {
    return val;
}
identityThree({ name: "Miltion", price: 100 });
