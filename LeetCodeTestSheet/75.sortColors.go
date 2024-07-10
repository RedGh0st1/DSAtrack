// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

package main

func sortColors(nums []int)  {

     // Initialize a two pointer to track the left, mid, right
    left, mid, right := 0, 0, len(nums)-1

      // iterate thru the arraay 
        for  mid <= right {
           if nums[mid] == 0 {
              nums[left], nums[mid] = nums[mid], nums[left]
              left++
              mid++
           } else if nums[mid] == 1{
               mid++
           }else{
             nums[mid], nums[right] = nums[right], nums[mid]
             right--
           }
        }
}
