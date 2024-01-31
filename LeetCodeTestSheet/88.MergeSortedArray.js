// 88. Merge Sorted Array
// Solved
// Easy

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//   nums1.splice(m, n, ...nums2)
//   return nums1.sort((a,b) =>  a - b)
// };

//This does not work because its not modiifing the original array it making a new array
// var merge = function(nums1, m, nums2, n){
//    let merged = []
//   for(let i = 0; i< nums1.length; i++){
//     if(nums1[i] !== 0) merged.push(nums1[i])
//   }
//   for(let i = 0; i < nums2.length; i++){
//     merged.push(nums2[i])
//   }
//   console.log("This is line 1244: ",merged)
//   return merged.sort((a,b) => a - b)
// }
var merge = function (nums1, m, nums2, n) {
  i = m - 1; // last index of nums1
  j = n - 1; // last index of nums2
  k = m + n - 1; // 3 + 2 - 1 = 4 which is the last index in the array reserved for the merged array of the nums1 and nums2

  // console.log("This is i: ", i)  [[0]=1, [1]=2, [2]=3, [3]=4]]
  // console.log("This is j: ", j)  [[0]=2, [1]=5, [2]=6]]
  // console.log("This is k: ", k)  [[0]=1, [1]=2, [2]=3, [3]=4], [0]=2, [1]=5, [2]=6]]

  while (i >= 0 && j >= 0) {
    // it i <= m and j <= n is basicaly saying that if i is less than m and j is less than n then we will continue to loop through the but it needs to say if i greater then or equal 0 to and j greater then 0 becausae i  and j are the value in each array and we need to make sure that they are not out of bounds.

    if (nums1[i] > nums2[j]) {
      // if nums1[i] is greater than nums2[j] then we will swap the value of nums1[i]
      nums1[k] = nums1[i]; // nums1[k] = nums1[i] = nums1[0] = 1
      k--;
      i--;
    } else if (nums2[j] >= nums1[i]) {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }

  return nums1;
};

// Example 1:
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// console.log(merge([1], 1, [], 0))
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:
// console.log(merge([0], 3, [1], 1))
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
