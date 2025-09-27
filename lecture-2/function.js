"use strict";
// Function in TS
Object.defineProperty(exports, "__esModule", { value: true });
function sumTwo(num) {
    return num + 2;
}
sumTwo(8);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("HEllo, Ayush");
function signUp(name, email, pass, paid) {
    return "".concat(name, " and his email is ").concat(email, " with password which is ").concat(pass, " and he is paid user as his status is ").concat(paid);
}
signUp("Ayush", "Ayush@example.com", "123456", true);
// Arrow function
var logIn = function (name, email, paid) {
    if (paid === void 0) { paid = false; }
    return "Hello , Ayush !!!";
};
logIn("Ayush", "Ayush@example.com");
// It is the case where return type can be more than one
function getVal1(val) {
    if (val > 5) {
        return true;
    }
    return "Status Code : 202";
}
// Using void data type
var getVal2 = function (val) {
    console.log(val);
};
// using never data type
var handleError = function (errmsg) {
    throw new Error("Oops You get into Error");
};
