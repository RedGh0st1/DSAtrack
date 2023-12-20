// * @param {string} s
// * @return {number}
// */
// Example 1:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 2:
// Input: s = "hello world"
// Output: 5
// Explanation: The last word is "world" with length 5.

// Example 3:
// Input: s = "a good   example"
// Output: 5
// Explanation: The last word is "example" with length 5.

// Example 4:
Input: s = "  Bob hit a ball, the hit BALL flew far after it was hit. "
// Output: 5
// Explanation: The last word is "ball" with length 5.

var lengthOfLastWord = function (s) {
  // return s.trim().split(' ').pop().length;
  let newStr = s.trim().split(" ")
  console.log(newStr)
}

console.log(lengthOfLastWord(s))
