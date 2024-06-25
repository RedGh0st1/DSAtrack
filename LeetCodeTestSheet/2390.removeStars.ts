// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:

// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.

function removeStars(s: string): string {
  //create stack variable
  let stack: any[] = [];

  // iterate thru the string
  for (const el of s) {
    // the first element i see is a "*" pop the top of the stack
    if (el === "*") {
      stack.pop();
    } else if (el !== "*") {
      stack.push(el);
    }
  }

  return stack.join("");
}

// Example 1:
console.log(removeStars("leet**cod*e"));
// Input: s = "leet**cod*e"
// Output: "lecoe"
// Explanation: Performing the removals from left to right:
// - The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
// - The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
// - The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
// There are no more stars, so we return "lecoe".

// Example 2:
console.log(removeStars("erase*****"));
// Input: s = "erase*****"
// Output: ""
// Explanation: The entire string is removed, so we return an empty string.
