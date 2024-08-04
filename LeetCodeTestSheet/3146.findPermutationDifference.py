# You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.
# The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.
# Return the permutation difference between s and t.

class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
       
        result = 0

        for i in range(len(s)):
            #  if the value in s is in t
            if s[i] in t:
                #  t.index() method returns the index of the first occurrence of the value of s[i] in the string t.
                # adds the absolute difference between the index i in s and the index of value same as s[i] in t to the result.
                result += abs(i - t.index(s[i]))
        
        # return result 
        return result    

# Example 1:
# Input: s = "abc", t = "bac"
# Output: 2
# Explanation:
# For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:
# The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
# The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
# The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.
# That is, the permutation difference between s and t is equal to |0 - 1| + |2 - 2| + |1 - 0| = 2.


# Example 2:
# Input: s = "abcde", t = "edbac"
# Output: 12
# Explanation: The permutation difference between s and t is equal to |0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12.

 