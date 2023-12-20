// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder

  if (m >= n) return m % n
  if (n >= m) return n % m
  else return NaN
}

console.log(remainder(17, 5))
// output >> 2
console.log(remainder(13, 72))
// output >> 7
console.log(remainder(72, 13))
// output >>
console.log(remainder(1, 0))
// output >> NaN 0
console.log(remainder(0, 0))
// output >> NaN 0
console.log(remainder(0, -1))
// output >> NaN 0
