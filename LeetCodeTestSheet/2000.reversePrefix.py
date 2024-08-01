# Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

# For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
# Return the resulting string.

class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        # find the index of character ch in the word
        index = word.find(ch)

        # iterate through string
        for i in range(len(word)):
         
        #  if word[i]/ value is equal to ch 
            if word[i] == ch:
                # created a variable reverse the prefix up to and including the found character
                prefix_rev = word[:index + 1][::-1]

                 # Concatenate the reversed prefix with the remainder of the word
                result = prefix_rev + word[index + 1:]

                # return the result
                return result
            
            # return the original word if ch is not found
        return word    


# Example 1:
# Input: word = "abcdefd", ch = "d"
# Output: "dcbaefd"
# Explanation: The first occurrence of "d" is at index 3. 
# Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

# Example 2:
# Input: word = "xyxzxe", ch = "z"
# Output: "zxyxxe"
# Explanation: The first and only occurrence of "z" is at index 3.
# Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".

# Example 3:
# Input: word = "abcd", ch = "z"
# Output: "abcd"
# Explanation: "z" does not exist in word.
# You should not do any reverse operation, the resulting string is "abcd".
 

# Constraints:
# 1 <= word.length <= 250
# word consists of lowercase English letters.
# ch is a lowercase English letter.