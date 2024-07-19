// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

function maxNumberOfBalloons(text: string): number {
  let reqballoonMap = new Map<string, number>();

  // Initialize the map with the required counts for each character
  reqballoonMap.set("b", 1);
  reqballoonMap.set("a", 1);
  reqballoonMap.set("l", 2);
  reqballoonMap.set("o", 2);
  reqballoonMap.set("n", 1);

  // Count the occurrences of each character in the given text
  let balloonCounts = new Map<string, number>();
  for (const t of text) {
    if (reqballoonMap.has(t)) {
      balloonCounts.set(t, (balloonCounts.get(t) || 0) + 1);
    }
  }

  // Calculate the maximum number of times the word "balloon" can be formed
  // Remember that 'l' and 'o' are needed twice
  let count = Infinity;
  for (const [Key, value] of reqballoonMap) {
    let curCount = balloonCounts.get(Key) || 0;
    count = Math.min(count, Math.floor(curCount / value));
  }

  return count;
}

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "leetcode"
// Output: 0
