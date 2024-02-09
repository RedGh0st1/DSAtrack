// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
// Note that you do not have any change in hand at first.
// Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  //init five dollar equal to 0,
  let fiveCount = 0;
  // init 10 dollars to zero,
  let tenCount = 0;

  // iterate thru array
  for (let bill of bills) {
    // if bill is equal 5
    if (bill === 5) {
      // count five ++
      fiveCount++;
      // if the bill is equal 10
    } else if (bill === 10) {
      // otherwise
      if (fiveCount === 0) {
        // if the five dollare is equal to 0
        // false
        return false;
      }
      tenCount++;
      fiveCount--;
    } else if (bill === 20) {
      console.log(fiveCount);
      if (fiveCount === 0) {
        // if the five dollare is equal to 0
        // false
        return false;
      }
      //other if bill equal to 20
      // if fiveCount > 0 && tenCount is greater then 0
      if (fiveCount >= 1 && tenCount >= 1) {
        // fiveCount subtract
        fiveCount--;
        // tencount subtract
        tenCount--;
        //otherwise
        // if fivecount >= 5
      } else if (fiveCount >= 3) {
        fiveCount -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
