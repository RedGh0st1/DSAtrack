// You are given two non-negative integers num1 and num2.

// In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.

// For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, after one operation, num1 = 4 and num2 = 1.
// Return the number of operations required to make either num1 = 0 or num2 = 0.

// *
//  * @param {number} num1
//  * @param {number} num2
//  * @return {number}
//  */

var countOperations = function (num1, num2) {
  // base case: if num1 or num2 is zero, return 0 operations
  if (num1 === 0 || num2 === 0) return 0;
  //
  let operations = 1;

  if (num1 <= num2) {
    // subtract num1 from num2 and make a recursive call num1, num2 - num1
    return operations + countOperations(num1, num2 - num1);
  } else {
    // subtract num2 from num1 and make a recursive call num1 - num2, num2
    return operations + countOperations(num1 - num2, num2);
  }
};

console.log(countOperations(2, 3));
//output = 3
console.log(countOperations(10, 10));
//output = 1
