//write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
//  return an array containing all of the strings in the input array except those that match strings in geese

function gooseFilter(birds) {
  if (!geese) {
    return []
  }
  var geese = [
    "African",
    "Roman tufted",
    " Toulouse",
    "Pilgrim",
    "steindbacher",
  ]
  return birds.filter((bird) => !geese.includes(bird))
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
),
  // output >>>>> ["Mallard", "Hook Bill", "Crested", "Blue Swedish"];
  console.log(
    gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
  )
// output >>> ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
console.log(
  gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])
)
// output >>> []
