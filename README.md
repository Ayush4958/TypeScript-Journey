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
