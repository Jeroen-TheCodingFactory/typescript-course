"use strict";
function add(n1, n2) {
    return n1 + n2;
}
//You can also assign types to functions instead of parameters, a return type
// Typescript infers the type of the return type
// Just like variables it is a good idea to let typescript decide, so net set a type on a function unless it is needed
// a special type is void, a function that does not return something
// It is a common type among programming languages, like Java and C++
// void means it does NOT return anything
// technially void returns undefined when returning nothing
// typescript makes a difference between undefined type and vanilla javascript undefined
// undefined type can only be returned from a function with an empty return 
function printResult(num) {
    console.log('Result: ' + num);
}
console.log(add(12, 12));
//there is also a function type!
// Function is a typescript type.
// we want a function to be as specificly as passible, parameters and return types
// a function type is created by a look-a-like arrow function
//old
// let combineValues: Function;
// combineValues = add;
// console.log(combineValues(4,6));
//new
//accept every function where the function takes 2 numbers and returns a number!
let combineValues;
// combineValues = add; // will pass :D
// combineValues = printResult; // error!
//calbacks work the same way
function addAndHandle(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
addAndHandle(10, 20, (result) => { console.log("joehoe " + result); });
// We have a callback that typescript will infer because result HAS to be a numer in the function that the callback uses.
// WARNING the callback CAN return something and still pas as void. void says we won't DO anything with your result value
//test with void and with return type
function innerTest(number) {
    return number;
}
function test(n) {
    innerTest(n);
    //return innerTest(4) WILL give an error
    // but calling function that returns something and with no return in this function is ok
}
console.log(test(4));
