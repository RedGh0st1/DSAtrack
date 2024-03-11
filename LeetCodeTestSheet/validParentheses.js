// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// GOTTA USE STACK
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// @param {string} s
// @return {boolean}

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// let s = "()"
// let s = "()[]{}"
// let s = "(]"
let s = "()";
// let s = "{[]}"
// let s = "([}}])"
var isValid = function (s) {
  // create an empty array to store opening brackets and their positions in string
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let open = s[i];
    if (open === "(" || open === "{" || open === "[") {
      stack.push(open);
    } else {
      if (stack.length === 0) {
        return false;
      } // if there are no opening brackets, return false

      // create an empty array to store closing brackets and their positions in string
      let head = stack.pop();
      if (
        (open === ")" && head !== "(") ||
        (open === "{" && head !== "{") ||
        (open === "]" && head !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isValid(s));
// output: true

console.log(isValid(")") === false);
console.log(isParenthesisBalanced("))((") === false);
console.log(isParenthesisBalanced("(2+3)") === true);
console.log(isParenthesisBalanced(")2+3(") === false);
console.log(isParenthesisBalanced("(ud*%()8))") === false);
console.log(isParenthesisBalanced("]") === false);
console.log(isParenthesisBalanced("[]") === true);
console.log(isParenthesisBalanced("[()]") === true);
console.log(isParenthesisBalanced("(]") === false);
console.log(isParenthesisBalanced("[(])") === false);
