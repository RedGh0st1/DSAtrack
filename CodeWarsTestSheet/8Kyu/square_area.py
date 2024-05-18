# Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

# Graph

# Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

import math
def square_area(A):
   # circumference of area
   c = 4 * A
   # radius calculation = c / (2 * n)
   radius = c / (2 * math.pi)
   # the area of a sqaure: radius * radius 
   return round(radius * radius, 2)


print(square_area(2), 1.62)
print(square_area(0), 0)
print(square_area(14.05), 80)
print(square_area(1), 0.41)
print(square_area(100), 4052.85)