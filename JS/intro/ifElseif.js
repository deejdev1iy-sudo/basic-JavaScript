const prompt = require('prompt-sync')();
let age = Number(prompt('Enter your age:'));

console.log(` age is ${age}  typeof ${typeof age}`);
console.log(`you entered ${age}`);

if(age<10){
    console.log("You're a baby")
}else if(age<13){
    console.log("You're a teeen")
}else if(age<18){
    console.log("You can legally drink&smoke")
}else if(age>27){
    console.log("Best age for marriage")
}else if(age>45){
    console.log("Best age for retirement")
}else if(age>50){
    console.log("You're a survivor")
}

