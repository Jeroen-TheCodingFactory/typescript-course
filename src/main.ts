const myName = 'Jeroen';
console.log(myName);

//watch mode can be runned without --watch or --w


// In a big project you may want to compile ALL typescript files instead of one
// we can do this by telling typescript that this file is a typescript project
// we have to run tsc --init 
// thereafter we have a tsconfig.json file where we can configure the compiler
// after that we can use tsc command to run the whole project
// we can use watch mode with that to


//arrow test to compile
let arrow = () => {
    console.log("arrow");
}

arrow();

/* lib is another compiler option */
/* how does typescript knows that we have a document and the button has a event listener method?*/
/* JS know this but TS is not specificly for a browser. thats where lib comes into play */
/* if we dont set lib we have a couple of standard / default functions that depends on the target */
/* like Map and DOMAPI's :D!*/
// "lib": ["DOM", "ES6", "DOM.Iterable", "ScriptHost"],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */

const button = document.querySelector('button')!;
button.addEventListener("click", () => {
    console.log("clicked!"); 
});

/* allowJs option lets us copmile .js. checkJs checks .js but don't copmile. TS will help checking code */
/* sourceMap helps us with debugging, we can use it as a bridge to see our typescript files in the browser*/
/* outDir and rootDir are options for bigger objects. When we want to have more clean code we can include a dist folder (output) and src folder (input) */
/* Typescript looks at the most top level ts file and set thats as rootDir, setting it gives us more control! */
/* project structure is maintained in dist! */
/* and lol, be sure to check include and exclude in the compiler :x */
/* removecomments removes ... comments!*/
/* noEmit does not emit js files, it just checks it */
/* "downlevelIteration" is advanced, it is interesting when you compile to older versions of JS. In rare cases forloops can gives us issues, therefore this option is here. It outputs verbose code that lets us checks better :) */
/* noEmitOnError on true prevents compiling when there are errors (can be frustrating when using dom api because you have to say to TS that we have the dom-element*/
/* if there is only 1 error, NO files will be emitted! */