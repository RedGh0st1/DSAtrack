// 1979. Find Greatest Common Divisor of Array
// Easy

// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

/**
 * @param {number[]} nums
 * @return {number}
 // what is input ? an array of sorted numbers
 // what is the output ? the smallest number that is divide by the largest and smallest number in the array
 */ //[7, 5, 6, 8, 3] largest number = 8 (1* 8)(2*4), smallest number = 3 (1 * 3) the common number is 1
//[3,6, 7, 9, 12] lg num = 12 (1*12)(2*6)(3*4) sm num = 3( 1 * 3) common num =1
//  find the minimum number = mn and maxmium number = mx
var findGCD = function (nums) {
  // create a variable to store the smallest number
  let mini = nums[0];

  // create a variable to store the largest number
  let max = -Infinity;

  // create a variable to store the common number
  let comNum = new Set();
  // create a variable to store there
  let greatestComDiv;

  //[2,5,6,9,10]
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // if the number is larger than the largest number, then store it in the largest number variable.
    if (max < nums[i]) {
      //[2 > -infinity]
      max = nums[i]; // 2
    }
    // if the number is smaller than the smallest number, then store it in the smallest number variable.
    if (mini > nums[i]) {
      // []
      mini = nums[i];
      // if the number is in between the smallest and largest number, then store it in the common number variable.
    }
  }
  console.log("mini:", mini, "max:", max);

  for (let i = 0; i <= mini; i++) {
    // {0, 2}
    console.log("this before set");
    if (mini % i === 0) {
      comNum.add(i);
      console.log("This is comNum: ", comNum);
    }
  }

  for (let i = 0; i <= max; i++) {
    if (max % i === 0 && comNum.has(i)) {
      console.log("This max loop: ", max);
      console.log("This is [i]", i);
      greatestComDiv = i;
    }
  }

  // return the common number variable
  return greatestComDiv;
};

// Example 1:
console.log(findGCD([2, 5, 6, 9, 10])) /
  // Input: nums = [2,5,6,9,10]
  // Output: 2
  // Explanation:
  // The smallest number in nums is 2.
  // The largest number in nums is 10.
  // The greatest common divisor of 2 and 10 is 2.

  // Example 2:
  console.log(findGCD([7, 5, 6, 8, 3])) /
  // Input: nums = [7,5,6,8,3]
  // Output: 1
  // Explanation:
  // The smallest number in nums is 3.
  // The largest number in nums is 8.
  // The greatest common divisor of 3 and 8 is 1.

  // Example 3:
  console.log(findGCD([3, 3]));
// Input: nums = [3,3]
// Output: 3
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 3.
// The greatest common divisor of 3 and 3 is 3.

// Constraints:

// 2 <= nums.length <= 1000
// 1 <= nums[i] <= 1000
