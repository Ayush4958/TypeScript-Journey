"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// normal array with different data type
var user = [1, "Hello!"];
// creating a tuple
// In case of tuple the order of data type also matters
var user1 = ["Ayush !!", 2, false];
var rgb = [255, 233, 190];
// Problem with tuple
rgb[1] = 400; // I can change the value manually of tuple , to avoid this we have to put some restriction by our side
user1.push("sdsdvs"); // I can also push the value in tuple , without any error 
