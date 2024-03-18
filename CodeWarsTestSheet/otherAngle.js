// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.
// triangle has 3 sides, and  all angles are in degrees. Also 3 angles

function otherAngle(a, b) {
  return 180 - (a + b);
}
