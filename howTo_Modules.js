////////////////////
// module.exports //
////////////////////

// export:

let Object = {          // What's the style convention? Write it capitalized or lower-cased?
    property : 'content',
    something() {return 'something'}
};
module.exports = Object;

/* I can also wrap any collection of data and functions in an object
and export it like that: */

module.exports = {
    // code block
};

// import:

const object1 = require('./filenameOfModule.js');

object1.property    // (call property)
object1.something() // (call function)



///////////////////////////////////////////
// ES6: default export and named exports //
///////////////////////////////////////////

// (default exports and named exports can be used together.)


// Default Export //

// Works similarly to the module.exports syntax, allowing us to export one module per file.

// export:

let ObjectX = {};
export default ObjectX;

// import:

import SomeNameX from './filenameOfModule';     // !!! WITHOUT FILE EXTENSION !!!

SomeNameX.property      // (call)
SomeNameX.method()      // (call)


// Named Exports //

// Named exports allow us to export data through the use of variables.

// export:

let variableX = "something";
function someFunction() {
}

export { variableX, someFunction };

/* Named exports offer a way to change the name of variables when exporting or importing
by 'as' keyword. */

export { variableX as otherNameX, someFunction as noIdea };

/* Named exports are also distinct in that they can be exported as soon as they are declared,
by placing the keyword export in front of variable declarations: */

export let variableY = "something";
export function someOtherFunction() {
};     // semo-colons or not ??


// import:

import { otherNameX, noIdea as methodX } from './filenameOfModules'; // maybe works without ./ ?

// import entire module as an alias:

import * as ModulZ from './filenameOfModules';

ModulZ.otherNameX;  // call
ModulZ.noIdea();    // call