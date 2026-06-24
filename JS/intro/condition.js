/*

Conditions -> control the flow of the code by making a decision
syntax:
if you want to use if
  if(<conditon goes){
    if condition is truthy then it'll execute code in {}
    if condition is falsey then it wont execute code
            }
*/
// scenario 1
let truthyValue = "Introduction to conditional operators"
if(truthyValue){
    console.log("Scenario 1 it run")
};

// scernario 2
let falseyValue = 0
if(falseyValue){
    console.log("Scenario 2 it run")
};

// scenario 3
if('isBeenWatched'){
    console.log("Scenario 3 it run")
};

//scenario 4
if(''){
    console.log("Scenario 4 it run")
};

// scenario 5
if(10>20){
   console.log('Scenraio 5 it run')
};

//scenario 6
if(20>10){
    console.log("Scenraio 5 it run")
}