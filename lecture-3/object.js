"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Ayush",
    email: "bhandariaysuh@gmail.com",
    active: false
};
// Way of a fucntion to accept a typescript object
function creatUser(_a) {
    var name = _a.name, paid = _a.paid;
}
creatUser({ name: "aysuh", paid: true });
// If we use object with extra key we can also parse that
var user2 = {
    name: "Ayush3",
    paid: false,
    email: "bhandariaysuh@gmail.com",
};
// we parse the object with extra key and value pair but no error , its a also one of JS wierdness
creatUser(user2);
// way of obejct to return the object with different data types
function creatCOurse() {
    return { name: "React-JS", price: 499 };
}
;
// in this we define we have a parameter user and next of defining the user that user should have data type as student
function idealUser(_a) {
    var user = _a.user;
}
