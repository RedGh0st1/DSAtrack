# Given a string s and an array of strings words, determine whether s is a prefix string of words.
# A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
# Return true if s is a prefix string of words, or false otherwise.

class Solution:
    def isPrefixString(self, s: str, words: List[str]) -> bool:
        # create variable to store character in words list 
        prefix = ''

        #  iterated thru the words list 
        for word in words:

            #  added each character to prefix variable one by one
            prefix += word

            #  checked if prefix is equal to s string 
            if prefix == s:

                #  return true if it was the same 
                return True

            # false if it was not   
        return False        
 

# Example 1:
# Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
# Output: true
# Explanation:
# s can be made by concatenating "i", "love", and "leetcode" together.

# Example 2:
# Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"]
# Output: false
# Explanation:
# It is impossible to make s using a prefix of arr.
