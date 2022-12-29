"use strict";
var myName = 'Jeroen';
console.log(myName);
//watch mode can be runned without --watch or --w
// In a big project you may want to compile ALL typescript files instead of one
// we can do this by telling typescript that this file is a typescript project
// we have to run tsc --init 
// thereafter we have a tsconfig.json file where we can configure the compiler
// after that we can use tsc command to run the whole project
// we can use watch mode with that to
//arrow test to compile
var arrow = function () {
    console.log("arrow");
};
arrow();
