// 2404. Most Frequent Even Element
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

var mostFrequentEven = function (nums) {
  // 1. Init an empty object counter {}
  let obj = {};
  // 2. For each num in nums:
  for (let num of nums) {
    //     2a. Check if number is even
    if (num % 2 === 0) {
      //     2b. If even:
      //         - if num is a key in the object, add 1 to value
      if (obj[num]) {
        obj[num] += 1;
      } else {
        //         - else: set key with value of 1
        obj[num] = 1;
      }
    }
  }

  // 3. let maxValue = 0, let maxKey = -1
  let maxValue = 0;
  let maxKey = -1;

  // 4. Loop through keys in the object. For each key:
  for (let key in obj) {
    //     4a. get the value for the key
    let value = obj[key];
    //     4b. if the value > maxValue:
    if (value > maxValue) {
      //           maxKey = current key
      maxKey = key;
      //           maxValue = current value
      maxValue = value;
      //     4c. else if value === maxValue:
    } else if (value === maxValue) {
      //            if current key < maxKey:
      if (key < maxKey) {
        //             replace maxKey
        key = maxKey;
      }
    }
  }

  // 5. return maxKey
  return maxKey;
};

// orignal: version
// var mostFrequentEven = function(nums){
//   const count = nums.reduce((acc, cur)=>{
//     if(cur % 2 === 0){
//       acc[cur] = (acc[cur] || 0) + 1
//     }
//     return acc
//   },{})

//   let largest = null
//   for (let key in count) {

//     if(largest === null || count[key] > count[largest]){
//       largest = key

//    }
//   }

//   return largest ? parseInt(largest) : -1
// }
// Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.
// Example 2:

// Input: nums = [4,4,4,9,2,4]
// Output: 4
// Explanation: 4 is the even element appears the most.
// Example 3:

// Input: nums = [29,47,21,41,13,37,25,7]
// Output: -1
// Explanation: There is no even element.
