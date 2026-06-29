/*
Functio allow you to write reusable bits of code
syntax: function<name: variable name convection

*/
function timeAlert(){
    const date = new Date();
    console.log(`time stamp: ${date.toISOString()}`);
}
timeAlert();