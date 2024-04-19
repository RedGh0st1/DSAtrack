# Time to test your basic knowledge in functions! 
# Return the odds from a list:
# example [1, 2, 3, 4, 5]  -->  [1, 3, 5]
#         [2, 4, 6]        -->  []

odds = lambda numbers:[num for num in numbers if num % 2 == 1] 

print(odds([]), [])
print(odds([2,4,6]), [])
print(odds([1,3,5]), [1,3,5])
print(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5])


# another version
# def odds(values):
#         return [i for i in values if i%2]

# another version
# def odds(values):
#     return list(filter(lambda x: x&1,values))