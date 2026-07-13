/*
create an obj that behaves like an array
create an array give it <any name>
 < inside the array have 2 digits>
  <0: any digit
  <1: any digit

create an object < any name>
 <inside the obj have keys>
  <0: any digit
  <1: any digit
  for the obj create a length key
  have it as size of the obj<keys>
console.table both
*/
const arr = [27, 30];
const arrObj ={
    0: 27,
    1: 30,
    length: 2,
};
console.table(arr)
console.table(arrObj)