// @param {number[]} digits
//  * @return {number[]}
//  */

Input: digits = [4, 3, 2, 1]
//  Output: [4,3,2,2]

// Input: digits = [9]
// Output: [1,0]

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += 1 // auto add to the array [9] [9,10]
    if (digits[i] < 10) {
      break
    }
    digits[i] = 0
  }
  digits.unshift(1)
  return digits
}
// The abovce code is a function that takes an array of digits as an argument
// returns an array of digits with one added to the number represented by the array.
// The function starts by iterating over the digits array from right to left using a for loop.
// It adds 1 to the current digit and checks if it is less than 10. If it is less than 10,
// it breaks out of the loop. If it is greater than or equal to 10,
// it sets the current digit to 0 and continues iterating over the next digit.
// If all digits are 9s, then the function will add a new digit 1 at the beginning of the array.

// REFRACTORED
// function plusOne(digits) {
//   return digits.map((digit, index) => {
//     if (index === digits.length - 1) {
//       return digit + 1;
//     } else {
//       return digit;
//     }
//   });
// }

console.log(plusOne(digits))
