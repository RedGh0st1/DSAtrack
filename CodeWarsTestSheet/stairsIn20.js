function stairsIn20(s) {
  // 20 year estimate = one year total * 20
  let flattenArr = [];

  for (let i = 0; i < s.length; i++) {
    let innerArr = s[i];
    for (let j = 0; j < innerArr.length; j++) {
      flattenArr.push(innerArr[j]);
    }
  }

  return flattenArr.reduce((acc, cur) => acc + cur, 0) * 20;
}

// another version 1
// function stairsIn20(a) {
//     return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
//   }

//  another version 2
// function stairsIn20(s){
//     for (var i = 0, sum = 0; i<s.length ; i++) {
//       for (var j = 0; j<s[i].length; j++) {
//         sum += s[i][j];
//       }
//     }
//     return sum*20;
//   }

//another version 3
// const stairsIn20 = s => s.flat().reduce((p,c)=> p+c ,0)*20

// another version 4
// function stairsIn20(s){
//     var arr = [].concat(...s)
//     var newArr = [].concat(...arr)
//     return newArr.reduce((a, b) => a+b)*20
//  }
