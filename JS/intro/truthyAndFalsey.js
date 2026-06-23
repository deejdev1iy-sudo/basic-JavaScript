/*
truthy or falsey
1. flase
2.0
3.-0
4.null
5.undefined
6. '' -> empty string
7. NAN -> not a number
Anything that's not falsey is truthy
| truthy|flasey -> truthy
*/

let userName = "Sarah Kings";
let userName1 = "0";

let activeUserName = userName1 || userName
console.log(activeUserName);

let bothUserName = userName || userName1
console.log(bothUserName)