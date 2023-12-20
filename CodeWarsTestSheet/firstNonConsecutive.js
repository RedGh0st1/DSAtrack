function firstNonConsecutive(arr) {
  let i = 1
  for (const x of arr) {
    // This line of code checks if the current item in the array plus one is not equal to the next item in the array.
    // If this is the case, it returns the next item in the array.
    // i =  1   <  arr.length  in this code represents the length of the array([1, 2, 2, 4, 6, 7, 8]) passed into the function as a parameter.
    // The arr.length is passed through the code so that we can check if we have reached the end of the array
    // and prevent the code from throwing an error if we attempt to access an element that does not exist.
    console.log("this is arr[i - 1]: ", arr[i + 1])
    if (arr[i] - arr[i - 1] != 1) {
      // This if() represents a comparison where the difference between the current item in the array
      // and the previous item in the array is not equal to 1.
      // This comparison is used to check if the items in the array are consecutive.
      //   arr[i] - arr[i- 1]>>>> arr[i] is the current item in the array and arr[i-1] is the previous item in the array.
      //   console.log(arr[i] - arr[i + 1])
      return arr[i]
    }
    i += 1
  }
  return null
}
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))
//  need to get 6
