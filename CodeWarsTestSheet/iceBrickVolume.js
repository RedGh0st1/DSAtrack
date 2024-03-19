// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.

function iceBrickVolume(radius, bottleLength, rimLength) {
  // Your code should be here ;) V=πr2h
  //   V =volume of the bottle
  //   π = pi 3.14159
  //   r - radius (5) squared
  //   h = height
  // * 5 * 5 * 30 - 7
  const height = bottleLength - rimLength;
  const volume = 2 * radius ** 2 * height;
  return volume;
}

// radius = 5
// bottle_length = 30
// rim_length = 7

// volume = 1150
