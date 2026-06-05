// Comments are non-executable text written inside the source code to improve readability, documentation, maintenance, and collaboration.

// There are two different types of comments we can add in the JavaScript. 

// 1. Single-line comments: We can use `//` to add a single-line comment. 
// `console.log` is a print statement. Whenever we want to print something, we are going to use this simple statement in JavaScript. 
console.log("Hello, world!"); 


// 2. Multi-line comments: We can use `/*` to start a multi-line comment and `*/` to end it.
/*
This code is responsible for
user authentication process
*/


// 3. JSDoc Comments (Special Documentation Variant) Starts with /** and ends with */.
/*
 *This is a function that is going to help us calculate the sum of two different numbers. 
 *@param {number} a - The first number to be added.
 *@param {number} b - The second number to be added.
 *@returns {number} The sum of a and b.
 *@author Kaliraj T (kalirajt@gmail.com)
 *@version 1.0
 *@created 2026-05-20
 */
function add(a, b) {
    return a + b; //calculating the sum of a and b and returning the result
}