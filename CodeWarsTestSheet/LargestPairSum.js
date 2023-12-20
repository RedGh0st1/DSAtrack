// function largestPairSum(numbers) {
//   let result = []
//   let lrg = 0 ------> .   let lrg = should have been Math.min(...numbers)
//   let lrg2 = 0 ------> .    let lrg2 = Math.min(...numbers)
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > lrg) {
// (lrg2 = lrg should have been here)
//       lrg = numbers[i]
//     } else if (numbers[i] > lrg2 ) {
//       lrg2 = numbers[i]
//     }
//   }
//   result = lrg + lrg2
//   return result
// }

function largestPairSum(numbers) {
  let maxSum = numbers[0] + numbers[1]

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      let max = numbers[i] + numbers[j]
      if (max > maxSum) {
        maxSum = max
      }
    }
  }
  return maxSum
}

// let num1 = largestPairSum([10, 14, 2, 23, 19])
// let num2 = largestPairSum([99, 2, 2, 23, 19])
let num3 = largestPairSum([-100, -29, -24, -19, 19])
// let num4 = largestPairSum([1, 2, 3, 4, 6, -1, 2])
// let num5 = largestPairSum([-10, -8, -16, -18, -19])

// console.log(largestPairSum(num1))
// output >>> 42 (23 + 19)

//  console.log(largestPairSum(num2))
// output >>> 122 (99 + 23)

console.log(largestPairSum(num3))
// output >>> 0  (-19 + 19 )

// console.log(largestPairSum(num4))
// output >>> 10 ( 4 + 6)

// console.log(largestPairSum(num5))
// output >>> - 18 ( -10 + -8)
