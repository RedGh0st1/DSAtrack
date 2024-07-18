# Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

# Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

# Example 1:
# Input: num1 = "2", num2 = "3"
# Output: "6"

# Example 2:
# Input: num1 = "123", num2 = "456"
# Output: "56088"


class Solution:
    def multiply(self, num1: str, num2: str) -> str:

         # Initialize a variable 
        result = 0
        result1 = 0

        # Iterate till length of the string in num1
        for i in num1:
        # Subtract 48 from the current digit 
         result = result * 10 + (ord(i) - 48)
         
        # Iterate till length of the string in num2
        for j in num2:
        # Subtract 48 from the current digit 
          result1 = result1 * 10 + (ord(j) - 48)  
        
        # convert to a string
        back_to_string = str(result * result1)

        # retunrn the converted string   
        return back_to_string     