// Given a string s of lower and upper case English letters.

// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

// Notice that an empty string is also good.

/**
 * @param {string} s
 * @return {string}
 */
// helper function to check for bad or good pair
const badPair = (a, b) => a.toUpperCase() === b.toUpperCase() && a !== b;

var makeGood = function (s) {
  //  initialize stack variable with empty array
  const stack = [];

  // iterate thru the string from back to front
  for (const char of s) {
    // Add the current character if the stack is empty or there is not a bad pair
    let top = stack[stack.length - 1];
    if (stack.length === 0 || !badPair(char, top)) {
      stack.push(char);
      // If the top of stack is the same as the current character (but different cases),
      // "delete" both characters by popping the stack and NOT pushing the current character.
    } else if (top.toUpperCase() === char.toUpperCase() && badPair(char, top)) {
      stack.pop();
    }
  }

  return stack.join("");
};

// Example 1:
console.log(makeGood("leEeetcode") === "leetcode");

// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

// Example 2:
console.log(makeGood("abBAcC") === "abcCBA");
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""

// Example 3:
console.log(makeGood("s") === "s");
// Output: "s"
