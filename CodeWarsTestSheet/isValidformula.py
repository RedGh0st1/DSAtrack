# You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

# Example
# For formula = [1,3,7], The output should be true.

# For formula = [7,1,2,3], The output should be false.

# For formula = [1,3,5,7], The output should be false.

# For formula = [1,5,6,7,3], The output should be true.

# For formula = [5,6,7], The output should be true.

# For formula = [5,6,7,8], The output should be true.

# For formula = [6,7,8], The output should be false.

# For formula = [7,8], The output should be true.

# Note
# All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

# Happy Coding ^_^

# Here is the code:

def isValid(formula):
    if 1 in formula and 2 in formula: return False
    if 3 in formula and 4 in formula: return False
    if 5 in formula and 6 not in formula: return False
    if 6 in formula and 5 not in formula: return False
    if 7 not in formula and 8 not in formula: return False
    return True

print(isValid([1,3,7]) == True)

print(isValid([7,1,2,3]) == False)

print(isValid([1,3,5,7]) == False)

print(isValid([1,5,6,7,3]) == True)

print(isValid([5,6,7]) == True)

print(isValid([5,6,7,8]) == True)

print(isValid([6,7,8]) == False)

print(isValid([7,8]) == True)
