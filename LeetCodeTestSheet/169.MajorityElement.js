// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

var majorityElement = function (nums) {
  let map = new Map();
  let count = 0;
  let FreqNum;

  //  put all elements into a map and record their frequency
  nums.forEach((el) => {
    map.set(el, (map.get(el) || 0) + 1);
  });

  console.log("this is map on line :", map);

  //  find out the number with maximum frequency
  map.forEach((value, key) => {
    console.log("This is the value:", value, "This the key:", key);
    //  if no freqNum exist yet or current one has more than freqNum's then set
    //
    if (value > count) {
      FreqNum = key;
      console.log("This is FreqNum", FreqNum);
      count = value;
      console.log("this is the count:", count);
    }
  });

  return FreqNum;
};

// Example 1:
console.log(majorityElement([3, 2, 3]));
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Example 3:
console.log(majorityElement([6, 5, 5]));
// Input: nums = [6,5,5]
// Output = 5
