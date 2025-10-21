# 📘 Lecture 1: TypeScript Setup & Basic Data Types

## ✅ What I Learned

### 🛠️ TypeScript Setup
- Installed TypeScript using:
  ```bash
  npm install -g typescript
  ```
- Initialized a TypeScript project and compiled a `.ts` file using:
  ```bash
  tsc filename.ts
  ```
- Ran the output JavaScript using Node.js.

### 📚 Basic Data Types in TypeScript

| Data Type | Description |
|-----------|-------------|
| `number`  | Used for all numeric values including integers and decimals. Example: `let age: number = 25;` |
| `string`  | Used to represent text. Example: `let name: string = "Alice";` |
| `boolean` | Used for logical values: `true` or `false`. Example: `let isLoggedIn: boolean = true;` |
| `any`     | Can be used to store values of any type. Bypasses type checking. Example: `let value: any = 42;` |

---

# 📘 Lecture 2: TypeScript Functions and Return Types

## ✅ What I Learned

### 🔢 Typed Function Parameters & Return Types

```ts
function sumTwo(num: number): number {
  return num + 2;
}
```

- Ensures only `number` can be passed and returned.
- Type annotations after parameter (`num: number`) and after function (`: number`).

### 🔠 String Manipulation Function

```ts
function getUpper(val: string): string {
  return val.toUpperCase();
}
```

- Takes a `string` and returns a capitalized version.

### 🧾 Function with Multiple Parameters

```ts
function signUp(name: string, email: string, pass: string, paid: boolean) {
  return `${name} and his email is ${email} with password which is ${pass} and he is paid user as his status is ${paid}`;
}
```

- Demonstrates how to annotate multiple parameter types.
- Uses template literals for output.

### ⚡ Arrow Function with Default Parameters

```ts
let logIn = (name: string, email: string, paid: boolean = false) => {
  return "Hello , Ayush !!!";
};
```

- Shows use of arrow functions and default argument values.

### 🔁 Function with Union Return Type

```ts
function getVal1(val: number) {
  if (val > 5) return true;
  return "Status Code : 202";
}
```

- Depending on input, it returns either a `boolean` or `string`.

### 🚫 `void` Return Type

```ts
const getVal2 = (val: string): void => {
  console.log(val);
};
```

- `void` means the function returns nothing.

### ❌ `never` Return Type

```ts
const handleError = (errmsg: string): never => {
  throw new Error("Oops You get into Error");
};
```

- `never` is used when a function **never returns** (e.g., always throws an error).

---

This lecture focused on strengthening the understanding of function types, default arguments, and special return types like `void` and `never` in TypeScript.

---

# 📘 Lecture 3: TypeScript Objects and Object Typing

## ✅ What I Learned

### 📦 Creating and Using Objects

```ts
const user = {
  name: "Ayush",
  email: "bhandariaysuh@gmail.com",
  active: false
};
```

- Basic object structure with TypeScript-compatible syntax.

### 📥 Passing an Object as a Function Argument with Inline Type

```ts
function createUser(name: string, paid: boolean): { name: string; paid: boolean } {
  return { name, paid };
}

createUser("ayush", true);
```

- Function accepts parameters and returns an object with a specific type.

### ⚠️ Object with Extra Properties

```ts
const user2 = {
  name: "Ayush3",
  paid: false,
  email: "bhandariaysuh@gmail.com"
};

createUser(user2);
```

- Even if `user2` has extra properties, TypeScript doesn't throw an error — known as *object literal widening* or *excess property checks* bypass.

### 🔄 Returning Object with Multiple Data Types

```ts
function createCourse(): { name: string; price: number } {
  return { name: "React-JS", price: 499 };
}
```

- Shows how to define and return an object with typed keys.

### 🧱 Creating Custom Object Types with `type` Keyword

```ts
type student = {
  name: string;
  active: boolean;
  email: string;
};
```

- Used to define a reusable object structure for future variables or parameters.

### 🧪 Using Custom Object Type in a Function Parameter

```ts
function idealUser({ user }: { user: student }) {}
```

- The parameter must strictly match the structure of the `student` type.

### 🧹 Example of Matching Object

```ts
const emptyData = {
  name: "",
  active: false,
  email: ""
};

idealUser({ user: emptyData });
```

- A valid object passed that satisfies the `student` type structure.

---

This lecture focused on mastering object typing, passing objects to functions, and defining reusable object types using `type`. These are essential for building scalable TypeScript applications.

---


# 📘 Lecture 4: TypeScript Arrays

## ✅ What I Learned

### 🧵 Declaring Arrays with Specific Types

```ts
const heroes: string[] = [];
const heroesRank: Array<number> = [];
```

- Two ways to declare typed arrays:
  - `type[]` syntax (e.g., `string[]`)
  - `Array<type>` syntax (e.g., `Array<number>`)
- These arrays will only accept values of the specified type.

```ts
heroesRank.push(5);    // ✅ valid
heroes.push("Hulk");   // ✅ valid
```

---

### 🧠 Typing Arrays of Objects

```ts
type user = {
  name: string;
  active: boolean;
};

const allUsers: user[] = [];
allUsers.push({ name: "Ayush", active: true });
```

- Defined a custom type `user`.
- Declared an array `allUsers` of type `user[]`.
- Ensures that all elements in the array match the `user` object structure.

---

### 🔁 Nested Arrays (2D Arrays)

```ts
const Models: number[][] = [
  [244, 255, 199],
  [120, 180, 210]
];
```

- Declares a **2D array** of numbers.
- Each sub-array must also be of type `number[]`.

---

This lecture solidified my understanding of how to declare and use **typed arrays**, **arrays of objects**, and **nested arrays** in TypeScript — helping me enforce data consistency and structure in collections.

---


# 📘 Lecture 5: TypeScript Union Types

## ✅ What I Learned

### 🔀 Union Types in Variables

```ts
let score: number | string = 33;
score = 44;         // ✅ number
score = "I win";    // ✅ string
```

- Union types allow a variable to hold more than one data type.

---

### 👥 Union Types with Custom Objects

```ts
type user = {
  name: string;
  id: number;
};

type admin = {
  username: string;
  id: number;
};

let ayush: user | admin = { name: "Ayush", id: 24 };
ayush = { username: "Ayush", id: 24 };
```

- `ayush` can be either of `user` or `admin` type.
- Helps model flexible object structures.

---

### 🔍 Union Narrowing with `typeof`

```ts
function getId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}
```

- Union narrowing helps us safely use properties based on type checks.

---

### 📦 Arrays with Union Types

```ts
const Data: number[] | string[] = [1, 2, 3, 4];
```

- This means the array can be either all numbers **or** all strings — not mixed.

```ts
const Data2: (number | string)[] = [1, 2, 3, "4"];
```

- This version allows mixing both `number` and `string` values inside the same array.

---

This lecture enhanced my understanding of how to handle **multiple possible types** using `union types`, perform **type narrowing**, and properly use unions in arrays and objects.

---

# 📘 Lecture 6: TypeScript Tuples

## ✅ What I Learned

### 🧷 Creating a Tuple

```ts
const user1: [string, number, boolean] = ["Ayush !!", 2, false];
```

- A **tuple** enforces:
  - Fixed number of elements
  - Specific data types in a defined order
- `user1` must always be `[string, number, boolean]`

---

### 🧪 Tuple with Type Alias

```ts
type Ofrgb = [number, number, number];
const rgb: Ofrgb = [255, 233, 190];
```

- Defined a reusable tuple type alias `Ofrgb` for RGB color values.

---

### ⚠️ Issues with Tuples

```ts
rgb[1] = 400;           // ✅ Can manually change value
user1.push("sddsvs");   // ✅ Can push extra values without TypeScript error
```

- Tuples in TypeScript allow mutation like regular arrays.
- To avoid this, developers should apply additional runtime checks or constraints.

---

This lecture introduced **tuples** in TypeScript — an array-like structure with **strict typing and order**. Though they add structure, it's important to note that tuples can still be mutated like normal arrays unless handled carefully.

---

# 📘 Lecture 7: TypeScript `enum`

## ✅ What I Learned

### 🎯 What is `enum` in TypeScript?
An `enum` (short for "enumeration") is a special TypeScript feature that allows you to define a set of named constants — either numeric or string-based.

Enums make your code **more readable**, **less error-prone**, and easier to manage when working with fixed sets of related values.

---

### 🧠 Why and When Should You Use `enum`?
✅ Use `enum` when:
- You have a **set of related options** (like roles, states, modes, etc.)
- You want **clear, descriptive names** instead of magic numbers or strings
- You want to **improve code readability** and **reduce bugs** due to mistyped strings

❌ Avoid using `enum` when:
- The values are dynamic or fetched from APIs at runtime
- You need flexibility that doesn't align with fixed sets

---

### ✏️ Example Code

```ts
const enum SeatChoice {
  Aisle = 10,         // Starts from 10
  Middle = 15,        // Next value will be 16 if not explicitly set
  Window,             // Will be 16 (auto-incremented from Middle)
  Fourth = "fourth"   // Explicit string value; all values must be strings if one is
}

const Bseat = SeatChoice.Aisle;
```

- `Aisle` starts at 10.
- `Middle` is manually set to 15.
- `Window` becomes 16 automatically.
- If any value is a string (like `Fourth`), **all enum values must be strings**.

> ❗ `const enum` is used for **performance optimization** — it gets inlined and removed from the JS output.

---

### ✅ Benefits of Using Enums
- Cleaner and descriptive code
- Reduces typos from using raw strings/numbers
- Allows grouping of constants in one place

---

This lecture helped me understand how `enum` brings more structure and clarity when managing fixed constant values in TypeScript projects.

 ---
 
# 📘 Lecture 8: TypeScript Interfaces

## ✅ What I Learned

### 🧩 Defining an Interface

```ts
interface user {
  readonly dbId: number;
  email: string;
  name: string;
  userId: number;
  StartTrial(): string;
  getCoupon(name: string, cvalue: number): number;
}
```

- `interface` is used to define the **structure** of an object.
- It defines **properties and methods** expected in an object.
- `readonly` makes the property immutable after initialization.

---

### ➕ Interface Reopening (Interface Merging)

```ts
interface user {
  githubToken: string;
}
```

- You can **reopen** an existing interface to add more properties (only works with interfaces, not type aliases).
- This is useful in **large codebases** where additional properties are added in separate modules.

---

### 🧬 Interface Inheritance

```ts
interface Admin extends user {
  role: "TL" | "HR" | "PM" | "Admin";
}
```

- `Admin` interface **inherits** all properties from `user` and adds its own `role` property.
- Promotes **code reuse** and **extensibility**.

---

### 🧪 Using Interfaces in Objects

```ts
var ayush: user = {
  dbId: 552211,
  email: "ayush@gmail.com",
  name: "Ayush",
  userId: 1,
  githubToken: "githubAyush1234",
  StartTrial: () => "Trial Started",
  getCoupon: (name, value) => 10
};

var AdminAyush: Admin = {
  role: "TL",
  dbId: 552211,
  email: "ayush@gmail.com",
  name: "Ayush",
  userId: 1,
  githubToken: "githubAyush1234",
  StartTrial: () => "Trial Started",
  getCoupon: (name, value) => 10
};
```

- `ayush` follows the `user` interface, while `AdminAyush` follows the `Admin` interface.
- Methods inside interfaces can be defined and implemented directly within the object.

---

## 🧠 Summary

- Interfaces define **contracts** for objects and classes.
- You can **extend**, **reopen**, and **inherit** interfaces.
- Prefer interfaces over type aliases when working with object structures, especially for large and scalable codebases.

---

# 🎯 Lecture 9 – Setting Up a TypeScript Project

In this lecture, I learned how to properly set up a **TypeScript project** structure.  
This setup is essential before starting any TypeScript-based application or experimenting with new concepts.

---

# Lecture 10 — Classes and Access Modifiers in TypeScript

In this lecture, I explored how **classes** work in TypeScript and how to use access modifiers like `public`, `private`, `protected`, and `readonly` to manage data access within classes.

## Topics Covered

### 1. Defining a Class
A **class** is a blueprint for creating objects with both properties and methods.

```ts
class User {
  public name: string;
  public email: string;
  private age: number;
  readonly country: string = "India";

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}
```

The `User` class demonstrates:
- Use of **public** (accessible anywhere)
- **Private** property (accessible only inside the class)
- **Readonly** property (cannot be changed after initialization)
- Constructor for initializing values

---

### 2. Access Modifiers

| Modifier | Description |
|-----------|-------------|
| `public` | Default. Accessible anywhere. |
| `private` | Accessible only inside the same class. |
| `protected` | Accessible in the class and its subclasses. |
| `readonly` | Value can only be assigned once. |

Example:
```ts
private age: number;
protected gdp: number = 50000;
readonly country: string = "India";
```

---

### 3. Parameter Properties in Constructor
You can define and assign properties directly in the constructor to save code.

```ts
class Empire {
  constructor(
    public cname: string,
    public population: number,
    public language: string,
    private militaryPower: number = 1000,
    protected gdp: number = 50000
  ) {}
}
```

---

### 4. Getter and Setter Methods
Used to **access and modify private properties** safely.

```ts
get MilitaryPower(): string {
  return `The Military power of ${this.cname} is ${this.militaryPower} forces`;
}

set MilitaryPower(power: number) {
  if (power <= 1000) throw new Error("Military power is less than or same as before");
  this.militaryPower = power;
}
```

---

### 5. Private Methods
A **private method** is only accessible inside the same class.

```ts
private display(): string {
  return `The Empire ${this.cname} speaks ${this.language}`;
}
```

---

## Key Learnings
- `public`, `private`, `protected`, and `readonly` define access scope.
- Getters and setters help control and validate private data access.
- Constructors can define and assign class properties directly.
- Private methods and encapsulation increase data security.

---

# Lecture 11 - Abstract Classes in TypeScript

## 🧠 Concept Overview
Abstract classes in TypeScript are base classes that **cannot be instantiated directly**.  
They act as **blueprints** for other classes and are used to enforce a structure for derived classes.

---

## 📘 Key Concepts

### 1. Abstract Class
An abstract class can contain both **implemented methods** and **abstract methods**.  
Abstract methods don’t have any implementation and must be defined in the derived class.

```ts
abstract class Animal {
  constructor(
    public name: string,
    public species: string,
    public gender: "Male" | "Female"
  ) {}

  abstract makeSound(): string;
}
```
Here:
- The `abstract` keyword prevents direct instantiation.
- The `makeSound()` method must be implemented by subclasses.

---

### 2. Cannot Instantiate Abstract Class
```ts
// ❌ Error: Cannot create instance of abstract class
// const dog = new Animal("James", "Monkey", "Male");
```
You cannot create objects of `Animal` directly.

---

### 3. Extending Abstract Class
To use an abstract class, you must **extend** it and **implement** the abstract methods.

```ts
class Dog extends Animal {
  constructor(
    public name: string,
    public species: string,
    public gender: "Male" | "Female",
    public sound: string
  ) {
    super(name, species, gender);
  }

  makeSound(): string {
    return `The Dog makes ${this.sound}`;
  }
}
```

Here:
- `Dog` extends the `Animal` class.
- It defines the `makeSound()` method required by the abstract base class.

---

## ✅ Example Output
```ts
const dog = new Dog("Tommy", "Dog", "Male", "Bark");
console.log(dog.makeSound()); // Output: The Dog makes Bark
```

---

**This lecture covered:**  
✔ Abstract classes  
✔ Abstract methods  
✔ Inheritance and implementation in derived classes  
✔ Usage of `super()` constructor  

---
