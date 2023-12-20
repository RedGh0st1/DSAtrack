function capital(capitals) {
  let place
  let capital
  const arr = Object.values(capitals).map((el) => {
    if (el[`state`] || el[`country`]) {
      place = el["country"] || el[`state`]
      capital = el[`capital`]
    }
    return `The capital of ${place} is ${capital} `
  })

  return arr
}

const state_capitals = [{ state: "Maine", capital: "Augusta" }]
const country_capitals = [{ country: "Spain", capital: "Madrid" }]
const mixed_capitals = [
  { state: "Maine", capital: "Augusta" },
  { country: "Spain", capital: "Madrid" },
]
console.log(capital(state_capitals)[0])
// console.log(capital(state_capitals)[0])
// output >>>>> capital(state_capitals)[0], "The capital of Maine is Augusta")
// console.log(capital(country_capitals)[0])
// output >>>>> capital(country_capitals)[0], "The capital of Spain is Madrid")
// console.log(capital(mixed_capitals)[1])
// output >>>>> capital(mixed_capitals)[1], "The capital of Spain is Madrid")
