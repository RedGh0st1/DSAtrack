// Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

Input: (nums = [1, 3, 5, 6]), (target = 5)
// Output: 2

Input: (nums = [1, 3, 5, 6]), (target = 2)
// Output: 1

// @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */

// my sudo
// declare a  result variable
// iterate thru nums string
// if num element is equal to target
//  return the index ( you can just return i since thats the index of nums)
// else if the target is not there and target is greater  than current nums and  less that nums and less than previous
//  return the inde of where that element belongs
//   end iteration
//  return variable called result

//   chat sudo
// Declare a result variable to store the index where the target belongs
// Iterate through the elements of nums
// If the current element is equal to the target, return the index
// If the target is not found, but it is greater than the current element

// and less than the next element (or the end of the array),
// return the index where the target should be inserted

// If the target is less than all elements in nums, return 0
// If the target is greater than all elements in nums, return the last indexs

var searchInsert = function (nums, target) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    } else if (nums[i] > target && target < nums[i - 1]) {
      return i
    } else if (nums[i] < target && target > nums[i + 1]) {
      return i
    }
  }
  return result
}
