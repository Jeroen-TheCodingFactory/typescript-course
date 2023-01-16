"use strict";
const myName = 'Jeroen';
console.log(myName);
let arrow = () => {
    console.log("arrow");
};
arrow();
function clickHandler(message) {
    console.log('clicked + message');
}
const button = document.querySelector("button");
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "test"));
}
