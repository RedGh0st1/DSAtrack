var cubeChecker = function (volume, side) {
  //  check if volume is cube
  // (5(side) * 5(side)=25 * 5(side) = 125
  if (volume < 0 || volume === 0) return false
  return Math.pow(side, 3) === volume ? true : false
}

console.timeLog(cubeChecker(56.3, 1))
// output false
console.log(cubeChecker(-1, 2))
// output false
console.log(cubeChecker(8, 3))
// output false
console.log(cubeChecker(8, 2))
// output true
console.log(cubeChecker(-8, -2))
// output false
console.log(cubeChecker(0, 0))
// output false
console.log(cubeChecker(1, 5))
// output false
console.log(cubeChecker(125, 5))
// output >>> true
console.log(cubeChecker(125, -5))
// output >>> false
