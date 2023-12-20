
function alphabetWar(fight){
    leftSide : { `w` = 4,`p` = 3,`b` = 2,`s`= 1 }
    rightSide : { `w` = 4,`p` = 3,`b` = 2,`s`= 1 }
    let right_Power= 0
    let left_Power=  0
    
    const warAlpha = fight.forEach(element => {
        if(fight.includes(leftSide)){
            left_Power.push(leftSide)
            return left_Power
        } else if(fight.includes(rightSide)){
         right_Power.push(rightSide)
        }
  if(left_Power > right_Power){
    return "Left side wins!"
  }else if(right_Power > left_Power){
    return "Right side wins!"
  } else
    })
   return "Let's fight again!";
}

