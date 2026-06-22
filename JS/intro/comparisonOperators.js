/*
Comparison Operators evaluate to only true or false.
Equality ==
Strict Equality ===
Inequality !=
Strict Inequality !==
*/
//Equality ==
//Strict Equality ===
let num2 = "77"
let num3 = 100
let strictEquality = num2 === num3
console.log(`num2 = ${num2} === num3 = ${num3} => Ans ${strictEquality}, its type is ${typeof strictEqual}`)

let nonStrictEquality = num2 == num3
console.log(`num3 = ${num3} == num3 = ${num3} => Ans ${nonStrictEquality}, its type is ${typeof nonStrictEquality}`)

//Inequality !=
//Strict Inequality !==
let val1 = 30
let val2 = "30"

let strictInequality = val1 !==val2
console.log(`val1 = ${val1} !== val2 = ${val2} => Ans ${strictInequality}, its type is ${typeof strictInequality}`)

let Inequality = val1 != val2
console.log(`val1 = ${val1} != val2 = ${val2} => Ans ${Inequality}, its type is ${typeof Inequality}`)

//
let number = 60;
let number1 = 30;

let str1 = "A"
let str2 = "C"

console.log(`number = ${number} and number1 = ${number1}`)
console.log(`str1 = ${str1} and str2 = ${str2}`)

console.log(`number > number1 ${number> number1}`)
console.log(`str1 > str2 ${str1>str2}`)

console.log(`number>= number1 ${number>= number1}`)
console.log(`str1>= str2 ${str1>= str2}`)

console.log(`number< number1 ${number< number1}`)
console.log(`str1< str2 ${str1< str2}`)

console.log(`number<= number1 ${number> number1}`)
console.log(`str1<= str2 ${str1> str2}`)