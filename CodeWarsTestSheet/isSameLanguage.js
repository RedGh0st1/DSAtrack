// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
var list = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
]
// true if all developers in the list code in the same language; or

function isSameLanguage(list) {
  let firstLang = list[0].language
  console.log("this is the first language:", firstLang)
  return list.every((el) => {
    console.log("this element inside every function ", el.language)
    let keyValue = el.language

    if (keyValue !== firstLang) {
      return false
    }
    return true
  })
}

console.log(isSameLanguage(list))

console.log(isSameLanguage(list))
