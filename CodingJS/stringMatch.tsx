function stringMatch(a: string, b: string): number {
  let count = 0;
  for (let i: number = 0; i < a.length - 1; i++) {
    let substrA = a.substring(i, i + 2);
    let substrB = b.substring(i, i + 2);
    if (substrA === substrB) {
      count++;
    }
  }

  return count;
}

console.log(stringMatch("xxcaazz", "xxbaaz"));
// output → 3
console.log(stringMatch("abc", "abc"));
// output → 2
console.log(stringMatch("abc", "axc"));
// output → 0
console.log(stringMatch("hello", "he"));
// output → 1
console.log(stringMatch("he", "hello"));
// output → 1
console.log(stringMatch("", "hello"));
// output → 0
console.log(stringMatch("aabbccdd", "abbbxxd"));
// output → 1
console.log(stringMatch("aaxxaaxx", "iaxxai"));
// output → 3
console.log(stringMatch("iaxxai", "aaxxaaxx"));
// output → 3
