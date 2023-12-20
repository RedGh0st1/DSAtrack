// Your task is to write a function that takes two or more objects
// returns a new object which combines all the input objects.

// All input object properties will have only numeric values.
// Objects are combined together so that the values of matching keys are added together.

// An example:
function combineObjects(...objects) {
  const combinedObject = {}

  for (const obj of objects) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        combinedObject[key] = combinedObject.hasOwnProperty(key)
          ? combinedObject[key] + obj[key]
          : obj[key]
      }
    }
  }

  return combinedObject
}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

const combined = combineObjects(objA, objB, objC, objD)
console.log(combined)

console.log(combine(objA, objB, objC)) // Returns { a: 18, b: 20, c: 39, d: 14, e: 8 }
console.log(combine(objA, objB)) // Returns { a: 13, b: 20, c: 36, d: 3 }
console.log(combine(objA, objC)) // Returns { a: 15, b: 20, c: 30, d: 11, e: 8 }
console.log(combine(objC, objB)) // Returns { a: 8, c: 9, d: 14, e: 8 }
console.log(combine(objD, objB)) // Returns { a: 3, c: 9, d: 3 }
console.log(combine(objA, objB, objC, objD)) // Returns { a: 18, b: 20, c: 39, d: 14, e: 8 }
console.log(combine(objA)) // Returns { a: 10, b: 20, c: 30 }
console.log(combine(objD)) // Returns { c: 3 }
console.log(combine(objA, objD)) // Returns { a: 10, b: 20, c: 33 }
