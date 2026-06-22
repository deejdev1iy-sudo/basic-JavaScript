/*
Comparison operators evaluate to ONLY true or false
*/
/*
AND -> &&
  truth table -> all possible combos

*/
let val1= true;
let val2 = false;

console.log(`val1=${val1} val2=${val2} val1&&val2=${val1&&val2}`)

let sofia_age = 20; 
let sofia_balance = 30000;

// if sofia's age is greater than 18 and has more than 20k in her account

let isGreaterThanAge = sofia_age> 18
console.log(`Is sofia age greater than 18 ${isGreaterThanAge}`)

let hasMoreThanBalance = sofia_balance> 20000
console.log(`Sofia has more than 20k ${hasMoreThanBalance}`)
console.log(`Sofia's age is greater than 18 and has more than 20k in her account ${isGreaterThanAge&&hasMoreThanBalance}`)

let simplified = sofia_age>18 && sofia_balance>20000
console.log(`simplified ${simplified}`)
console.log(`further simplifications is ${sofia_age>18&&sofia_balance>2000}`)

