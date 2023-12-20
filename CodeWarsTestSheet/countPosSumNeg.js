// correct with the calculation but wrong output { 10, -65} it needs to come out as an array [10,-65]
// function countPositivesSumNegatives(input) {
//   let result = input.reduce(
//     (total, num) => {
//       if (num > 0) {
//         total.positives++
//         // console.log(positives)
//       } else {
//         total.negatives += num
//       }
//       return total
//     },
//     { positives: 0, negatives: -0 }
//   )
//   return result
// }

// No, this code is not correct. It should return two values,
// the sum of the positive numbers and the sum of the negative numbers, not both at the same time.

// function countPositivesSumNegatives(input) {
//   let result = []
//   let pos = 0
//   let neg
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] < 0) {
//       neg -= input[i]
//       result.push(neg)
//     } else {
//       pos += input[i]
//       result.push(pos)
//     }
//   }
//   return result
// }

function countPositivesSumNegatives(input) {
  let arr = []
  if (input === null || input.length === 0) {
    return arr
  }
  // pos++ is shorthand for count = count + 1.
  // This is an increment operator and is used to increase the value of count by 1.
  // The former increments the value of count by 1,
  //pos+=input[i] whereas the latter increases the value of count by the value of the current element in the input array.
  let pos = 0
  let neg = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      pos++
    } else {
      neg += input[i]
    }
  }
  arr.push(pos, neg)
  return arr
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
)

console.log(
  countPositivesSumNegatives([
    [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14],
  ])
)
