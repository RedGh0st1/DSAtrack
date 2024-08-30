# Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
# Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
# A prefix of a string s is any leading contiguous substring of s.

class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        #  turn the string into an list
        sentences = sentence.split()
        
        # iterate through the new list_sentence
        for i, word in enumerate(sentences):
        # if the new list words beginning with the searchWord  
         if word.startswith(searchWord):
            #  return the index of that word but remember list starts at 0 index and they want the index of the word in sentence (1-indexed)
            #  you need to add 1 to the return index
            return i + 1    

        return -1 
 

# Example 1:
# Input: sentence = "i love eating burger", searchWord = "burg"
# Output: 4
# Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

# Example 2:
# Input: sentence = "this problem is an easy problem", searchWord = "pro"
# Output: 2
# Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

# Example 3:
# Input: sentence = "i am tired", searchWord = "you"
# Output: -1
# Explanation: "you" is not a prefix of any word in the sentence.
 

