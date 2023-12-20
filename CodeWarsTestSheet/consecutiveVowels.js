function getTheVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"]
  let count = 0
  let prevChar
  for (let char of word) {
    let curChar = char
    if (curChar === "a") {
      count += 1
      prevChar = curChar
    }
    if (char === "e" && prevChar === "a") {
      count += 1
      prevChar = curChar
    }
    if (char === "i" && prevChar === "e") {
      count += 1
      prevChar = curChar
    }
    if (char === "o" && prevChar === "i") {
      count += 1
      prevChar = curChar
    }
    if (char === "u" && prevChar === "o") {
      count += 1
      prevChar = curChar
    }

    // This if statement checks to see if the current character is an 'a' and the previous character is an 'o'.
    // If both conditions are true, then the count is reset to 0 and the previous character is set to the current character.
    // This is used to reset the count if the sequence of vowels is broken.
    if (char === "a" && prevChar === "o") {
      count = 0
      console.log(count)
      prevChar = curChar
    }

    // This line of code checks to see if the current character is a vowel,
    // and if the previous character is not the same vowel.
    // If both conditions are true, the variable prevChar is set to the current character.
    // This is used to keep track of the previous character in the string in order to check for consecutive vowels.

    // if (vowels.includes(curChar) && prevChar !== curChar) {
    //   prevChar = curChar
    // }
  }
  return count
}
const s = getTheVowels("akfheujfkgiaaaofmmfkdfuaiiie")
// output = 7
const p = getTheVowels("eiknfhjrytueiouesxdczbeuiuoimnmfhfiuou")
// output = 0
const q = getTheVowels(
  "desrehakkjfuteknvfiyrtfbehjdjrobchrunbcbbhdhehbvudjsnanbakkjndhfjenfndinmfnbfondndendnfudnfnanndhdemdmcnfdemnfjimdfofnmfnfjanmdnhdua"
)
// output = 16
const t = getTheVowels(
  "jurjfdleiifjriisiouajjfyhekkfjvnnmsuimsnvyuhvcodnmfnsumvbjshhsadkvhfeixoua"
)
// output = 11
console.log(t)
console.log(s)
console.log(p)
console.log(q)
