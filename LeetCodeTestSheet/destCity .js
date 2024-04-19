// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

/**
 * @param {string[][]} paths
 * @return {string}
 */

var destCity = function (paths) {
  let destSet = new Set();
  let destinationCity = [];
  for (const [key, value] of paths) {
    destSet.add(key);
    destinationCity.push(value);
  }
  for (const city of destinationCity) {
    if (!destSet.has(city)) return city;
  }

  return destinationCity;
};

console.log(
  destCity[
    (["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"])
  ]
);
//output==> "Sao Paulo"

console.log(
  destCity[
    [
      ["pYyNGfBYbm", "wxAscRuzOl"],
      ["kzwEQHfwce", "pYyNGfBYbm"],
    ]
  ]
);
// output ==> "wxAscRuzOl"
