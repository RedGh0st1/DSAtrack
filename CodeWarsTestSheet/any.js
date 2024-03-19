// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

// Ruby: If you get stuck, you can read up here:
function any(arr, fun) {
  if (arr.length === 0) return false;
  for (let el of arr) {
    if (fun(el)) return true;
  }
  return false;
}

//another version
// function any(arr, fun){
//     return arr.some(fun)
//   }
