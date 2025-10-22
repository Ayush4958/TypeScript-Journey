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
// It's a generic function with array type and we use 2 different ways to define array type 
function getProducts(products) {
    var _a;
    return (_a = new Array()).concat.apply(_a, products);
}
// same function but with arrow function syntax
// ',' used after T for understanding that it's a generic type not any Tag in JSX / TSX
var getMoreProducts = function (products) {
    var _a;
    return (_a = new Array()).concat.apply(_a, products);
};
// generic function with 2 different type parameters
function uniqueFunction(param1, param2) {
    return {
        param1: param1,
        param2: param2,
    };
}
uniqueFunction(5, "5");
// U extend Database means U must have all the properties of Database type 
function uniqueFunction2(param1, param2) {
    return {
        param1: param1,
        param2: param2,
    };
}
uniqueFunction2(55, {
    connection: "LocalHost:5055",
    id: 100001,
    pass: "Dont give a damn about it",
});
