// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
// Good luck :D

function htmlspecialchars(formData) {
  const char = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "&": "&amp;" };
  // Insert your code here
  console.log(formData);
  let convertChar = "";
  for (let i = 0; i < formData.length; i++) {
    if (char.hasOwnProperty(formData[i])) {
      convertChar += char[formData[i]];
    } else {
      convertChar += formData[i];
    }
  }
  console.log("this is the output: ", convertChar);
  return convertChar;
}

console.log(
  htmlspecialchars("<h2>Hello World</h2>") ===
    "&lt;h2&gt;Hello World&lt;/h2&gt;"
);
console.log(
  htmlspecialchars("Hello, how would you & I fare?") ===
    "Hello, how would you &amp; I fare?"
);
console.log(
  htmlspecialchars('How was "The Matrix"?  Did you like it?') ===
    "How was &quot;The Matrix&quot;?  Did you like it?"
);
console.log(
  htmlspecialchars("<script>alert('Website Hacked!');</script>") ===
    "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"
);

// another version
// function htmlspecialchars(formData) {
//     return formData.replace(/[<>"&]/g, char => ({"<":"&lt;",">":"&gt;","\"":"&quot;","&":"&amp;"}[char]));
//   }

// another version
// function htmlspecialchars(formData) {
//     const dictionary = {
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         '&': '&amp;',
//     };
//     return formData.replace(/[<>"&]/g, char => dictionary[char]);
// }
