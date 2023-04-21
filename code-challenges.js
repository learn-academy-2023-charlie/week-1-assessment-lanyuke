// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// input: num
// output: return "num is below boiling point" when num is lesser than 212 (using conditional statement if),
// return "num is at boiling point" when num is equal to 212 (using conditional statement else if),
// return "num is above the boiling point" when above conditional statement is not met. (using conditional statement else)

// Function name:boilingPointDeterminer
const boilingPointDterminer = (num) => {
if(num < 212){
    return ` ${num} is below boiling point`
} else if (num === 212){
    return ` ${num} is at boiling point`
} else {
    return ` ${num} is above boiling point`
}
}

const temperature1 = 42
// Expected output: "42 is below boiling point"
console.log(boilingPointDterminer(temperature1));
// Output: 42 is below boiling point

const temperature2 = 350
// Expected output: "350 is above boiling point"
console.log(boilingPointDterminer(temperature2));
// Output: 350 is above boiling point

const temperature3 = 212
// Expected output: "212 is at boiling point"
console.log(boilingPointDterminer(temperature3));
// Output:212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// input:arrays1, arrays2
// output:return length value of combine arrays.
// (possible solution: create a function to combine arrays1 and arrays2 and using .length method to get the length value)
// 
const lengthCombine =(arrays1, arrays2) =>{
return arrays1.concat(arrays2).length
}

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
console.log(lengthCombine(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns));
// Output: 9



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.


// Pseudo code:
// Input: string1
// Output: return reverse letters with string1.
// (Possible solution is to create a function to use .split("") method to turn string1 into a array and use .reverse() method with to reverse letters then use .join("") method to turn it back to strings.)
// function: reverseFunction


const reverseFunction =(string1) => {
    return (string1.split("").reverse().join(""))
}

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"
console.log(reverseFunction(currentCohort));
// Output: 9


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// Input: array1, num1
// Output: return last index of num1 in array1.
// (possible solution is to create a function to use the .lastOfIndex method on array1)
// Function: lastIndexArray

const lastIndexArray =(array1, num1) => {
return array1.lastIndexOf(num1)
}


const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42

console.log(lastIndexArray(numberOfConnections, givenValue1));
// Expected output: 7
// Output: 7


const givenValue2 = 10
console.log(lastIndexArray(numberOfConnections, givenValue2));
// Expected output: 8
// Output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// input: array1
// output: return largest to smallest numbers from array.
// (possible solution is to create a function to use .sort((a, b) => a - b) method on array1 and use .reverse method to change the value form smallest to largest to largest to smallest then return the value)
// function:sortArrayNumber

const sortArrayNumber = (array1) => {
return array1.sort((a, b) => a - b).reverse()
}

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
console.log(sortArrayNumber(sanDiegoSummerTemperatures));
// output:[
//     82, 80, 79, 77,
//     76, 73, 72
//   ]
  
const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
console.log(sortArrayNumber(sanDiegoWinterTemperatures));
// // output:[
//   68, 67, 66, 66,
//   62, 59, 59
// ]
