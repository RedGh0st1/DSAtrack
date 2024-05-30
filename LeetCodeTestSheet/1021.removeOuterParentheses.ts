// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

// init a stack
// for each char in string:
// if stack is empty => push char
// else if char !== top of stack => push char
// else pop stack (because char === top of stack)

// return stack as string
//              s = "( ( ) ( ) ) ( ( ) )" total of valid parentheses are 6 and total of in-valid 4 because of either no close or open

// test example 1. => 1. "(()())(())"                              // test example 2.  => "(()())(())(()(()))"
//                        "(()())" + "(())"                                               "(()())" + "(())" + "(()(()))"
//                          "()()" + "()"                                                  "()()"   + "()"   + "()(())"
// output =>    "()()()"                                              output  =>  "()()()()(())"
// number of "(" and ")" must equal so i have 3 "(" i must have also 3 ")"

function removeOuterParentheses(s: string): string {
  // create a count variable to store  strings
  let count: string = "";
  // initial a variable to empty stack
  const stack: string[] = [];

  // iterate throught the s
  for (let i: number = 0; i < s.length; i++) {
    //  if the current character is equal to ")" the pop the stack
    if (s[i] === ")") stack.pop();

    // if the stack length is true add the character to the count
    if (stack.length) count += s[i];

    // if the current character is equal to "(" push the element in to stack
    if (s[i] === "(") stack.push(s[i]);
  }

  //  return the count
  return count;
}

// Example 1:
console.log(removeOuterParentheses("(()())(())"));
// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

// Example 2:
console.log(removeOuterParentheses("(()())(())(()(()))"));
// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation:
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

// Example 3:
console.log(removeOuterParentheses("()()"));
// Input: s = "()()"
// Output: ""
// Explanation:
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".
