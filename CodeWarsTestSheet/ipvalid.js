function isValidIP(str) {
  let octets = str.split(".")
  // This line splits the input string str into an array of substrings using the dot ('.') as the separator. Each substring represents an octet of the IP address.
  // The resulting array is stored in the octets variable.
  if (octets.length !== 4) {
    // This line checks if the length of the octets array is not equal to 4.
    return false
    // If it's not, it means the IP address does not have exactly four octets, so the function returns false, indicating that the IP address is invalid.
  }
  // This line starts a loop that iterates over each octet in the octets array.
  for (let octet of octets) {
    if (!validateOctet(octet)) {
      // For each octet, it calls the validateOctet function to check if the octet is valid.
      return false
      // If any octet is found to be invalid, the function immediately returns false, indicating that the IP address is invalid
    }
  }
  return true
  // If the loop completes without finding any invalid octets,
  // it means all the octets are valid, and the function returns true, indicating that the IP address is valid.
}
// This line defines a function named validateOctet that takes an octet parameter representing a single octet of an IP address.
function validateOctet(octet) {
  if (
    !/^\d{1,3}$/.test(octet) ||
    octet.includes("..") ||
    octet.startsWith(".") ||
    octet.endsWith(".")
  ) {
    return false
    // This line uses a regular expression /^\d{1,3}$/ to test if the octet consists of one to three digits only.
    // If the test fails, it means the octet contains non-digit characters or has more than three digits,
    // so the function returns false, indicating that the octet is invalid.
  }
  if (octet[0] == "0" && octet.length > 1) {
    // This line checks if the octet has a length greater than 1 (to exclude single-digit octets) and if the first character of the octet is '0'.
    // If both conditions are true, it means the octet starts with a zero,
    // which is generally considered invalid (except for the value '0' itself).
    // In such cases, the function returns false.
    return false
  }
  octet = Number(octet, 10)
  // This line converts the octet from a string to a number using the Number function.
  return octet >= 0 && octet <= 255
  // This line checks if the octet is between 0 and 255 inclusive.
}

//**  The line of code !/^\d{1,3}$/.test(octet) is a regular expression-based check to validate the format of the octet in the IP address.
// ** Here's a breakdown of the regular expression pattern /^\d{1,3}$/:
// ***  ^ asserts the start of the string.
// *** \d represents a digit character (0-9).
// *** {1,3} specifies the quantifier, allowing the preceding digit pattern to repeat between 1 and 3 times. This ensures that the octet has a length of 1, 2, or 3 digits.
// *** $ asserts the end of the string.
// *** Therefore, the regular expression /^\d{1,3}$/ matches a string consisting of 1 to 3 digits, ensuring that the octet is in the correct format.
// **  If the regular expression test fails (i.e., the octet does not match the pattern), the code return false is executed, indicating that the octet is invalid. This means the entire IP address would be considered invalid, as it failed the validation for one or more octets.
// *** In summary, this line of code checks if the octet is composed of 1 to 3 digits only, rejecting it if it contains any other characters or exceeds the specified length.

// *** another way of answering this codewars problem
// --- function isValidIP(str) {
//--- return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
// ---   }
// *** answer part 2
// function isValidIP(str) {
//   const octets = str.split('.')							// Split into octets
//   return (octets.length === 4) &&						// Ensure str has exactly 4 octets
//   	octets.reduce((acc, octet) =>						// Check all octets
//     	(acc === true) &&												// Ensure prior octets okay
//      	(String(Number(octet)) === octet) &&		// Ensure octet has nothing funky like spaces, leading 0's, ...
//   		(Number(octet) >= 0) &&									// Ensure octet is 0 or more
//    		(Number(octet) <= 255)									// Ensure octet is 255 or less
//   	, true)
// }

// *** answer part 3
// const isValidIP = require('net').isIPv4;
