// Complete the function power_of_two / powerOfTwo(or equivalent, depending on your language) that
// determines if a given non-negative integer is a power of two. From the corressponding WIKIpedia entry:

//a power of two is a number of the form 2n where n is an integer,
// i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

function isPowerOfTwo(n) {
  if (n < 0) return false
  console.log(n)
  let result = Number.isInteger(Math.log2(n / 2))

  return result
}

console.log(isPowerOfTwo(1024)) // -> true
console.log(isPowerOfTwo(4096)) // -> true
console.log(isPowerOfTwo(333)) // -> false
console.log(isPowerOfTwo(1)) // -> true
