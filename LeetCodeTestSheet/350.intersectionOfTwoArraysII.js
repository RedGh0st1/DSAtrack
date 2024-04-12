// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

//    JS, Map() is a data structure that stores key-value pairs. Here's what map.set() and map.get() do:
//   map.set(key, value): This method sets the value for the specified key in the Map object.
//   If the key already exists in the map, it updates the value with the new one. If the key doesn't exist, it adds a new key-value pair to the map.
//example let map = new Map();
//   map.set('a', 1); // Sets 'a' as the key with the value 1
//   map.set('b', 2); // Sets 'b' as the key with the value 2

// map.get()
// map.get(key): This method returns the value associated with the specified key in the Map object.
// If the key doesn't exist, it returns undefined.
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);

// console.log(map.get('a')); // Output: 1
// console.log(map.get('c')); // Output: undefined

var intersect = function (nums1, nums2) {
  let intersectArr = new Map();
  let newArr = [];

  nums1.forEach((num) => {
    intersectArr.set(num, (intersectArr.get(num) || 0) + 1);
  });

  nums2.forEach((element) => {
    if (intersectArr.has(element) && intersectArr.get(element) > 0) {
      newArr.push(element);
      intersectArr.set(element, intersectArr.get(element) - 1);
    }
  });

  return newArr;
};

// Example 1:
console.log(intersect([1, 2, 2, 1], [2, 2]));
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

// Example 1:
console.log(intersect([1, 2, 2, 1], [2]));
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
