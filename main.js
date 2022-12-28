// There are 2 more types that are good te be awere off.
// unknown is a type where type of the far is unknown. 
// if we set a var to unknown, we can't set it to another type.
// any is less strict, unknown is more restrictive than any
var userInput;
var userName;
//is ok
// userInput = 5;
// userInput = "Max"
// gives error
// userName = userInput;
// if we use a typeof check it will work:
if (typeof userInput === "string") {
    userName = userInput;
}
// unknown is the better choice than any because of the more strictness
//therefore you have to use a typeof check !!!
// the last interesting type is never
// it returns nothing, so void is the infered type
// but this functions returns never! it nevers return (a value)
// throw will cancel our script! 
// or a part of the script if you use try/catch
// there you can use neer
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
//generateError("An error occurred",500);
var doesntDoAnything = generateError("An Error occured", 500);
console.log(doesntDoAnything);
