// The Leetcode file system keeps a log each time some user performs a change folder operation.

// The operations are described below:

// "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
// "./" : Remain in the same folder.
// "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
// You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.

// The file system starts in the main folder, then the operations in logs are performed.

// Return the minimum number of operations needed to go back to the main folder after the change folder operations.

// init a stack
// for each char in string:
// if stack is empty => push char
// else if char !== top of stack => push char
// else pop stack (because char === top of stack)
// return stack as string

//    "../" => move to parent folder (changes * 2)
//    "./"  => stay at current pos (back to main)
//    "x/"  => move to child folder

function minOperations(logs: string[]): number {
  // create a variable to logStack the strings
  const logStack: string[] = [];

  // iterate thru the array
  for (let i: number = 0; i < logs.length; i++) {
    if (logs[i] === "../") {
      logStack.pop();
    } else if (logs[i] !== "./") {
      logStack.push(logs[i]);
    }
  }

  return logStack.length;
}
// Example 1:
console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
// Input: logs = ["d1/","d2/","../","d21/","./"]
// Output: 2
// Explanation: Use this change folder operation "../" 2 times and go back to the main folder.

// Example 2:
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));
// Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
// Output: 3

// Example 3:
console.log(minOperations(["d1/", "../", "../", "../"]));
// Input: logs = ["d1/", "../", "../", "../"];
// Output: 0;

// var minOperations = function(logs) {
//     let opCount = 0
//     for(let operation of logs){
//         if(operation.includes("../") && opCount > 0){
//             opCount--
//         }else if(operation.includes("./")){
//             continue
//         }
//         else{
//             opCount++
//         }
//     }
//     return opCount

// };
