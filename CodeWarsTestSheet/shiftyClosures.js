// Functional closures can get overly attached. Set them straight!

// Why doesn't greetAbe() actually greet Abe?
// let name

const greetAbe = (name = "Abe") => "Hello, " + name + "!";

const greetBen = (name = "Ben") => "Hello, " + name + "!";

// another version
// var greet_abe = greet("Abe");
// var greet_ben = greet("Ben");

// function greet(name) {
//   return function () {
//     return "Hello, " + name + "!";
//   };
// }
