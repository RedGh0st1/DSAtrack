// Given an array of strings operations containing a list of operations,
// return the final value of X after performing all the operations

// * @param {string[]} operations
//  * @return {number}
//  */

operations = ["++X", "++X", "X++"]
// output = 1

var finalValueAfterOperations = function (operations) {
  let X = 0
  let result = 0
  for (let i = 0; i < operations.length; i++) {
    console.log(operations[i])
    // increment = ++X || X++
    // decrement = --X || X--
    if (operations[i] === "--X" || operations[i] === "X--") {
      result -= 1
    } else if (operations[i] === "X++" || operations[i] === "++X") {
      result += 1
    }
  }
  return result
}

console.log(finalValueAfterOperations(operations))
