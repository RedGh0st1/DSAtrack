function sumMix(x) {
  let total = 0
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string" || typeof x[i] === "number") {
      total += Number(x[i])
      //   console.log(total)
    }
  }
  return total
}
console.log(sumMix(["3", "7", 9, 3]))
