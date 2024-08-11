# You are given an array of strings words and a string pref.

# Return the number of strings in words that contain pref as a prefix.

# A prefix of a string s is any leading contiguous substring of s.


class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        
        # create a count variable and make it equal to zero
        count = 0

        # iteratee through the words array 
        for word in words:
            #  check if each word starts with pref 
            if word.startswith(pref):
            #  then count if it does 
              count+= 1

        # return the count
        return count         


# Example 1
# Input: words = ["pay","attention","practice","attend"], pref = "at"
# Output: 2
# Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

# Example 2:
# Input: words = ["leetcode","win","loops","success"], pref = "code"
# Output: 0
# Explanation: There are no strings that contain "code" as a prefix.
 
