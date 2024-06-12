// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.

function sortPeople(names: string[], heights: number[]): string[] {
  // intialize a new map {}
  const nameMap = new Map<number, string>();

  // iterate to heights array
  for (let [i, height] of heights.entries()) {
    // set the height as the key and name as the value
    nameMap.set(height, names[i]);
  }
  // sorts the heights array in descending order
  // then map thru array element and pull out the matching values of in nameMap()
  return heights.sort((a, b) => b - a).map((a) => nameMap.get(a));
}

// Example 1:
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

// Example 2:
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

// function sortPeople(names: string[], heights: number[]): string[] {
//     let obj: {[index: string]: string} = {}
//     heights.forEach((e, i) => obj[e] = names[i])
//     return Object.keys(obj).sort((a, b) => +b - +a).map(e => obj[e])
//   }

// function sortPeople(names: string[], heights: number[]): string[] {
//   return names
//     .map((_, i) => i)
//     .sort((a, b) => heights[b] - heights[a])
//     .map((i) => names[i]);
// }

// function sortPeople(n: string[], h: number[]): string[] {
//     return n.map((_, i) => i).sort((a, b) => h[b] - h[a]).map(i => n[i])
// };
