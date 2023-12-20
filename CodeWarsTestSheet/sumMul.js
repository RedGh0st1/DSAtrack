// Can you explain this code line by line?

function sumMul(n, m) {
  if (m.length === 0 || m <= 0) {
    return "INVALID"
  }
  let result = 0
  // In this case, the loop is starting at the given number n, and will end when the number i is equal to m.
  // It is incrementing by n each time, meaning it will only consider multiples of n.
  for (let i = n; i < m; i += n) {
    result += i
  }
  return result
}

console.log(sumMul(0, 0))
// output>>> "INVALID"
console.log(sumMul(2, 9))
// output >>>> 20
console.log(sumMul(4, -7))
// output >>>> "INVALID"
console.log(sumMul(2, 9))
// output ==> 2 + 4 + 6 + 8 >>>>> 20
console.log(sumMul(3, 13))
// output ==> 3 + 6 + 9 + 12 >>>>> 30
console.log(sumMul(4, 123))
// output ==> 4 + 8 + 12 + ... >>>> 1860
