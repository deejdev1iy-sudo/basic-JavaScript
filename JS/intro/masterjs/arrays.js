/*
array are  just objects
key<number,string, null, undefined, boolean>
value<Any data type>
an array and a normal object
the keys are sequential < 0 upto n> based on values
-> when accessing array elemnts use only bracket notation
the keys are numbers

*/
const arrCar = [
    {
   name: 'Model Y',
   model: 'Long Range AWD',
   yearManufactured: 2026,
   topSpeedKmh: 217,

   engine: {
    type: 'Electric',
    cylinders: 0,
    propulsion: 'Dual Electric Motors (front & rear)',
    batteryType: 'Lithium-ion',
    fuelType: 'Electricity',
   },

   manufacturer: {
    name2: 'Tesla, Inc',
    country: 'United States'
   },

   funFacts:`
    It features a 'Bioweapon Defense Mode' with a HEPA air filtration system.
    It was the best-selling vehicle globally, beating all gas-powered cars.
    The paranomic glass roof blocks over 99% of ultraviolet light.
   `,

   favoriteNumbers: [6, 14, 93, 70]
  }
]

const manufacturer = arrCar[0]["manufacturer"];

//console.log(engine["type"]);
//console.log(engine["cylinders"]);

const engineEntries = Object.entries(manufacturer);
console.log(engineEntries[0]);
console.log(engineEntries[0][0]);
console.log(engineEntries[0][1]);


