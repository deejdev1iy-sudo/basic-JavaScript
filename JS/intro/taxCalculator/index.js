const prompt = require('prompt-sync')();
let grossMonthlySalary = null;

while(true) {
  let gross = Number(prompt("enter your gross salary: "));
  if (!isNaN(gross) && gross > 0){
      grossMonthlySalary = gross;
      break;
  }
  console.log(`Invalid amount entered. Ensure you've entered a number greater than 0`);
}
console.log(`Gross salary is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`)

// Determine salary tier
let tier1 = 24000;
let tier2 = 32333;
let tier3 = 500000;
let tier4 = 800000;
let salaryTier = "";
let nssf = grossMonthlySalary * 0.06;

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



let gap1 = 24000;
let gap2 = 32333;
let gap3 = 500000;
let gap4 = 800000;
const brac1 = gap1 * 0.1;
const brac2 = (gap2 - gap1)*0.25;
const brac3 = (gap3 -gap2)* 0.3;
const brac4 = (gap4 -gap3)*0.325;

const personalRelief = 24000;
let shif = grossMonthlySalary * 0.0275;
let housingLevy = grossMonthlySalary * 0.015;
let taxPaye = 0;
let taxableIncome =  grossMonthlySalary - nssf;

if(taxableIncome<= gap1){
    taxPaye = taxableIncome * 0.10;
}
else if(taxableIncome<= gap2){
    taxPaye = (taxableIncome - gap1)*0.25 + brac1;
}
else if (taxableIncome<= gap3){
    taxPaye = (taxableIncome - gap2)*0.30+(brac1 + brac2);
}
else if(taxableIncome <= gap4){
    taxPaye = (taxableIncome - gap3)*0.325+(brac1 +brac2 +brac3);
}
else {
    taxPaye = (taxableIncome - gap4)*0.35+(brac1+brac2+brac3+brac4);
}    

const finalPaye = Math.max(0, taxPaye - personalRelief);
console.log(`Taxable Income:  taxPaye ${taxPaye} personalRelief ${personalRelief} finalPaye ${finalPaye}`)


const totalDeductions =  finalPaye + nssf + shif + housingLevy;
const netSalary = grossMonthlySalary - totalDeductions;

console.log(`For gross salary ${grossMonthlySalary} 
    NSSF: ${nssf} 
    Taxable Income: ${taxableIncome} 
    PAYE: ${finalPaye}
    SHIF: ${shif.toFixed(2)} 
    Housing Levy: ${housingLevy.toFixed(2)}
    Total Deductions: ${totalDeductions.toFixed(2)}
    Net Salary: ${netSalary.toFixed(2)}`)