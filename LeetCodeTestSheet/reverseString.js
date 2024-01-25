// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
  // 1. What is the input?         array of letters
  // 2. What is the output?        array of letters reversed
  // 3. For each example, why does the input lead to the output?  
  // 4. Add more examples.
  // 5. Explain each example in your own words. What is the input? What should the output be and why
 */

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  3;
};

// Example 1:
// Input: s = ["h","e","l","l","o"]
console.log(reverseString(["h", "e", "l", "l", "o"]));
// Output: ["o","l","l","e","h"]

// Example 2:
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
// Output: ["h","a","n","n","a","H"]
