Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

# For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
# Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

 

class Solution:
    def checkZeroOnes(self, s: str) -> bool:
        #  initialize variable to track the counts for 1's and 0's
        ones_count, zeroes_count = 0, 0

        #  initialize variable to track the max number of 1's and 0's
        max_one, max_zero = 0, 0
        

        #  iterate through s for 1's
        for i in range(len(s)):
            
            # check the segments for 1's
            if s[i] == "1": 
                # add to ones count
               ones_count += 1 
            # max_one = max(max_one, ones_counts) updates max_one to be the greater value between max_one and ones_counts. 
            # This ensures that max_one always holds the highest ones count found so far.
               max_one = max(max_one, ones_count)
            # otherwise
            else:
                 # reset the count to zero 
               ones_count = 0   

            
        #  iterate through s for 0's    
        for i in range(len(s)):  

             # check the segments for 0's
            if s[i] == "0": 
                 # add to zero count
               zeroes_count += 1 
               # max_zero = max(max_zero, zeres_counts) updates max_zero to be the greater value between max_zero and zeres_counts. 
            # This ensures that max_zero always holds the highest zeres count found so far.
               max_zero = max(max_zero, zeroes_count)
                # otherwise
            else:
                 # reset the count to zero 
               zeroes_count = 0   
        # return the boolean statement whether max one is greater then max zero
        return max_one  > max_zero      
          

# Example 1:
# Input: s = "1101"
# Output: true
# Explanation:
# The longest contiguous segment of 1s has length 2: "1101"
# The longest contiguous segment of 0s has length 1: "1101"
# The segment of 1s is longer, so return true.

# Example 2:
# Input: s = "111000"
# Output: false
# Explanation:
# The longest contiguous segment of 1s has length 3: "111000"
# The longest contiguous segment of 0s has length 3: "111000"
# The segment of 1s is not longer, so return false.

# Example 3:
# Input: s = "110100010"
# Output: false
# Explanation:
# The longest contiguous segment of 1s has length 2: "110100010"
# The longest contiguous segment of 0s has length 3: "110100010"
# The segment of 1s is not longer, so return false.
