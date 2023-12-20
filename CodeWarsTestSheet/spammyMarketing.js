// function personalise(campaign, person) {
//   let text = campaign
//   let per = person
//   for (let element in text) {
//     if (element == per) {
//       text = text.replace(element, per[element])
//     }
//   }
//   return text
// }

function personalise(campaign, person) {
  let text = campaign
    .replace("<NAME>", person["name"])
    .replace("<CITY>", person["city"])
    .replace("<FAVOURITE PRODUCTS>", person["favouriteProducts"])
  return text
}

// The forEach() method should take two parameters: the element and the index.
// Additionally, the parameters for the ternary operator should be the elements from the person hash, not the keys.
// Finally, the return statement should return the modified text, not the results.

// function personalise(campaign, person) {
//   let text = campaign.split(" ")
//   let per = person
//   text.forEach((el, index) => {
//     el == "NAME"
//       ? (text[index] = per["name"])
//       : el == "CITY"
//       ? (text[index] = per["city"])
//       : el == "FAVOURITE PRODUCTS"
//       ? (text[index] = per["favouriteProducts"])
//       : null
//   })
//   return text.join(" ")
// }

const campaign =
  "Hello <NAME>,how is the weather in <CITY> today?, We wanted to let you know that <FAVOURITE PRODUCTS> are on sale today only!"

const person = {
  name: "Sally",
  city: "Glasgow",
  favourite_products: "toasters",
}
