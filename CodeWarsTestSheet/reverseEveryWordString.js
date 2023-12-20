// Reverse every other word in a given string, then return the string.
// Throw away any leading or trailing whitespace,
// while ensuring there is exactly one space between each word.
// Punctuation marks should be treated as if they are a part of the word in this kata.

let str = "Reverse this string, please!"
// output= "Reverse siht string, !esaelp"

// function reverse(str) {
//   const arr = str.split("")
//   const reversed = arr.map((el, i) => {
//     if (i % 2 === 1) {
//       return el.split("").reverse().join("")
//     } else {
//       return el
//     }
//   })
//   return reversed
// the reason why this didnt work because const arr = str.split('') and const reversed = arr.map() should be combined  and add reversed.join("").trim()
// trim() was missing very important

function reverse(str) {
  return str
    .split(" ") // Split the input string into an array of words
    .reduce((acc, item, index) => {
      // Use the reduce function to transform the array
      if (index % 2 === 0) {
        // If the index is even (0-based), reverse the word
        acc.push(item.split("").reverse().join(""))
      } else {
        // If the index is odd, keep the word as it is
        acc.push(item)
      }
      return acc
    }, []) // Initial value of the accumulator is an empty array
    .join(" ") // Join the modified array back into a string with spaces
    .trim() // Remove any leading or trailing whitespace
}

// OR  my version
function reverse(str) {
  return str
    .split(" ") // Split the input string into an array of words
    .reduce((acc, item, i) => {
      // (acc is accumulator or i++, item is the element, i is the index )
      // Use the reduce function to iterate through the array
      if (i % 2 === 1) {
        // If the index (i) is odd
        acc.push(item.split("").reverse().join("")) // Reverse the word's characters and add to accumulator (acc)
      } else {
        // If the index (i) is even
        acc.push(item) // Add the word as it is to the accumulator (acc)
      }
      return acc // Return the accumulator for the next iteration
    }, []) // Initialize the accumulator as an empty array
    .join(" ") // Join the array of words back into a string, separated by spaces
    .trim() // Remove leading and trailing whitespace from the resulting string
}

console.log(reverse(str))
