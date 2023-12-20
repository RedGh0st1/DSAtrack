const student = {
  name: "Frank",
  city: "Amsterdamn",
  grades: [45, 89, 56, 78],
}

// 1. Given a student object, find the highest grade.
//
console.log(Math.max(...student["grades"])) // Output :  89

// 2. Given a student object, find the average of their grades rounded to two decimal places
let sumOfGrades = (accumulator, currentValue) => accumulator + currentValue
averageGradeRoundedToTwoDecimalPlaces =
  Math.round(
    ((students[0]["grades"].reduce(
      (accumulatedSum, currentGrade) => (accumulatedSum += currentGrade)
    ),
    0) /
      students[0].length) *
      100
  ) / 100
console.log(`Their Average Grade is ${averageGradeRoundedToTwoDecimalPlaces}`)

// 3. Given an array of students, return an array of strings that say "<student name>'s lowest grade is <lowest score>"

const students = [
  {
    name: "Frank",
    city: "Amsterdamn",
    grades: [45, 89, 56, 78],
  },
  {
    name: "Tiago",
    city: "Amsterdamn",
    grades: [45, 89, 13, 78],
  },
  {
    name: "Daniella",
    city: "Amsterdamn",
    grades: [85, 89, 99, 78],
  },
]
