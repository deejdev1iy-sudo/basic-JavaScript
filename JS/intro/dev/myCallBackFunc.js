/*
Create our own callback functions.
Each shape function is passed into a generic shape function.
*/

const areaOfRectangle = (length, width) => {
    return  length * width;
};

const areaOfCircle = (radius) => {
    return Math.PI * radius ** radius;
};

const areaOfTriangle = (base, height) => {
    return 0.5 * base * height
};
/*3.Inside your shape func create a result variable
  -equate it to the func call of @ param1, and pass @param3 , param4, param5
  -result = @param1(param3, param4, param5)
4. Console.log(the shape name and the result)
   -for each shape call it like step2 and see the result)
   -shape(areaofcircle, "circle", 10)
*/
function shape(callback, shapeName, s1, s2, s3) {
    console.log(`param1 -> ${callback.name} (${typeof callback})`);
    console.log(`param2 -> ${shapeName} (${typeof shapeName})`);
    console.log(`param3 -> ${s1} (${typeof s1})`);
    console.log(`param4 -> ${s2} (${typeof s2})`);
    console.log(`param5 -> ${s3} (${typeof s3})`);

    const result = callback(s1, s2, s3);
    console.log(`Area of ${shapeName} is ${result}`);
    return result;
}

console.log(shape(areaOfRectangle, "rectangle", 4, 6, 10));
console.log(shape(areaOfCircle, "circle", 3));
console.log(shape(areaOfTriangle, "triangle", 6, 10, 2));

