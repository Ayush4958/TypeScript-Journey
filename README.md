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
