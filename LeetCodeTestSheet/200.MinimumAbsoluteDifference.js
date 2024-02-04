// 1200. Minimum Absolute Difference
// Easy
// Topics
// Companies
// Hint
// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// The condition compliment <= 4 might be excluding some valid pairs. If you're looking for pairs with the minimum absolute difference, you should check if compliment is equal to the current minimum difference and push pairs accordingly.

var minimumAbsDifference = function (arr) {
  let minimumArr = [];
  let minAbsDif = Infinity;
  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    let compliment = Math.abs(arr[i] - arr[i - 1]);

    if (compliment < minAbsDif) {
      minAbsDif = compliment;
      minimumArr = [[arr[i - 1], arr[i]]];
    } else if (compliment === minAbsDif) {
      // minAbsDif = compliment
      minimumArr.push([arr[i - 1], arr[i]]);
    }
  }

  return minimumArr;
};

// Example 1:
console.log(minimumAbsDifference([4, 2, 1, 3]));
// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

// Example 2:
console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]

// Example 3:
// console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]))
// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]
