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
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    return result;
}
var number1 = 5;
var number2 = 2.8;
/*
numbers in javascript are floats by default, 5 and 5.0 are the same!

*/
var printResult = false;
var resultPhrase = "Result is: ";
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
var person = {
    name: "Jeroen",
    age: 29
};
console.log(person.name);
