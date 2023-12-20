// arr = [1, 2, 3, 4, 5, 6];
// index 2 : value = 3 | index 3 : value = 4 |index 5 : value = 6 |
// output = 7

// arr = [1,2,3,4,5,6,7,8]
// index 2 : value = 3 | index 3 : value = 4 |index 5 : value = 6 |index 7 : value = 8 | index 10 : value = 11
// output = 21

//  arr = [1,2,3,4,5,6,7,8,9,10,11]
// index 2 : value = 3 | index 3 : value = 4 |index 5 : value = 6 |index 7 : value = 8 | index 10 : value = 11
// output = 21

// arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
// index 2 : value = 3 | index 3 : value = 4 | index 5 : value = 6 | index 7 : value = 8 |index 11 : value = 12
// output = 33

// arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// index 2 : value = 3 | index 3 : value = 4 |index 5 : value = 6 |index 7 : value = 8 | index 11 : value = 12 | index 13 : value = 14
// output = 47

// prime numbers = index (1) = 2 + 1, index (2) = 3 + 1, index (4) = 5 + 1
// 13 either 6,5,2 or
// 13 either 1,2,4,6
// 13 either

// check if number prime
// function isPrimeIndex(num){
//   if(num <= 1) return false
//   if(num === 2 || num === 3 ) return true
//   if(num % 2 === 0 || num % 3 === 0)return false
//   if(num % num === 0  ) return true
// }
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const isPrime = (index) => {
  for (let i = 2, s = Math.sqrt(index); i <= s; i++) {
    if (index % i === 0) return false
  }
  return index > 1
}

function total(arr) {
  if (arr.length === 0) return 0
  let sum = 0
  //  start off with a prime index
  for (let i = 2; i < arr.length; i++) {
    if (isPrime(i)) {
      sum += arr[i]
    }
  }
  return sum
}

console.log(total(arr))
