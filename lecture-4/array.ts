// Array define as string array
// 2 methods to declare array with certain data type
const heroes: string[] = [];
const heroesRank: Array<number> = [];

heroesRank.push(5);
heroes.push("Hulk");

// Setting the data type of Array 
type user = {
  name: string;
  active: boolean;
};

const allUsers: user[] = [];
allUsers.push({ name: "Ayush", active: true });

// Nested Array Data Type
// This example will only have number data type array inside an array
const Models: number[][] = [
  [244, 255, 199],
  [120, 180, 210],
];
