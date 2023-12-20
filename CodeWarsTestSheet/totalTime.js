//** Write the function totalTime(), which accepts an array.
// ** The array contains an arbitrary number of strings,
// *** where each string represents a duration in time (hours, minutes, seconds).
// The function should add all the durations and return the total time, as a string,
// on the following format: "(num) days, (num) hours, (num) minutes, (num) seconds"
// Restrictions
// Your function should only return days, hours, minutes and seconds if they are > 0
// If the sum of all the values in the array are zero, your function should return "0" (a string)
// The string values in the array will never represent negative numbers. I.e. the sum of all the values in the array will never be less than 0.
// The array will always contain at least one string. There is no need to check for empty arrays.
// You can assume that all strings in the array follow the following pattern: "hh:mm:ss", where h - hours; m - minutes; s - seconds
// Note that hours and minutes are optional, so a more precise (but harder to read) specification is: [[hh:]mm:]ss
// If a duration is less than 10 it will always be preceeded by a zero. I.e. expect to always get this format: ["01:01:01"]. You will never get this format: ["1:1:1"]
// Remember that each value in the string returned by your function should be followed by a comma (unless it is the last value).
// Wrong: "1 day 3 hours 5 minutes"
// Correct: "1 day, 3 hours, 5 minutes"

// Example 1
// If hours and/or minutes are 0 they should be excluded from the answer.

//* totalTime(['60']); // --> "1 minute"
// Note that the above answer is "1 minute" and not "1 minute 0 seconds"

// Example 2
// The unit name should be pluralized by adding an "s" if its value is more than 1.
//* totalTime(['25:01:01']); // --> "1 day, 1 hour, 1 minute, 1 second"
//* totalTime(['50:02:02']); // --> "2 days, 2 hours, 2 minutes, 2 seconds"
// Note that "1 second" does not end with an "s", while "2 seconds" does. Same goes for days, hours and minutes.

// Example 3
// Some final examples:
//* totalTime(['01:20','03:10']);    // --> '4 minutes, 30 seconds'
//* totalTime(['00:50','00:30']);    // --> '1 minute, 20 seconds'
//* totalTime(['01:20:00','40:00']); // --> '2 hours'
//* totalTime(['12:00:00','10:00:00','02:00:00']); // --> '1 day'
//* totalTime(['24:00:00','24:00:00','07']); // --> '2 days, 7 seconds'
//* You can assume there's never any fractional part when calculating the

// const totalTime = (arr) => {
//     const seconds = arr
//         .map((time) => {
//         const [hours, minutes, seconds] = time.split(":");
//         return hours * 3600 + minutes * 60 + seconds * 1;
//         })
//         .reduce((acc, curr) => acc + curr, 0);

//     const days = Math.floor(seconds / 86400);
//     const hours = Math.floor((seconds % 86400) / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;

//     const result = [];
//     if (days > 0) {
//         result.push(`${days} day${days > 1 ? "s" : ""}`);
//     }
//     if (hours > 0) {
//         result.push(`${hours} hour${hours > 1 ? "s" : ""}`);
//     }
//     if (minutes > 0) {
//         result.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
//     }
//     if (secs > 0) {
//         result.push(`${secs} second${secs > 1 ? "s" : ""}`);
//     }
//     return result.join(", ");
// }
