// Given a string s, sort it in decreasing order based on the frequency of the characters.
// The frequency of a character is the number of times it appears in the string.

// Return the sorted string.
// If there are multiple answers, return any of them.

function frequencySort(s: string): string {
  // convert s string to and array
  const str: string[] = Array.from(s);

  //create a new map to store freq
  const freqMap = new Map<string, number>();

  // iterate the s string
  for (const letter of s) {
    // check it
    freqMap.set(letter, (freqMap.get(letter) || 0) + 1);
  }

  console.log("This is the freq map(): ", freqMap);
  // sort in descending order by the frequency / value
  const sortDecFrq = str.sort((a: string, b: string): number => {
    // declared a variable to freqmapA to compare the key value in freqMap
    const freqMapA: number | undefined = freqMap.get(a);

    // declared a variable to freqmapB to compare the key value in freqMap
    const freqMapB: number | undefined = freqMap.get(b);

    if (freqMapA < freqMapB) return 1;
    else if (freqMapA > freqMapB) return -1;
    else if (a < b) return -1;
    else if (b > a) return 1;
    else return 0;
  });

  console.log("this is the sortedDecreasingFReq on line 17: ", sortDecFrq);

  return sortDecFrq.join("");
}

// Example 1:
console.log(frequencySort("tree"));
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:
console.log(frequencySort("cccaaa"));
// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:
console.log(frequencySort("Aabb"));
// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters

// Example 4.
console.log(frequencySort("loveleetcode"));
//output: "eeeeoollvtdc"
