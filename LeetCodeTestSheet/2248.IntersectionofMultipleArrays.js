// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

var intersection = function (nums) {
  let map = new Map();
  let result = [];
  let temp;

  nums.forEach((num) => {
    temp = intersectionHelper(num, map);
  });

  map.forEach((value, key) => {
    if (value === nums.length) result.push(key);
  });
  return result.sort((a, b) => a - b);
};

const intersectionHelper = (arr, map) => {
  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i])) {
      map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
};

// Example 1:
console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]
// Explanation:
// The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].

// Example 2:
console.log(
  intersection([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
// Input: nums = [[1,2,3],[4,5,6]]
// Output: []
// Explanation:
// There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].

//Example 3:
console.log(
  intersection([
    [7, 34, 45, 10, 12, 27, 13],
    [27, 21, 45, 10, 12, 13],
  ])
);
//output: [10,12,13,27,45]

//Example 4:
console.log(
  intersection([
    [4, 43, 15, 30, 27, 22],
    [15, 30, 43, 27, 10, 4],
  ])
);
//output: [4,15,27,30,43]
