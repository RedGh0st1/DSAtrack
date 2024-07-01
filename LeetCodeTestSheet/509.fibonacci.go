// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

package main

func fib(n int) int {
    memo :=  make(map[int]int)
    
    return fibHelper(n, memo)
}


func fibHelper(n int, memo map[int]int) int {
   if n == 0 || n == 1 {
    return n
   }

   if value, ok := memo[n]; ok {
    return value
   }
   
   result := fibHelper(n - 1, memo) + fibHelper(n - 2, memo)
   memo[n] = result
   return result 
}
