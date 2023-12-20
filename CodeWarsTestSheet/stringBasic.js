// Task
// Remove all #
// Remove the leading "uid" from each user ID
// Return an array of strings --> split the string
// Each user ID should be written in only lowercase characters
// Remove leading and trailing whitespaces
// Remove all spaces

function getUsersIds(str) {
  let userArr = []
  let users = str.split(", ")
  for (let i = 0; i < users.length; i++) {
    let userId = users[i].split("#").join("").trim().toLowerCase()
    if (userId.startsWith("uid")) {
      userId = userId.replace("uid", " ").trim()
    }

    userArr.push(userId)
  }
  return userArr
}

console.log(getUsersIds("uid12345"))
// output >>>>  ["12345"]
console.log(getUsersIds("   uidabc  "))
// output >>>>  ["abc"]
console.log(getUsersIds("#uidswagger"))
// output >>>>  ["swagger"]
console.log(getUsersIds("uidone, uidtwo"))
// output >>>>  ["one", "two"]
console.log(getUsersIds("uidCAPSLOCK"))
// output >>>>  ["capslock"]
console.log(getUsersIds("uid##doublehashtag"))
// output >>>>  ["doublehashtag"]
console.log(getUsersIds("  uidin name whitespace"))
// output >>>>  ["in", "name", "whitespace"]
console.log(getUsersIds("uidMultipleuid"))
// output >>>>  ["Multipleuid"]
console.log(getUsersIds("uid12 ab, uid#, uidMiXeDcHaRs"))
// output >>>>  ["12 ab", "", "mixedchars"]
console.log(getUsersIds(" uidT#e#S#t# "))
// output >>>  ["test"]
console.log(
  getUsersIds(
    "uid1234  567, uids eCrEt, uid1234567, uid12#3#45, uidPIpPi  , uid#1234, uid123, uidhaX0r, uidsEc#R et, uid1234567, uidUid"
  )
)
console.log(
  getUsersIds(
    "uid., uid12345  , uid12345, uidpIPPI, uidPipPI, uid12345678 , uidmy_id"
  )
)
console.log(
  getUsersIds(
    "uid#., uid123#, uid1234 56789, uid12, uid12 345 , uidhAC kER, uid 12345, uid12345678  , uidui  d, uid12345"
  )
)
