// Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce
// (or equivalent, depending on your language's naming conventions)
// should return a new array equivalent to performing exactly 1 complete pass on the original array.
// Your function should be pure, i.e. it should not mutate the input array. output should be [7, 5, 3, 1, 2, 4, 6, 8, 9]

function bubblesortOnce(arr) {
    var newArr = arr.map((array, i)=>{ array

    })
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//     }
//   }
//   return arr
// }

const arr = bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])
console.log(arr)
// output >>> [7, 5, 3, 1, 2, 4, 6, 8, 9]
