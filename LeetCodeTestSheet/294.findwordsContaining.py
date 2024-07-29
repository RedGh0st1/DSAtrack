# You are given a 0-indexed array of strings words and a character x.
# Return an array of indices representing the words that contain the character x.
# Note that the returned array may be in any order.

 
# My thought process is to i need to go throught each element in the array and the check each letter for a x 
#  i have to create i nest loop 
#  and the if it is present at that index to a empty array i will create 
#  but i also have to make a count a double as one so if the letter is ff or aa that should count as 1

class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
  
        # initialize a empty array variable 
        container = []

        # iterate thru the list to get each word in words lisr
        for i in range(len(words)):
            # iterate thru each char in word[i] 
            for j in range(len(words[i])): 
                #  check to see if x is in each words
                if x in words[i]:
                #  add the index to variable to if it finds x
                   container.append(i)
                #  stop the iterating so i
                   break

    #     return container with index inside them
        return container

# Example 1:
# Input: words = ["leet","code"], x = "e"
# Output: [0,1]
# Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

# Example 2:
# Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
# Output: [0,2]
# Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.

# Example 3:
# Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
# Output: []
# Explanation: "z" does not occur in any of the words. Hence, we return an empty array.
 