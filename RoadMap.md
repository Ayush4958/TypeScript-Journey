# 🛣️ TypeScript Roadmap for Beginners

### Phase 1: Getting Started with TypeScript

- Goal: Understand what TypeScript is and how to set it up.
- What is TypeScript?

Differences between TypeScript and JavaScript

Why use TypeScript?

- Setting up TypeScript

Installing Node.js and npm

Install TypeScript globally: npm install -g typescript

Initialize a TS project: tsc --init

- Using VS Code with TypeScript

Your First TypeScript Program

Write a basic .ts file

Compile using tsc filename.ts

Run with Node.js

### Phase 2: TypeScript Fundamentals

- Goal: Learn the core syntax and types.
- Basic Types

number, string, boolean

any, unknown, void, null, undefined

Type annotations

Arrays and Tuples

Typed arrays: number[], string[]

Tuples: [string, number]

- Functions

Function types and return types

Optional and default parameters

Arrow functions with types

- Objects and Type Aliases

Object typing

Type aliases (type keyword)

Interfaces

- Define and use interfaces

Difference between type and interface

Phase 3: Intermediate Concepts

Goal: Use TypeScript in structured applications.

Union and Intersection Types

type A = string | number

type B = A & { age: number }

Type Narrowing

Using typeof, in, instanceof

Type guards

Enums

Numeric and string enums

Generics

Generic functions: <T>(arg: T) => T

Generic types and interfaces

Type Assertion & Type Casting

as keyword

<Type>value syntax

Phase 4: Working with OOP in TypeScript

Goal: Learn object-oriented programming in TypeScript.

Classes and Objects

Constructors

Access modifiers (public, private, protected)

readonly properties

Inheritance

extends and super()

Interfaces with Classes

Implementing interfaces

Abstract Classes and Methods

Phase 5: Advanced TypeScript

Goal: Master complex types and real-world patterns.

Modules and Namespaces

export and import

File-based modules

Advanced Types

Mapped types

Conditional types

Utility types (Partial, Pick, Omit, Record, etc.)

Declaration Files

What are .d.ts files?

Using DefinitelyTyped (@types/...)

Phase 6: TypeScript with Real Projects

Goal: Use TypeScript with common frameworks.

Using TypeScript with Node.js

Setup with Express

tsconfig for Node apps

TypeScript with React

Props and State typing

Function components and hooks with TypeScript

TypeScript with API (Fetch / Axios)

Defining API response types

Handling errors with types

Phase 7: Best Practices & Resources

Goal: Write clean, scalable TypeScript code.

TypeScript Best Practices

Avoiding any

Using unknown safely

Keeping types DRY

Linting & Formatting

ESLint + Prettier setup for TypeScript

Testing with TypeScript

Jest with TypeScript

Writing typed unit tests