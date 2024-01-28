// 1952. Three Divisors

// Easy  ----------// Solved
// Topics
// Companies
// Hint
// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

// An integer m is a divisor of n if there exists an integer k such that n = k * m.

/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 3) return true;
  else return false;
};

// Example 1:
// console.log(isThree(2))
// Input: n = 2
// Output: false
// Explantion: 2 has only two divisors: 1 and 2.

// Example 2:
// console.log(isThree(4))
// Input: n = 4
// Output: true
// Explantion: 4 has three divisors: 1, 2, and 4.
