function duckDuckGoose(players, goose) {
  let index = (goose - 1) % players.length;
  return players[index].name;
}

//   function duckDuckGoose(players, goose) {
//   for (var i = 0; i < players.length; i++) {
//     if (i === (goose-1) % players.length) {
//       return players[i].name;
//     }
//   }
