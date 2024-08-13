# Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
# You must write an algorithm that runs in O(n) time and uses only constant extra space.

class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:

        #  create a variable to store duplicate  numbers in the array
        dbl_numbers = []
       
	#  iterate thru the array
        for i in range(len(nums)):
            index = abs(nums[i]) - 1
            
            if nums[index] < 0:
                dbl_numbers.append(abs(nums[i]))
                
            else:
                nums[index] = -nums[index] 

        return dbl_numbers    



# Example 1:
# Input: nums = [4,3,2,7,8,2,3,1]
# Output: [2,3]

# Example 2:
# Input: nums = [1,1,2]
# Output: [1]

# Example 3:
# Input: nums = [1]
# Output: []