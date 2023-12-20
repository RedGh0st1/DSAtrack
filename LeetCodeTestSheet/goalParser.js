// Given the string command,
//  return the Goal Parser's interpretation of command.

// Example 1:

// Input:
// command = "G()(al)"
// Output: "Goal"

// Example 2:
// Input:
command = "G()()()()(al)"
// Output: "Gooooal"

// Example 3:
// Input:
// command = "(al)G(al)()()G"
// Output: "alGalooG"

// reg expression
// The / marks the start and end of the expression
// The \ is used to escape the parentheses,
//  regex to match G = /G/g
// regex to match () = / \(\) /g
//  regex to match (al) = /  \(al\) /g

var interpret = function (command) {
  return command
    .replace(/G/g, "G")
    .replace(/\(\)/g, "o")
    .replace(/\(al\)/g, "al")
}
console.log(interpret(command))
