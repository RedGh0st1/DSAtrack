# Given a binary array nums, return the maximum number of consecutive 1's in the array.

 
#  getting an array of 1's and 0's 
#  to counts the consecutive 1's
#  and return the highest count of 1's

class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        
        # initialize a variable to track the  ones, and max of ones
        max_ones_count, power_ones = 0, 0
        
        # iterate through the nums 
        for i in range(len(nums)):

            # nums value = 1  
            if nums[i] == 1:
             #  add 1 to the count
               power_ones += 1
            #  get the max count out of powers and assign it to the variable max_ones_count 
               max_ones_count = max(max_ones_count, power_ones) 
            #  otherwise
            else:
                # reset the count to zero 
               power_ones = 0
              
        #  return the max count of ones
        return max_ones_count

# Example 1:
# Input: nums = [1,1,0,1,1,1]
# Output: 3
# Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

# Example 2:
# Input: nums = [1,0,1,1,0,1]
# Output: 2
 