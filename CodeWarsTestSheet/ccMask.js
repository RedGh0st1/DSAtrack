function maskify(cc) {
  mask = cc.split("")
  console.log("split wit '.' :", mask)
  for (let i = 0; i < mask.length - 4; i++) {
    mask[i] = "#"
  }
  console.log(mask)
  mask = mask.join("")
  return mask
}

console.log(maskify("4556364607935616"))
// output >> ############
