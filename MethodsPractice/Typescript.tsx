function arrayCount9(nums: number[] = []): number {
  let count: number = 0;
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === 9) {
      count++;
    }
  }
  return count;
}

// const countdown2 = (numbers: number, arr: number[] = []): number[] => {
//     if (numbers === -1) return arr;
//     arr.push(countdown2(numbers - 1));
//     return arr;
//   };

//   // Example usage:
//   console.log(countdown2(5)); // Output: [ [ [ [ [ ] ] ] ] ]
