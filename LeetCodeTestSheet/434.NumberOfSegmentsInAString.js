// 434. Number of Segments in a String
// Easy
// Given a string s, return the number of segments in the string.=
// A segment is defined to be a contiguous sequence of non-space characters.

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  // edge case to check if the string is empty or length is 0
  if (s.length === 0 || s.length === "") return 0;

  // create a variable to store the string array
  let strArr = [];

  // turn string into an array
  // iterate thru the array
  s.split(" ").map((e) => {
    // if the element is not an empty string
    if (e !== "") {
      //  push element into the strArr variable
      strArr.push(e);
    }
  });

  // return the length of the strArr array
  return strArr.length;
};

// return segmentLength.length
// Example 1:
// console.log(countSegments("Hello, my name is John"))
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// Example 2:
// console.log(countSegments("Hello"))
// Output: 1

//Example: 3
// console.log(countSegments(""))
//output => 0

//Example: 4
// console.log(countSegments("                "))
