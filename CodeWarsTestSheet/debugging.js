function multi(arr) {
  // The result is initialized to 1 because any number multiplied by 1 will give the same number back.
  // This is used as a starting point so that the result of the loop can be multiplied by it.
  let result = 1
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }
  return result
}

function add(arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
}

// Psuedocode for reverse function:

// 1. Create a function called reverse which takes one argument, a string (str)
// 2. Create a variable called result and set it equal to an empty string
// 3. Create a for loop which starts at the end of the str argument,
// decrements i by 1 each iteration, and ends when i is greater than or equal to 0
// 4. Inside the for loop, add each character of the string to the result variable
// 5. Return the result variable once the for loop has completed
// 6. End the function

function reverse(str) {
  let result = ""
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

// This code is not reversing the string
// because the .reverse() method does not work on strings.
// It only works on arrays, and .split() is not properly splitting the string into an array
// for the .reverse() method to work on.
// function reverse(str) {
//   let result = str.split().reverse().join()
//   return result
// }

//To make this code work,
// you would need to first split the string into an array using the .split() method with "" inside(),
// then reverse the array using the .reverse() method, and finally join the reversed array back into a string using the
// .join() method, like this with (""):
function reverse(str) {
  let result = str.split("").reverse().join("")
  return result
}
// console.log(multi([5, 1, 5]))
// output 25
// console.log(add([9, 8, 5]))
// output 22
console.log(reverse("Reverse!"))
// output !esreveR
