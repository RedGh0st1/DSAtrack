# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        
    #  Count the frequency of each number
        freq_dict = {}
        
        for num in nums:
           freq_dict[num] = freq_dict.get(num, 0) + 1
       

    #   Create a list of the elements sorted by frequency in descending order
        sorted_dict = sorted(freq_dict.keys(), key=lambda x: freq_dict[x], reverse=True)
      

    #   Return the top k elements     
        return sorted_dict[:k]


# Example 1:

# Input: nums = [1,1,1,2,2,3], k = 2
# Output: [1,2]
# Example 2:

# Input: nums = [1], k = 1
# Output: [1]
