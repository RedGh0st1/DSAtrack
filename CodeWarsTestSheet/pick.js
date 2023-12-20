function pickIt(arr) {
  var odd = [],
    even = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even.push(arr[i])
    else odd.push(arr[i])
  }
  return [odd, even]
}

console.log(pickIt([1, 2]))
// output >>> [[1],[2]]

// console.log(pickIt([1, 2, 3]))
// output >>> [[1,3],[2]]

// console.log(pickIt([3, 2, 1]))
// output >>> [[3,1],[2]]

// console.log(pickIt([10, 20, 30]))
// output >>> [[],[10,20,30]]

// console.log(pickIt([11, 21, 31]))
// output >>> [[11,21,31],[]]

// console.log(pickIt([8, 1, 5, 4, 6, 1, 1]))
// output >>> [[1,5,1,1],[8,4,6]]
