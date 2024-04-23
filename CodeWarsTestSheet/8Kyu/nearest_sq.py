# Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

# For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

# If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

import math
def nearest_sq(n):
    n_sqrt = n**2
    if n == n_sqrt:
        return n
    else:
        #  Find the next closest square number by adding sqrt(n) and rounding up
        #  e.g., for 10
        #  so if n = 10 it gets the square root which is 3.16 
        # then round it nearest integer which 3 
        # then raises it to the power of 2 which is 3 * 3 to equal 9 
        return round(math.sqrt(n))**2
    

print(nearest_sq(1) == 1)
print(nearest_sq(2) == 1)
print(nearest_sq(10) == 9)
print(nearest_sq(111) == 121)
print(nearest_sq(9999) == 10000)