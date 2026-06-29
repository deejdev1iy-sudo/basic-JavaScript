/*
Functions allow you to write reusable bits of code
syntax: function<name: variable name convection<parameters>

*/
/*function timeAlert(){
    const date = new Date();
    console.log(`time stamp: ${date.toISOString()}`);
}
timeAlert();
function areaOfTriangle(base, height){
    console.log(`base is ${base} its type ${typeof base}`)
    console.log(`height is ${height} its type ${typeof height}`)
    const area = 0.5 * base * height;
    console.log(`for triangle with base ${base} and height ${height} area is ${area}`)
};
//scenario 1
areaOfTriangle();
// scenario 2
areaOfTriangle(20);
//scenario 3
areaOfTriangle(30,45);
//scenario 4
let base1 = 100;
let height1 = 50;
areaOfTriangle(base1, height1);*/

function sayTheName(){
    let firstName = "Jerk";
    console.log(`First Name ${firstName}`);
    return "Derry"
    let secondName = "Sean";
    console.log(`Second Name ${secondName}`);
    return 20;
    let fullNames = `${firstName} ${secondName}`;
    console.log(`FullNames are ${fullNames}`);
};
let myNameValue = sayTheName();
console.log(`Func returns ${myNameValue} its type ${typeof myNameValue}`);





