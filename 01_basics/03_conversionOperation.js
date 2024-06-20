// let score = "33"

// console.log(typeof score);    // this code shows the output as number
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));         // This part of code shows nan value as the number is 33abc

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// checking the value if null

// let score = null

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);         // This part of code shows null value as the number is null

// if we use undefined then again the result will be nan
// we check if taking the value as true we get 1 as output
// if we can't convert any datatype to number it will give result as nan
// "33" => 33
// "33abc" => NaN
//  true => 1. false => 0

// let isLoggedIn = "Ayush"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1=> true; 0 => false
//  "" => false
// "Ayush" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);