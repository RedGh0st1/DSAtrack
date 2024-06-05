// There is a biker going on a road trip.
// The road trip consists of n + 1 points at different altitudes.
// The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n).
// Return the highest altitude of a point.

function largestAltitude(gain: number[]): number {
  // what is the input?  an array of numbers, no order => gain = [-5,1,5,0,-7]
  // -5 (-4,-3,-2,-1,0) =>1, 1=> (2,3,4) =>5 , 5=> (4,3,2,1) => 0, 0=> (-1,-2,-3,-4,-5,-6) => -7
  // what is the output?  single number   output: 1
  // For each example, why does the input lead to the output? How am i getting to the output?
  // 1.  gain = [-5,1,5,0,-7]   //   [0,-5,-4,1,1,-6]
  //  i need to add 0 to the array because the is the original starting point.
  // then i  need to find the subarray (the difference between each number and put it in a new array)
  //  then return the largest number in that  array which will altitude high
  // output = 1

  // 2.  gain = [-4,-3,-2,-1,4,3,2]   [0,-4,-7,-9,-10,-6,-3,-1]
  // output = 0

  // add examples
  // 3.
  //  Explain each example in your own words. What is the input? What should the output be and why?

  // hints
  // Let's note that the altitude of an element is the sum of gains of all the elements behind it.
  // Getting the altitudes can be done by getting the prefix sum array of the given array

  // create alt variable to store numbers
  let alt: number = 0;

  // add zero to beginning of the copy array
  gain.unshift(0);

  // iterate thru the array using map()
  let subArray: number[] = gain.map((el, idx) => {
    // Altitude at index 0 is always 0
    if (idx === 0) return 0;
    //Calculate altitude by summing gain values. For each element, we update the alt variable by adding the current gain value.
    return (alt += el);
  });

  //  create variable to store the highest altitude
  let highestAlt: number = Math.max(...subArray);
  return highestAlt;
}

// Example 1:
console.log(largestAltitude([-5, 1, 5, 0, -7]));
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// Example 2:
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
