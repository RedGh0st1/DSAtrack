// Given an integer array arr and filter function fn, return a filtered Array FilteredArr.
//  The fn() functon takes one or two arguments:
// * arr[i] - number from the arr
// * i- index of arr[i]
var filter = function (arr, fn) {
  let result = []
  for (let i = 0; i < arr.length; ++i) {
    if (fn(arr[i])) {
      // If no filtering condition is provided then include only truthy values
      result.push(arr[i])
    }
  }
}
