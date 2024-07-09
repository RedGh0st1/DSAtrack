// 2529. Maximum Count of Positive Integer and Negative Integer

// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

package main

func maximumCount(nums []int) int {
    negative := PosNumber(nums)
    positive := NegNumber(nums)

    return maxNumber(positive, negative)
}

func PosNumber(arr []int)int {
    left, right := 0, len(arr) - 1 

    for left <= right {
        mid := left + (right - left)/2

        if arr[mid] < 0 {
            left = mid + 1
        }else {
            right = mid - 1
        }
    }

    return left
}

func NegNumber(arr []int)int {
      left, right := 0, len(arr) - 1

    for left <= right {
        mid := left + (right - left)/2
        if arr[mid] <= 0 {
           left = mid + 1
        }else {
           right = mid - 1
        }
    }
   
    return len(arr) - left
}

func maxNumber(a int, b int) int {
    if a > b {
        return a
    }else{
        return b
    }
}