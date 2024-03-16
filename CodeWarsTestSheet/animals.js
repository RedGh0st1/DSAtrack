function animals(heads, legs) {
  //return [Chickens, Cows]
  //[44, 28]
  // 44 chickens and 28 cows
  // 44 chickens and 28 cows
  // 2 legs and 1 head = 1 chicken
  // 4 legs and 1 head = 1 cow
  // 44 chickens = 2legs(88) + 1head(44)
  // 28 cows = 4legs(112) + 1head(28)
  // Calculate

  let cows = (legs - 2 * heads) / 2;
  let chickens = heads - cows;
  if (
    chickens >= 0 &&
    cows >= 0 &&
    Number.isInteger(chickens) &&
    Number.isInteger(cows)
  )
    return [chickens, cows];
  else return "No solutions";
}
