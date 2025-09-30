// Array define as string array
// 2 methods to declare array with certain data type
const heroe: string[] = [];
const Rank: Array<number> = [];

Rank.push(5);
heroe.push("Hulk");

// Setting the data type of Array 
type user = {
  name: string;
  active: boolean;
};

const allUser: user[] = [];
allUsers.push({ name: "Ayush", active: true });

// Nested Array Data Type
// This example will only have number data type array inside an array
const Model: number[][] = [
  [244, 255, 199],
  [120, 180, 210],
];
