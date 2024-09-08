/**
 * @param {number[]} prices
 * @return {number}
 */
// 1. What is the input?
// 2. What is the output?
// 3. For each example, why does the input lead to the output?
// 4. Add more examples.
// 5. Explain each example in your own words. What is the input? What should the output be and why?

var maxProfit = function(prices) {

 // initialize a variable max equal to 0
 let max = 0

 // initialize a variable min equal to arr[0]
 let min = prices[0]

 // create a new variable called Profit = 0
  
  
  // iterate through the array
  for(let i  = 0; i < prices.length; i++){

    // If the element is lesser than the min value, 
    if(prices[i]< min){
      
      // replace min
      min = prices[i]
    }
       
    //if element in the array is greater then max
     if( prices[i] > max){
   
       // Profit equals  current element subtract from min
        let profit = prices[i] - min

          // check if current Profit is greater the current min 
            if(profit > max){
            //max = profit
            max = profit
            }
          }
        }
   // return Profit 
   return max
}; 