// 25 => 25 + 12 + 6 + 3 + 1 = 47
// 127 => 127 + 63.5 + 31.75 + 15.875 + 7.9375 + 3.96875 + 1.984375 + 0.9921875 = 247

function halvingSum(n) {
  if (n === 0) return null

  var sum = 0
  while (n >= 1) {
    sum += n
    n = Math.floor(n / 2)
    console.log("this is sum round:", n)
  }
  return sum
}
// RECURSION version
// const halvingSum(n){
//     if(n === 1 ) return n
//     return n + halvingSum(Math.floor(n/2))
// }

console.log(halvingSum(25))
// output >> 47
console.log(halvingSum(127))
// output >>>> 247
