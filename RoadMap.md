# 🛣️ TypeScript Roadmap for Beginners

### Phase 1: Getting Started with TypeScript

- Goal: Understand what TypeScript is and how to set it up.

1. What is TypeScript?
- Differences between TypeScript and JavaScript
- Why use TypeScript?

2. Setting up TypeScript
- Installing Node.js and npm
- Install TypeScript globally: npm install -g typescript
- Initialize a TS project: tsc --init
- Using VS Code with TypeScript

3. Your First TypeScript Program
- Write a basic .ts file
- Compile using tsc filename.ts
- Run with Node.js

---

### Phase 2: TypeScript Fundamentals

- Goal: Learn the core syntax and types.

4. Basic Types
- number, string, boolean
- any, unknown, void, null, undefined
- Type annotations

5. Arrays and Tuples
- Typed arrays: number[], string[]
- Tuples: [string, number]

6. Functions
- Function types and return types
- Optional and default parameters
- Arrow functions with types

7. Objects and Type Aliases
- Object typing
- Type aliases (type keyword)

8. Interfaces
- Define and use interfaces
- Difference between type and interface

---

### Phase 3: Intermediate Concepts

- Goal: Use TypeScript in structured applications.

9. Union and Intersection Types
- type A = string | number
- type B = A & { age: number }

10. Type Narrowing
- Using typeof, in, instanceof
- Type guards

11. Enums
- Numeric and string enums

12. Generics
- Generic functions: <T>(arg: T) => T
- Generic types and interfaces

13. Type Assertion & Type Casting
- as keyword
- <Type>value syntax

--- 

### Phase 4: Working with OOP in TypeScript

- Goal: Learn object-oriented programming in TypeScript.

14. Classes and Objects
- Constructors
- Access modifiers (public, private, protected)
- readonly properties

15. Inheritance
- extends and super()

16. Interfaces with Classes
- Implementing interfaces

17. Abstract Classes and Methods

---

### Phase 5: Advanced TypeScript

- | Goal: Master complex types and real-world patterns.

18. Modules and Namespaces
- export and import
- File-based modules

19. Advanced Types
- Mapped types
- Conditional types
- Utility types (Partial, Pick, Omit, Record, etc.)

20. Declaration Files
- What are .d.ts files?
- Using DefinitelyTyped (@types/...)

--- 

### Phase 6: TypeScript with Real Projects

- Goal: Use TypeScript with common frameworks.

21. Using TypeScript with Node.js
- Setup with Express
- tsconfig for Node apps

22. TypeScript with React
- Props and State typing
- Function components and hooks with TypeScript

23. TypeScript with API (Fetch / Axios)
- Defining API response types
- Handling errors with types

---

### Phase 7: Best Practices & Resources

- Goal: Write clean, scalable TypeScript code.

24. TypeScript Best Practices
- Avoiding any
- Using unknown safely
- Keeping types DRY

25. Linting & Formatting
- ESLint + Prettier setup for TypeScript

26. Testing with TypeScript
- Jest with TypeScript
- Writing typed unit tests