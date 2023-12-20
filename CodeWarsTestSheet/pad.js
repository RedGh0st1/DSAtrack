// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many

// You need to write a loop statement within the function that loops n times.
// Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str,
// the second time will add a * to the right side, and so on.

// Finally, return the padded string.

function padIt(str, n) {
  if (n === 0) return 0
  let counter = 1
  while (counter <= n) {
    if (counter % 2 === 1) {
      str = "*" + str
    } else {
      str = str + "*"
    }
    counter++
  }
  return str
}

console.log(padIt("a", 1))
// output>>>>"*a"

// console.log(padIt("a", 2))
// output >> "*a*"

// console.log(padIt("a", 3))
// output>>> "**a*"

// console.log(padIt("a", 4))
// output >>> "**a**"

// console.log(padIt("a", 5))
// output>>>>  "***a**"
