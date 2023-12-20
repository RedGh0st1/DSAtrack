// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2]
// Explanation: Your function should return length = 2,
// with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned length.
// For example if you return 2 with nums = [2,2,3,3]
// or nums = [2,2,0,0], your answer will be accepted.

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3]
// Explanation: Your function should return length = 5,
// with the first five elements of nums containing 0, 1, 3, 0, and 4.
// Note that the order of those five elements can be arbitrary.

nums = [3, 2, 2, 3]
val = 3
// ** output >>[2,2]
// nums = [0, 1, 2, 2, 3, 0, 4, 2]
// val = 2
// // ** output >>[0, 1, 3, 0, 4]
var removeElement = function (nums, val) {
  let results = 0

  for (let i = 0; i < nums.length; j++) {
    if (nums[i] !== val) {
      results = nums[j]
      i++
    }
  }

  return i
}

nums = [0, 1, 2, 2, 3, 0, 4, 2]
val = 2
//  output >>[0, 1, 3, 0, 4]

// nums = [3, 2, 2, 3]
// val = 3
// ** output >>[2,2]

// var removeElement = function (nums, val) {
//   console.log(nums)
//   let K = nums.filter((num) => num !== val)
//   console.log(K)
//   return K
// }

console.log(removeElement(nums, val))
