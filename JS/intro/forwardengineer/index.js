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
