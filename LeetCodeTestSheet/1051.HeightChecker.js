// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
// Return the number of indices where heights[i] != expected[i].

// heights:  [5, 1, 2, 3, 4]
// expected: [1, 2, 3, 4, 5]

// Comparisons:
// (5, 1) (1, 2) (2, 3) (3, 4) (4, 5)

var heightChecker = function (heights) {
  // make copy heights array
  const copyOfHeights = [...heights];

  //sort the copied hieghts array in ascending order
  const expected = copyOfHeights.sort((a, b) => a - b);

  //variable count set to zero
  let count = 0;

  // iterate over each element in original array and compare with sorted one
  for (let i = 0; i < heights.length; i++) {
    // compare each element in heights array to each element in the sort expected array and count if not  equal
    if (heights[i] !== expected[i]) {
      //count each time a element is not equal at the same index
      count++;
    }
  }

  // return the count of unmatch indices
  return count;
};

// Example 1:
console.log(heightChecker([1, 1, 4, 2, 1, 3]));
// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

// Example 2:
console.log(heightChecker([5, 1, 2, 3, 4]));
// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.

// Example 3:
console.log(heightChecker([1, 2, 3, 4, 5]));
// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.
