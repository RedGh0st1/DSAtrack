// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

nums = [1, 2, 1]
// Output: [1,2,1,1,2,1]

nums = [1, 3, 2, 1]
// Output: [1,3,2,1,1,3,2,1]

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

var getConcatenation = function (nums) {
  // create a variable n to hold nums length
  const n = nums.length

  //   creating a new array object and assigning it to the variable ans. It will have the length of
  //   nums by 2 X with empty slots ans= [ , , , , , ] to store elements when iterating
  const ans = new Array(2 * n)

  console.log(ans)
  //   iterating thru the n array or nums array
  for (let i = 0; i < n; i++) {
    // assigning nums[index] to be ans[index] the first set of numbers ans[i]=[1,2,1]
    ans[i] = nums[i]

    // assigning nums[index] to be ans[ index + n] for the second set of numbers in ans which
    // would ans[i + ans[i+n]=nums[i]]= [1,2,1,   1,2,1]
    ans[i + n] = nums[i]
  }
  //    returning ans after the changes without changing nums would be ans=[1,2,1,1,2,1]
  return ans
}

console.log(getConcatenation)
