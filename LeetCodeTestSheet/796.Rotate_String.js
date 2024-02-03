// 796. Rotate String
// Solved
// Easy
// Topics
// Companies
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// /**
//  * @param {string} s
//  * @param {string} goal
//  * @return {boolean}
//  */

var rotateString = function (s, goal) {
  if (s === goal) return true;
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    console.log("Current state:", s, "Goal:", goal, "left:", s[i]);

    if (newStr === goal) {
      console.log("Rotation successful!");
      return true;
    } else if (newStr !== goal) {
      newStr = s.slice(1) + s.slice(0, 1);
      s = newStr;
      console.log("this is on linie 782: ", s);
      console.log("Checking new String:", newStr);
    }
  }

  console.log("Rotation unsuccessful");
  return false;
};

// Example 1:
console.log(rotateString("abcde", "cdeab"));
// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false
