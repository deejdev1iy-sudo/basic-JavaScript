/* 
callback functions-> takes one or more params as functions
*/
// create a function that prints an alert for the current time
function printAlert(){
    const alertTime = new Date();
    console.log(`current time is ${alertTime}`);

};
printAlert();

// anonymous function
setInterval(function() {
    let alertTime2 = new Date();
    console.log(`current time is ${alertTime2}`); 
}, 2000);

   


// arrow function
setInterval(() => {
  const alertTime3 = new Date();
  console.log(`current time is ${alertTime3}`);
}, 3000);

