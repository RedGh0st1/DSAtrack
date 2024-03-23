// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
  // create  an empty array to store the results
  let numsArr = [];
  // iterate  from 0 up to n (inclusive) using a for loop
  for (let i = 0; i <= n; i++) {
    // add 2 raised to the current value of 'i' to the end of the array
    numsArr.push(2 ** i);
  }
  //  return the resulting array
  return numsArr;
}

// another version  that useing Math.pow(exponent, base)
// function powersOfTwo(n){
//   var result = [];
//   for (var i = 0; i <= n; i++) {
//     result.push(Math.pow(2, i));
//   }
//   return result;
// }

console.log(powersOfTwo(0)); // [1]
console.log(powersOfTwo(1)); // [1, 2]
console.log(powersOfTwo(2)); // [1, 2, 4]
