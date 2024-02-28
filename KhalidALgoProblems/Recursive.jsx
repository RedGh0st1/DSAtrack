// write a function recursively the prints from 10 to 1

// version 1
function isCountdownFrom10to1(number) {
  if (number === 0) return [true, []];
  return isCountdownFrom10to1(number - 1);
}

console.log(isCountdownFrom10to1());

// version 2
const countDown = (num) => {
  if (number === 0) console.log(number);
  else console.log(number - 1);
};

// version 3
const countdown2 = (numbers, arr = []) => {
  if (numbers === -1) return arr;
  arr.push(countdown2(numbers - 1));
  return arr;
};
