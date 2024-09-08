/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x.toString() < 0)return false
    return x.toString() === x.toString().split("").reverse().join("") ?  true : false;
};