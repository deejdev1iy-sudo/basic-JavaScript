const prompt = require('prompt-sync')();
let grossMonthlySalary = null;

while(true) {
  let gross = Number(prompt("enter your gross salary: "));
  if (!isNaN(gross) && gross > 0){
      grossMonthlySalary = gross;
      break;
  }
  alert(`Invalid amount entered. Ensure you've entered a number greater than 0`);
}
console.log(`Gross salary is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`)

// Determine salary tier
let tier1 = 24000;
let tier2 = 32333;
let tier3 = 500000;
let tier4 = 800000;
let salaryTier = "";
let PAYE = 0;

if (grossMonthlySalary > 0 && grossMonthlySalary <= tier1) {
    salaryTier = "Tier 1";
    PAYE = grossMonthlySalary * 0.10;
} else if (grossMonthlySalary > tier1 && grossMonthlySalary <= tier2) {
    salaryTier = "Tier 2";
    PAYE = grossMonthlySalary * 0.25;
} else if (grossMonthlySalary > tier2 && grossMonthlySalary <= tier3) {
    salaryTier = "Tier 3";
    PAYE = grossMonthlySalary * 0.325;
} else if (grossMonthlySalary > tier3 && grossMonthlySalary <= tier4) {
    salaryTier = "Tier 4";
    PAYE = grossMonthlySalary * 0.35;
} else if (grossMonthlySalary > tier4) {
    salaryTier = "Tier 5";
    PAYE = grossMonthlySalary * 0.40;
}

console.log(`\nSalary Information:`);
console.log(`Gross Salary: ${grossMonthlySalary}`);
console.log(`Salary Tier: ${salaryTier}`);
console.log(`PAYE: ${PAYE}`)