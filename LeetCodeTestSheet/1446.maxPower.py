# The power of the string is the maximum length of a non-empty substring that contains only one unique character.
# Given a string s, return the power of s.

class Solution:
    def maxPower(self, s: str) -> int:
        # initialize a variable to track max counts, and power counts
        max_count, power_counts = 1, 1

        # iterate through the string
        for i in range(len(s) - 1):
            # check if the current char and next are the same
            if s[i] == s[i + 1]:
                #  add to powers count by 1
               power_counts += 1 
            #  get the max count out of powers and assign it to the variable max_count 
            # max_count = max(max_count, power_counts) updates max_count to be the greater value between max_count and power_counts. 
            # This ensures that max_count always holds the highest power found so far.  
               max_count = max(max_count, power_counts)
            #    otherwise
            else:
                # add one to power count if that letter is not follow by the same character.
                # we reset power_counts to 1 because the contiguous substring has ended, 
                # and we start counting again for the new character.
                power_counts = 1 

        #  return the max count
        return max_count




# Typescript
# function maxPower(s: string): number {
#         let maxCount = 1, powerCounts = 1;

#         for (let i = 0; i < s.length - 1; i++) {
#             if (s[i] === s[i + 1]) {
#                 powerCounts += 1;
#                 maxCount = Math.max(maxCount, powerCounts);
#             } else {
#                 powerCounts = 1;
#             }
#         }

#         return maxCount;
#     }
# }


# Go
# func maxPower(s string) int {
#     maxCount := 1
#     powerCounts := 1

#     for i := 0; i < len(s)-1; i++ {
#         if s[i] == s[i+1] {
#             powerCounts++
#             if powerCounts > maxCount {
#                 maxCount = powerCounts
#             }
#         } else {
#             powerCounts = 1
#         }
#     }

#     return maxCount
# }


# Example 1:
# Input: s = "leetcode"
# Output: 2
# Explanation: The substring "ee" is of length 2 with the character 'e' only.

# Example 2:
# Input: s = "abbcccddddeeeeedcba"
# Output: 5
# Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 