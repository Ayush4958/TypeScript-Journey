"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Multiple Data Type in single variable
var score = 33;
// Entering different Type of data in variable
score = 44;
score = "I win";
// setting 2 type on single variable 
var ayush = { name: "Ayush", id: 24 };
ayush = {
    username: "Ayush", id: 24
};
// Union narrowing
function getId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Array using union
// now it can be either totally string or number , does not accept mixed in below case
var Data = [1, 2, 3, 4];
// now you can mix the different data type 
var Data2 = [1, 2, 3, "4"];
