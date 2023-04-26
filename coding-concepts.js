// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer:0
// b) Verify and explain:10, because the data is a string not an array that in square brackets like [LEARN 2023], it's 10 because length's value counts all the characters including space inside quotation mark.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain:o, because [] after a variable is use for output it's index value, the index start counting from 0 therefore index 4 of "Hello World!" is "o"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:Ruby
// b) Verify and explain:Ruby, because const languages is an array using [] to store 4 strings. and [] after a variable is use for output it's index value, the index start counting from 0 therefore index 1 of ["JavaScript", "Ruby", "Python", "C++"] is "Ruby"

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:undefined
// b) Verify and explain:
// TypeError: weekendDays.toUpperCase is not a function, 
// because const weekendDays is an array and .toUpperCase() method. only apply to strings, to make ["saturday", "sunday"] become string use .join("") method on weekendDays then use .toUpperCase () method to preform the desire output.
// Working code:
// console.log(weekendDays.join("").toUpperCase())


// --------------------5) What will this log?


const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer:typeof is not defined
// b) Verify and explain: number, typeof is a bulit in function that show amount of data type for variable. to show how many string in a variable just remove typeOf in the code.
// Working code:
// console.log(dataTypes.length)