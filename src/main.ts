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



