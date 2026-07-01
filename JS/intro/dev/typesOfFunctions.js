/* 
type of functions
named functions
anonymous functions
 - a function without a name
 -a function thats assgined to a variable
 -a variable can reference a function

*/
function areaCircle(r){
    return 3.142 * r* r;
}
// what will be the output for ac
let ac = areaCircle(12);
console.log(`the area circle is ${ac} is type of ${typeof ac}`);

// example of anonymous function
/*
1.create a func of my choice <named func>
2.assign that func a variable
3.directly create equate the variable to the func definition
4.remove the original func
5.try calling the variable and try calling the original func
6.remove the name of the func
7.anonymous function is created
*/
let myFunc = function func(a){
    return a * a;
};
console.log(myFunc(100));
//console.log(func(20)); // this will throw an error because func is not defined in the current scope.

let myFunc2 = function(b){
    return b + b;
};
console.log(myFunc2(330));

// arrow functions
const af = (a, f) =>{
    return a * f;
};
console.log(af(20, 30));

