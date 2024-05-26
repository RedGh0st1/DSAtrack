// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function (s: string): number {
  let char: { [key: string]: number } = {};
  for (let i: number = 0; i < s.length; i++) {
    if (char[s[i]]) {
      char[s[i]]++;
    } else {
      char[s[i]] = 1;
    }
  }
  for (let i: number = 0; i < s.length; i++) {
    if (char[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

// Example 1:
console.log(firstUniqChar("leetcode"));
// Input: s = "leetcode"
// Output: 0

// Example 2:
console.log(firstUniqChar("loveleetcode"));
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
console.log(firstUniqChar("aabb"));
// Input: s = "aabb"
// Output: -1
