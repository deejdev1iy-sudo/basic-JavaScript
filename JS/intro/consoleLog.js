// console log
const sallaryGross = 60000;
console.log("Gross salary is ", sallaryGross);

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

