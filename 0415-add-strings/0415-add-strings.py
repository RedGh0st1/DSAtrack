class Solution:
    def addStrings(self, num1: str, num2: str) -> str:\

       # Set the maximum allowed number of digits in integer string conversion
        sys.set_int_max_str_digits(10000)  # Set to a larger limit as needed

    # Convert both num1 and num2 to integers using the helper function
        num1_result = helper_converter(num1) 
        num2_result = helper_converter(num2)

         # Add the results and convert the sum back to a string and return it 
        return str(num1_result + num2_result)    

# helper function to convert string to number
def helper_converter(string: str) -> int:
    # initialize a reuslt variable to zero
    result = 0
    # iterate through the string 
    for char in string:
        # Convert each character to its integer value and build the result
        result = result * 10 + (ord(char) - ord('0'))

    # return result 
    return result