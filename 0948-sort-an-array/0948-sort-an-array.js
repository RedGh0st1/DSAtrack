/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for(let i = 1; i < nums.length; i++){
        let cur = nums[i]
        let j = i - 1 
        while (j >=0 && nums[j] > cur){
          nums[j + 1 ] = nums[j]
                j--
        }
        nums[j + 1] = cur
    }
    return nums
};
