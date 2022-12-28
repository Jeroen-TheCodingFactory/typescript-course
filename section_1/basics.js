"use strict";
// Javascript knows some basic types, typescript knows a lote more and enables us to write more types
/*
 number is a type know by both (only number type including decimal etc.)
 string ia also a type known by both. Known by '', "" and ``(backticks)
 boolean is also a type knowh by both, false or true
 truthy and falsy (like 0 and 1) is behind the scenes magic, not the real type.

 Typescript helps us by finding errors when compiling and developing instead of runtime(js)

 When we want to know the type of something we can use the vanilla js typeof function
 Javascript is dynamicly typed, instead of typescript which is staticly typed
    Typescript error only come during development, javascript types are resolved at runtime

    Important: core types in typescript are lowercaswe (string vs String!!!)
*/
function add(n1, n2, showResult, resultPhrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    return result;
}
const number1 = 5;
const number2 = 2.8;
/*
numbers in javascript are floats by default, 5 and 5.0 are the same!

*/
const printResult = false;
const resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
// We were using core types string, boolean and number (floats). 
// We do this by type after an assisngment in a function
// We dont have types when we assign variables
// Typescript has type inference, that knows that number1 is a number because you assign it a number
// you CAN use :number after a var, but its not needed, except when you dont assign it directly.
// Like:
// let numberX: number;
// and then some later: numberX  = 5;
// You can be sure it is a number!
//objects
// object types infered by TS
// with key type pairs
// you dont want to only work with generic object type
// you want to be more specific, with {} as type!
// now we make a specific object type like this:
// const person: {name: string, age: number} = {
//     name: "Jeroen",
//     age: 29,
// }
// type inference still will kick in though, so typescript infers it, you won't have to make a specific object.
// const person = {
//     name: "Jeroen",
//     age: 29,
// }
// when we use a specific type, autocomplete works on our objects :)
// console.log(person.age);
// typescript throws a warning when we dont have a property on a object.
//When we hover over the object is becomes clear which datatypes are in the object.
//Array is also a core type!
//Arrays can be flexible or strict in typescript
// when hovering typescript infers that hobbies is a array of strings!
// const person = {
//     name: "Jeroen",
//     age: 29,
//     hobbies: ['Gaming','Coding'],
//     friends: [{
//         name: "Danique",
//         age: 26,
//         hobbies: ["Designing", "Netflix"]
//     }]
// }
//When initialy empty, then implicitly set type!
let favoriteActitivies;
// person.friends[1] = {name: "t", age: 10, hobbies: ["test"]};
// for(const friend of person.friends){
//     console.log(friend);
// } 
// Sometimes we want to enable a structure where we assign a number and a set outcome will be a value, that is wat enums are for.
// Enums doesn't exist in Javascript.
// when we need a role, we can write custom code to extract a role from a number, but enums are the solution!
// String identifiers are very prone to errors
//Behind the scenes will work with number on index
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "Jeroen",
    age: 29,
    hobbies: ['Gaming', 'Coding'],
    friends: [{
            name: "Danique",
            age: 26,
            hobbies: ["Designing", "Netflix"]
        }],
    role: Role.ADMIN
};
console.log(person.role); //We can add custom indexes to enum. 
// Another core type of typescript is any. Any can be anything like the name suggests. 
// we can use any[] for an array of just about anything
