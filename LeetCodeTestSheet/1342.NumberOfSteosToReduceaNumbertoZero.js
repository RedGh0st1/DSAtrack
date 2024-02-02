// 1342. Number of Steps to Reduce a Number to Zero
//Easy

// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  // create a variable to store the number of steps

  if (num === 0) return 0;
  // If the number num is even, the function makes a recursive call by dividing the number by 2 (num/2).
  //  count the step of dividing by 2
  if (num % 2 === 0) return numberOfSteps(num / 2) + 1;
  // If the number num is odd, the function makes a recursive call by subtracting 1 from the number (num - 1).
  //  count the step of subtracting 1.
  else return numberOfSteps(num - 1) + 1;
};

// By adding 1 in each recursive call, the function is keeping track of the number of steps taken to reach the base case, which is when num becomes 0. This allows the function to return the total number of steps required to reduce the initial input to 0 through a series of division by 2 and subtraction by 1 operations.
// Initial Call: The function is called with the argument 14.

// num is not equal to 0.
// num is even (14 % 2 === 0 is true), so it calls numberOfSteps(14 / 2) and adds 1.
// Recursive Call (1st level): The function is called with the argument 7 (14 / 2).

// num is not equal to 0.
// num is odd (7 % 2 === 1 is true), so it calls numberOfSteps(7 - 1) and adds 1.
// Recursive Call (2nd level): The function is called with the argument 6 (7 - 1).

// num is not equal to 0.
// num is even (6 % 2 === 0 is true), so it calls numberOfSteps(6 / 2) and adds 1.
// Recursive Call (3rd level): The function is called with the argument 3 (6 / 2).

// num is not equal to 0.
// num is odd (3 % 2 === 1 is true), so it calls numberOfSteps(3 - 1) and adds 1.
// Recursive Call (4th level): The function is called with the argument 2 (3 - 1).

// num is not equal to 0.
// num is even (2 % 2 === 0 is true), so it calls numberOfSteps(2 / 2) and adds 1.
// Recursive Call (5th level): The function is called with the argument 1 (2 / 2).

// num is not equal to 0.
// num is odd (1 % 2 === 1 is true), so it calls numberOfSteps(1 - 1) and adds 1.
// Recursive Call (6th level): The function is called with the argument 0 (1 - 1).

// num is now equal to 0, so it returns 0.
// Backtracking: The function starts backtracking through the recursive calls.

// The result of the call at the 6th level is 0, so it adds 1 to get 1.
// Backtracking: The function continues to backtrack.

// The result of the call at the 5th level is 1, so it adds 1 to get 2.
// Backtracking: The function continues to backtrack.

// The result of the call at the 4th level is 2, so it adds 1 to get 3.
// Backtracking: The function continues to backtrack.
// The result of the call at the 3rd level is 3, so it adds 1 to get 4.
// Backtracking: The function continues to backtrack.
// The result of the call at the 2nd level is 4, so it adds 1 to get 5.
// Backtracking: The function continues to backtrack.
// The result of the call at the 1st level is 5, so it adds 1 to get the final result of 6.
// So, numberOfSteps(14) returns 6 because it took 6 recursive steps to reduce 14 to 0 through the specified operations.

// Example 1:``
// console.log(numberOfSteps(14))
// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

// Example 2:
// Input: num = 8
// console.log(numberOfSteps(8))
// Output: 4
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.

// Example 3:
// console.log(numberOfSteps(123))
// Input: num = 123
// Output: 12
