/*
recursive function is  a function that calls itself
since it creates an endless loop you need to use a return statment
and if condition
*/
function salaryGrossPromptPayment(attempt = 0){
     let gross = null;
     if(attempt == 0){
        gross = prompt("Enter your gross salary");
     }else {
        gross = prompt(`Invalid gross salary entered. Enter a valid number for your gross salary`)
     }

    if(isNaN(gross) === false){
        console.log(`The amount entered by you ${gross}`);
        return;
    }
    salaryGrossPromptPayment(attempt + 1);
};
salaryGrossPromptPayment();

/**
 * Calculates the factorial of a number.
 * @param1 {number} param1 - the number to calculate the factorial for
 * @returns {number|null} the factorial of `param1`, or `null` for invalid input
 * Notes: checks whether the number entered is greater than 1 and returns 1 for values <= 1
 */
function factorial(param1) {
  if (typeof param1 !== 'number' || !Number.isFinite(param1)) return null;
  if (param1 < 0) return null;
  if (param1 <= 1) return 1; // check: number entered is greater than 1

  let result = 1;
  for (let i = 2; i <= Math.floor(param1); i++) {
    result *= i;
  }
  return result;
}

// Example usage
console.log('factorial(5) =', factorial(5)); // 120
console.log('factorial(1) =', factorial(1)); // 1
console.log('factorial(0) =', factorial(0)); // 1
console.log('factorial(-1) =', factorial(-1)); // null
console.log('factorial("a") =', factorial('a'));

