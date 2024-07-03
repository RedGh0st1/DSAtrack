// The Tribonacci sequence Tn is defined as follows:

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

package main 

func tribonacci(n int) int {
    memo := make(map[int]int)
     return tribonacciHelper(n, memo) 
}

func tribonacciHelper(n int, memo map[int]int) int {
   if n == 2 {
        return 1
    }

    if n < 2 {
        return n
    }
  
    if value, ok := memo[n]; ok {
        return value
    }
    result := tribonacciHelper(n - 3, memo) + tribonacciHelper(n - 2, memo) + tribonacciHelper(n - 1, memo)
    memo[n] = result
    
    return result
}


