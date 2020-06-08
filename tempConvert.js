const kelvin = 0;
// this is gonna stay a constant variable
let celsius = kelvin - 273;
//  Celsius is 273 degrees less than Kelvin.
let fahrenheit = Math.floor(celsius * (9/5) + 32);
// Fahrenheit = Celsius * (9/5) + 32
//  no decimals
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)