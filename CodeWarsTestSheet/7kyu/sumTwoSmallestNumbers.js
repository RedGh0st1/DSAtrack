// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  const sortedNum = numbers.sort((a, b) => a - b);
  console.log(sortedNum);
  return sortedNum[0] + sortedNum[1];
}

// another version 1
// function sumTwoSmallestNumbers(numbers) {
//   let min = Number.MAX_SAFE_INTEGER;
//   let second = Number.MAX_SAFE_INTEGER;

//   let num;
//   for (i = 0; i < numbers.length; i++) {
//     num = numbers[i];
//     if (num < min) {
//       second = min;
//       min = num;
//     } else if (num < second) {
//       second = num;
//     }
//   }

//   return min + second;
// }

// another version 2
// var sumTwoSmallestNumbers = (numbers) => numbers.sort((a,b)=> a-b).slice(0, 2).reduce((a,b)=> a+b)
