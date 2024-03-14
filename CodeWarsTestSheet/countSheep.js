// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
//  Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  let murmurStr = "";

  //
  for (let i = 1; i <= num; i++) {
    murmurStr += i + "sheep...";
  }

  return murmurStr;
};

console.log(countSheep(0) === "");
console.log(countSheep(1) === "1 sheep...");
console.log(countSheep(2) === "1 sheep...2 sheep...");
console.log(countSheep(3) === "1 sheep...2 sheep...3 sheep...");
console.log(countSheep(5));
// output  should look like this:
