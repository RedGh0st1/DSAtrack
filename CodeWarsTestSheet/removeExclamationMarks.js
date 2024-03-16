// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((el) => el !== "!")
    .join("");
}

// regex version
// function removeExclamationMarks(s) {
//     return s.replace(/!/g, '');
//   }
