//Union types 
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return parseFloat(result);
    }
    else {
        return result.toString();
    }
}
//above is a function that combines numbers AND strings.
// But typescript is static typed, so we need a new kind of behavior:
// union types, which are declared with |
// typescript gives an error, but we can ignore that
// we can also use a typeof check to fix this error
// console.log(combine("jeroen", "danique", 'as-string'));
// console.log(combine(29, 27, 'as-number'));
//Literal types
// Literal types are types that explicetly expects a value
// It is done automaticly with const in javascript
// we have to memorize values above like as-string and as-number. We COULD use a enum, but a enum is a bit overboard
// a literal type is derived from a core type, and you use it in combination with union
console.log(combine("jeroen", "danique", 'as-text'));
console.log(combine(29, 27, 'as-number'));
