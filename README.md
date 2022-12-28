# Understanding TypeScript - 2023 Edition Repo
!["Typescript logo from Wikipedia"](https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg)
## Description
Repo for the course <em>"Understanding TypeScript - 2023 Edition"</em> by <em>Maximilian Schwarzmüller</em>

## Things I learned
In this section I will provide some key points that I learned in the course.

### Section 1: Getting Started
1. Learned to install TypeScript via npm
2. Learned to run TypeScript via tsc in terminal
3. Learned that TypeScript is founded and developed by Microsoft
4. Learned that TypeScript is a developer-only-experience, it will provide developers ways to code more clean code and to catch bugs more easily. 
5. Learned that TypeScript transpiles to JavaScript and that the process is similair to SCSS -> CSS
6. Learned that (just like SCSS) TypeScript can adapt new features that JavaScript doesn't have right now, like enums. 

#### Resources 
https://www.typescriptlang.org/


### Section 2: TypeScript Basics & Basic Types
I learned a lot from the basics, starting with the fact that Javascript checks types in runtime, TypeScript in dev-time. In Javascript you can check types by the "typeof" function.

I learned the basic types that you will use in Typescript:
- number
- string
- array
- object
- function
- any
- void
- unknown
- never
- union 
I learned that these types can be applied to variables functions and function arguments. But it is a bad practice to set every variable type to the correct type as TypeScript <strong>infers</strong> most of them.

I also learned about the usage of <strong>enums</strong> and created my own enums. 

I learned about tupils, what they are and how they are constructed with TypeScript.

I made my own types and interfaces, and searched in the documentation about the difference between the to (turns out they can serve you both it most usecases, but that interfaces are used in OOP and types not perse).

I learned about combining types in an union type. 

I learned about truthy and falsy values (1 and 0 in boolean)

Learned the use of <strong>throw</strong> outside of try/catch.

#### Resources
Documentation about types and interfaces => https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

### Resources
https://www.udemy.com/course/understanding-typescript/ 

