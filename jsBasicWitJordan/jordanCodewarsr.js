// 1. given a number and string ('even' or 'odd') return true if the number is 'even' or 'odd'

3, "odd"; //=> true
15, "even"; //=> false
function isEvenOrOdd(num, str) {
  if (num % 2 === 0 && str === "even") return true;
  else if (num % 2 !== 0 && str === "odd") return true;
  else return false;
}

// 2. given a number and an array with two elements, both integers, return true if the number is in the range

3, [1, 5]; //=> true
6, [-8, 2]; //=> false
function isInRange(num, array) {
  if (num >= array[0] && num <= array[1]) return true;
  else return false;
}

// note, if the first number is higher than the second, the range is effectively nil
// the range is inclusive of the first and last number
// 3. given two arrays, return an array of unique numbers that are common between the two arrays

function isUniqueNumbers(arr1, arr2) {
  let uniqNum = new Set(arr1);
  let numsInBothArr = [];

  arr2.forEach((el) => {
    if (uniqNum.has(el) && !numsInBothArr.includes(el)) {
      numsInBothArr.push(el);
    }
  });

  return numsInBothArr;
}

// console.log(isEvenOrInRange(3,"odd"))
// console.log(isEvenOrInRange(15,"even"))
// console.log(isInRange(3, [1,5]))
// console.log(isInRange(6, [-8,2]))

console.log(isUniqueNumbers([1, 2, 3, 4, 5], [1, 2, 3, 4]));
//output => [1,2,3,4,5]
console.log(isUniqueNumbers([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 7, 7, 7]));
