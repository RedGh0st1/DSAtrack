# Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.

 # the has to start with 1's

class Solution:
    def checkOnesSegment(self, s: str) -> bool:
      
        # iterate through s string   
        for i in range(len(s)):

    #     This line checks if the substring "01" is not present anywhere in the string s.
	# •	If "01" is not found in s, it returns True.
           if "01" not in s : return True
  

# Example 1:
# Input: s = "1001"
# Output: false
# Explanation: The ones do not form a contiguous segment.

# Example 2:
# Input: s = "110"
# Output: true
