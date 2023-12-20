// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

// HINT: Start by returning a function that takes in a number and returns a number.
// HINT: Call each of the functions in the correct order. Each time passing the output of the previous function into the next function.

// example 1:
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation: Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// example 2
//Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation: Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000

x = 4
functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x]
// expected output = 65

// x = 1
// input2 = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]
// // expected output = 1000

var compose = function (functions) {
  // Start by returning a function that takes in a number and returns a number.
  // Call each of the functions in the correct order. 
  // Each time passing the output of the previous function into the next function.
  return function (x) {
     let result 
     for (let i = 0; i < functions.length; i++) {
      const result= functions[i](x);
      
     }
     return result
  }
}
// **
//  * const fn = compose([x => x + 1, x => 2 * x])
//  * fn(4) // 9
//  */

/
