// Given the start and end letterbox numbers, write a method to return the frequncy of all 10 digits painted.
// EXAMPLE
//  FOR START = 125, and END = 132
//  The digit frequencies are 1 x 0, 9 x 1, 6 x 2, 3 x 3, 0 x 4, 1 x 5, 1 x 6, 1 x 7, 1 x 8, 1 x 9
//  and so the method would return [1,9,6,3,0,1,1,1,1,1]
// 0 is painted 1 time
// 1 is painted 9 times
// 2 is painted 6 times
// 3 is painted 3 times
// 4 is painted 0 times
// 5 is painted 1 time
// 6 is painted 1 time
// 7 is painted 1 time
// 8 is painted 1 time
// 9 is painted 1 time
var paintLetterboxes = function (start, end) {
  let results = Array(10).fill(0)
  console.log(results)
  for (let i = start; i <= end; i++) {
    for (const j of i + "") {
      results[j]++
    }
  }
  return results
}

// }
// alternative code 2
// var paintLetterboxes = function (start, end) {
//   let results = {}
//   for (let i = start; i <= end; i++) {
//     const digits = String(i).split("")
//     console.log("this the first loop with String(i).split('')(digits):", digits)

//     for (const digit of digits) {
//       console.log("digit:", digit)
//       console.log("results:", results)
//       results[digit] = (results[digit] || 0) + 1
//       console.log("this the second loop :", results[digit])
//     }
//   }
//   return Object.values(results)
// }
// // alternative code 3
// var paintLetterboxes = function (start, end) {
//   let results = new Map()
//   for (let i = start; i <= end; i++) {
//     const digits = String(i).split("")
//     for (const digit of digits) {
//       results.set(digit, (results.get(digit) || 0) + 1)
//     }
//   }
//   return Array.from(results.values())
// }

console.log(paintLetterboxes(125, 132))

console.log(paintLetterboxes(125, 132))

console.log(paintLetterboxes(125, 132))
//output>>>>>[1,9,6,3,0,1,1,1,1,1]
