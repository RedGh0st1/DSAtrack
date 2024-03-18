// The cockroach is one of the fastest insects.
// Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:
// 1.08 --> 30
// 1km per hour  = 27.777778
//centimeters per second = (5 km/h × 27.777778) = 138.888889 cm/s

// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
function cockroachSpeed(s) {
  let km = 27.777778;
  return Math.floor(km * s);
}
