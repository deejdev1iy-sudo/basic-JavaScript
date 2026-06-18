/*
the type of just tells you the variable type
*/
let num = 2893;
console.log("num is", num, "It's type is a:", typeof num)

let myName = "Chiomi"
console.log("My name is", myName, "It's type is a:", typeof myName)

let isMarried = false
console.log("isMarried is", isMarried, "It's type is a:", typeof isMarried)

let nullVal = null
console.log("nullVall is", nullVal, "It's type is an:", typeof nullVal)

let unValue;
console.log("Unvalue is", unValue, "It's type is:", typeof unValue)

const bonus = "1500"
const sallary = 60000;

const sallaryGross = bonus + sallary
console.log("Gross salary is ", sallaryGross, "It's type:", typeof sallaryGross);

const paye = sallaryGross*0.16
console.log("For gross sallary of ", sallaryGross, "Paye is ", paye)

const nhif = 3000
console.log("NHIF deduction ",nhif);
const sha = 2500
console.log("SHA is ", sha)
const totalDeductions = paye + nhif + sha
console.log("Total deductions are ", totalDeductions);
const netSallary = sallaryGross +  totalDeductions
console.log("Your net sallary is ", netSallary)
