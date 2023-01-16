/* Javascript has features that run in now-and-day browsers, but not in old ones like internet explorer */
/* https://kangax.github.io/compat-table/es6/ list what typescript is able to compile*/

/* next-gen javascript -> es6 or recent*/

/* const */
const userName = "Jeroen";
//userName = "Jeroen2"; will give an error because of reassign. Typescript adds error in devtime, js in runtime
let age = 38;
// age = 29; will not give an error because let can be changed. It is similair to var. var still exists because of backwards compability
// let was introduced because of scope. 
// var is global and function scope
// let is global, function and block scoped

// var result; global. Javascript can access var 1 level higher
function add(a: number, b:number){
    var result; // function scope, same as let
    result = a + b;
    return result;
}

// if( age > 20){
//     var isOld = true;
// }
// console.log(isOld); //error in TS but NOT in Javascript. var only knows global and function
// let knows block!
// if( age > 20){
//     let isOld = true;
// }
// console.log(isOld);


// const addF = (a: number, b: number) => {
//     return a + b;
// }

// console.log(addF(2,5));

// arrow functions gives us a shorter way to write functions with 1 parameter (always implicit returns)
const addF = (a:number, b: number) => a + b;

// with 1 parameter it can be even shorter without type assignments of parameters

const printOutput: (a: number | string) => void = output => console.log(output);

//also in JS default arguments to parameters where added

const addDefault = (a: number, b: number = 1) => a + b;

console.log(addDefault(2));

/* default arguments have to be last in the list!, because of the order of arguments*/
