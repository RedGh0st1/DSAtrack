// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

function convertHashToArray(hash) {
  const converison = Object.entries(hash)

  const sorted = converison.sort((a, b) => (a > b ? 1 : a === b ? 0 : -1))
  // same as saying if(a > b){
  // return 1
  // } else if(a === b ){
  // return 0
  //   }else{
  // return -1
  // }
  //

  return sorted
}

console.log(convertHashToArray(convertHashToArray({ name: "Jeremy" })))

// OUTPUT >>>>>>> [["name", "Jeremy"]]

console.log(convertHashToArray({ name: "Jeremy", age: 24 }))

// OUTPUT >>>>>>>> [["age", 24], ["name", "Jeremy"]]

console.log(convertHashToArray({ product: "CodeWars", powerLevelOver: 9000 }))

//OUTPUT>>>>>>>>>  [["powerLevelOver", 9000],["product", "CodeWars"]]

console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
)

//OUTPUT>>>>>>>>>>  [["age", 24], ["name", "Jeremy"]]

console.log(convertHashToArray({}), [])
// OUTPUT>>>>>>
