import { get } from 'prompt';

/*
loops run a block of code a number of times.
shouldnt loop infinitly, make sure weve got an exit conidition

*/
let number = 0;
let numberCondition =  true;

while(numberCondition) {
    console.log("Number is", number)
    number = number + 1;
    if(number > 100) {
        numberCondition = false;
    };
}
 
function myFunc(number1){
    while(number1 > 0){
        console.log("Num is", number1)
        number1 = number1 - 1;
        
        
    }
}
myFunc(10);

function getValidNumber(promptMessage){
    while(true){
        let input = get(promptMessage);
        let num = parseFloat(input);

        if(!isNaN(num) && num > 1){
            return num;
        } else {
            console.log("Error: Please enter a valid number greater than 1");
        }
    }
}
function processNumbers(num1 , num2){
    console.log(`\n Processing numbers${num1} and ${num2} `);
    console.log(`Sum: ${num1 + num2}`);
    console.log(`Product: ${num1 * num2}`);
    console.log(`Average: ${num1 + num2}/ 2`);

    console.log(`Results: \n ${num1 + num2}\n Product: ${num1 * num2}\n Average: ${num1 + num2}/2`);
}

function main (){
    console.log('---Number input---\n');
    let num1 = getValidNumber(`Enter the first number: greater than 1`);
    let num2 = getValidNumber(`Enter the second number: greter than 1`);

    processNumbers(num1, num2);
}
main();


//function to create math table
function createMathTable(num1, num2){
    /*
    @param {number}num1 -> first number must be > 1
    @param {number}num2 -> second number must be > 1
    @return {object} -> returns the math table results
    */
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log("Error: Both parameters must be numbers")
        return null;
    }
    if(num1 <=1 ||num2 <= 1){
        console.error("Error: both numbers must be greater than 1");
        return null
    }
}
console.log(`\n === Math Table for ${num1} and ${num2} ===\n`);
console.log('Operation\t| Result');
console.log('------------------------');

let results = {
    addition: num1 + num2,
    subtraction: num1 - num2,
    multiplication: num1 * num2,
    division: num1 / num2,
    modulus: num1 % num2
};

console.log(`Addition\t| ${results.addition}`);
console.log(`Subtraction\t| ${results.subtraction}`);
console.log(`Multiplication\t| ${results.multiplication}`);
console.log(`Division\t| ${results.division}`);
console.log(`Modulus\t| ${results.modulus}`);


console.log(`\n === Multiplication Table for ${num1}===`);
for (let i = 1; i <= 10; i++){
    console.log(`${num1} * ${i} = ${num1 * i}`)
}

console.log(`\n === Multiplication Table for ${num2}===`);
for (let i = 1; i<= 10; i++){
    console.log(`&{num2} * ${i} = ${num2 * i}`)
}
