// the issue is that the numbers variable is a string instead of an array.
// The for loop is used to iterate over the numbers array,
// but the numbers array is a string instead of an array of numbers.

// To fix this issue, you can use the split() method to convert the string into an array of numbers:

function highAndLow(numbers) {
  var numArr = numbers.split(" ")

  let high = 1
  let low = numArr[0]

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > high) {
      high = numArr[i]
    }
    if (numArr[i] < low) {
      low = numArr[i]
      console.log("this is low:", low)
    }
  }
  return [high, low]
}
console.log(highAndLow("1 2 3 4 5"))
// return "5 1"
console.log(highAndLow("1 2 -3 4 5"))
// return "5 -3"
// console.log(highAndLow("1 9 3 4 -5"))
// return "9 -5"

// const chai = require("chai")
// const assert = chai.assert
// chai.config.truncateThreshold = 0

// describe("Example tests", () => {
//   it("Test 1", () => {
//     assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9")
//   })
//   it("Test 2", () => {
//     assert.strictEqual(highAndLow("1 2 3"), "3 1")
//   })
// })
