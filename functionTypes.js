/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
https://www.w3schools.com/js/js_functions.asp
https://www.codecademy.com/learn/introduction-to-javascript
*/

//////////////////////////////////
// Function types of JavaScript //
//////////////////////////////////


////////////////////////////
// Function Declarations: //
////////////////////////////

//keyword, function name (=identifier), parameters, body.
function fName(par1, par2) {
    return par1 + par2;
} //no semi-colon!

/* Call function:
par1 and par2 are paramenters, but when we call the function,
the inputs (arg1, arg2) are called arguments. */
fName(arg1, arg2);


////////////////////////////
// Function Expressions: //
////////////////////////////

/* keyword (const/let/var), variable name, =, keyword, parentheses, parameters (or empty),
code block, semi-colon.
*/
const varName1 = function (par1, par2) {
    return par1 + par2;
}; //semi-colon.


// Arrow function syntax //

/* keyword (const/let/var), variable name, =,
parentheses (with parameters or empty) followed by an arrow, body, semi-colon. */

const varName2 = () => {
    //function body
};


// There are several ways to refactor (umgestalten) arrow function syntax!


// Concise body //                          (concise = knapp, bündig, geballt)

/* Functions that take a single parameter should not use parentheses. But if a function takes
zero or multiple parameters, parentheses are required!
A function composed of a sole single-line block is automatically returned so the return keyword
can be removed (implicit return).
A function composed of a sole single-line block does not need brackets. */

// keyword, variable name, =, parameter, sole single-line block, semi-colon.
const varName3 = par => par + 1;


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// Predefined functions //
// = e. g. built-in functions like eval()


// Function constructor //
var sum = new Function('a', 'b', 'return a + b');
ergebnis = sum(2, 6);


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// function (method) as an object property //
// When objects have key-function pairs, we call the function a method.

const object1 = {
    method1 : function() {          // anonymous function
        return "something";
    },
    method2 : () => {               // anonymous function, arrow function
        return "something";
    }
};

object1.method1()               // call method.

// Method syntax ES6 //

const object2 = {
    method() {return "something"}
};


//////////////////////////////


// Methods of Classes //
// e. g. getter and setter methods

class Klasse {
    constructor(par) {
        this._property = par;       // underline is a style convention. It indicates that
    }                               // these properties shouldn't be accessed directly.
    get property() {
        return this._property;
    }               // In Classes you can not include commas between methods.
}

const instance1 = new Klasse(arg);      // create an instance of class Klasse.

instance1.property()        // call method of instance.