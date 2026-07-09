/*
ts a datatype that houses othe datatypes
key: value pair
key->number/string<should be unique>
value-> any  other datatype
*/

// create an object called car
const car = {
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

   printInfo: function(){
    console.log(`Car: ${this.manufacturer.name2} ${this.name} (${this.model})`);
    console.log(`Year: ${this.yearManufactured}`);
    console.log(`Top Speed: ${this.topSpeedKmh} km/h`);
    console.log(`Engine Type: ${this.engine.type} (${this.engine.propulsion})`);
    console.log(`Origin: Made in the ${this.manufacturer.country}`);
    console.log(`Fun Facts: These are ${this.funFacts}`);
   }
}
car.printInfo();
/*console.log(`Car datatype ${typeof car}`);
console.log(car);
console.log('---using console.log(table)---');
console.table(car);*/
console.log(`Name is ${car.model} its type is ${typeof car.model}`);

let carModel = 'model';
console.log(`model is${car[carModel]} its type is ${typeof car[carModel]}`);
console.log(`car manufacturer is ${car.manufacturer.name2} ${car.name} ${car.model}`)