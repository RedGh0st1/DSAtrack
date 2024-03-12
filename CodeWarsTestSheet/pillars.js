// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
  // Check if the number of pillars is less than or equal to 1
  if (numPill <= 1) return 0;

  // Calculate the distance between the first and last pillar in centimeters
  // (numPill - 2) * width: The total width of all pillars in between the first and last pillars.
  // (numPill - 1) * (dist * 100): the total distance between all pillars, except for the last pillar's width.
  return (numPill - 2) * width + (numPill - 1) * (dist * 100);
}
