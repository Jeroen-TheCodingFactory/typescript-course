"use strict";
const myName = 'Jeroen';
console.log(myName);
let arrow = () => {
    console.log("arrow");
};
arrow();
const button = document.querySelector('button');
button.addEventListener("click", () => {
    console.log("clicked!");
});
