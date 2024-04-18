function spEng(sentence) {
  let word = sentence.toLowerCase() || sentence.toUpperCase();
  return word.includes("english") ? true : false;
}

console.log(spEng("english") === true);
console.log(spEng("egnlish") === false);
