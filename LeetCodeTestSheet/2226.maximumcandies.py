# You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of size candies[i]. You can divide each pile into any number of sub piles, but you cannot merge two piles together.
# You are also given an integer k. You should allocate piles of candies to k children such that each child gets the same number of candies. Each child can take at most one pile of candies and some piles of candies may go unused.
# Return the maximum number of candies each child can get.

 



class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:

    # Edge case, check if the total number of candies are less then k return 0
        if sum(candies) < k:
               return 0

    # create two variables left to equal one and right to equal the total number candies divide by the k
        left, right = 1, sum(candies) // k
    
    # Iterate thru candies, condition based on if the right is greater then left if not the iteration will stop.
        while left <= right:
            mid = left + (right - left) // 2
        # Calculate the total number of candies each kid can get with current mid4
            count = sum(candy // mid for candy in candies)
        
            if count < k:
                right = mid - 1
                
            else:
                left = mid + 1
             
        return right
        