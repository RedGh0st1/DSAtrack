// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  //  Check if array is an array
  if (!Array.isArray(array) || array.length <= 1) return 0;
  // add all  elements of the array together and return the result
  let count = array.reduce((acc, curr) => acc + curr, 0);
  // find the smallest number in the array
  let min = Math.min(...array);
  // find the largest number in the array
  let max = Math.max(...array);
  // get the subtract the smallest and largest number from the count total
  let total = count - max - min;
  // return the total
  return total;
}

console.log(sumArray(null) === 0);
console.log(sumArray([]) === 0);
console.log(sumArray([3]) === 0);
console.log(sumArray([3, 5]) === 0);
console.log(sumArray([6, 2, 1, 8, 10]) === 16);
console.log(sumArray([0, 1, 6, 10, 10]) === 17);
console.log(sumArray([-6, -20, -1, -10, -12]) === -28);
console.log(sumArray([-6, 20, -1, 10, -12]) === 3);
