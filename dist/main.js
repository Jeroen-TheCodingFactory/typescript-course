"use strict";
const userName = "Jeroen";
let age = 38;
function add(a, b) {
    var result;
    result = a + b;
    return result;
}
const addF = (a, b) => a + b;
const printOutput = output => console.log(output);
const addDefault = (a, b = 1) => a + b;
console.log(addDefault(2));
//# sourceMappingURL=main.js.map