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
