// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

function datingRange(age) {
  let min = age <= 14 ? age - 0.1 * age : age / 2 + 7; //-.10
  let max = age <= 14 ? age + 0.1 * age : (age - 7) * 2; //+0.10
  return `${Math.floor(min)}-${Math.floor(max)}`;
}
