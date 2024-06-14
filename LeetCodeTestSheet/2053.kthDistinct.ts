// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

var kthDistinct = function (arr: string[], k: number): string {
  const count: { [key: string]: number } = {};
  for (let i: number = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 1;
    } else {
      count[arr[i]]++;
    }
  }
  let sum = 0;
  for (let key in count) {
    if (count[key] === 1) {
      sum++;
    }
    if (sum == k) {
      return key;
    }
  }
  return "";
};

// Example 1:
console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
// Input: arr = ["d","b","c","b","c","a"], k = 2
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned.

// Example 2:
console.log(kthDistinct(["aaa", "aa", "a"], 1));
// Input: arr = ["aaa","aa","a"], k = 1
// Output: "aaa"
// Explanation:
// All strings in arr are distinct, so the 1st string "aaa" is returned.

// Example 3:
console.log(kthDistinct(["a", "b", "a"], 3));
// Input: arr = ["a","b","a"], k = 3
// Output: ""
// Explanation:
// The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".
