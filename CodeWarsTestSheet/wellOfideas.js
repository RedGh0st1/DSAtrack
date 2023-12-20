function well(x) {
  let goodIdeas = 0
  let badIdeas = 0
  x.forEach((e) => {
    if (e === "good") {
      goodIdeas++
      console.log("good Ideas:", goodIdeas)
    } else if (e === "bad") {
      badIdeas++
      console.log("bad ideas:", badIdeas)
    }
  })
  if (goodIdeas >= 2) {
    return "I smell a series!"
  } else if (goodIdeas > 0) {
    return "Publish!"
  } else {
    return "fail!"
  }
  return x
}

console.log(well(["bad", "bad", "good", "good", "good"]))
