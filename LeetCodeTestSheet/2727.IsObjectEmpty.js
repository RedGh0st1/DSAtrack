// Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

var isEmpty = function (obj) {
  if (Object.keys(obj).length > 0) return false;
  else return true;
};

// Example 1:
console.log(isEmpty({ x: 5, y: 42 })); // Output: true
Input: obj = { x: 5, y: 42 };
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.

// Example 2:
console.log(isEmpty({})); // Output: true
// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
