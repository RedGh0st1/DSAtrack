function last2(str) {
  // Check if the string has at least 2 characters
  if (str.length < 2) return 0;

  // Extract the last two characters of the string
  const last2 = str.substring(str.length - 2);
  console.log("This the last2: ", last2);

  // Initialize a count variable
  let count = 0;

  // Iterate through the string, excluding the last two characters
  console.log(str.length - 2);
  for (let i = 0; i < str.length - 2; i++) {
    // Check if the substring of length 2 at position i matches the last2 substring
    let substr = str.substring(i, i + 2);
    console.log("this is str.substring i :", str.substring(i));
    console.log("this is str.substring i + 2:", str.substring(i + 2));
    console.log(
      "This is substr: ",
      substr,
      "this is the last 2 strings: ",
      last2
    );
    if (substr === last2) {
      count++;
    }
  }

  return count;
}

console.log(last2("xxaxxaxxaxx"));
// output → 3
