// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

function array123(nums: number[] = []): boolean {
  for (let i: number = 0; i < nums.length - 2; i++) {
    if (nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3) return true;
  }
  return false;
}

console.log(array123([1, 2, 3, 4]));
//output => true
console.log(array123([1, 2, 5, 6]));
//output false
