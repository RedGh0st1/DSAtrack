//I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
  let cat = 15;
  let dog = 15;
  // human 1yr , equal 15 yr for cat and dog
  if (humanYears === 1) return [humanYears, cat, dog];
  // human = 2yr  [cat = 15 + 9] [dog = 15 + 9]
  else if (humanYears === 2) return [humanYears, cat + 9, dog + 9];
  // human greater then 2 [cat= 15 + 4 - humanyears * 4] [dog = 15 + 9 humanyears * 5]
  else if (humanYears > 2)
    return [
      humanYears,
      cat + 9 + (humanYears - 2) * 4,
      dog + 9 + (humanYears - 2) * 5,
    ];
};
