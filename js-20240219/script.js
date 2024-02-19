function welcomeMsg(name) {
  console.log("Welcome " + name + "!");
}

welcomeMsg("John");
welcomeMsg("Jane");

function calcGrossPrice(netPrice, taxRate) {
  return netPrice + netPrice * taxRate;
}

console.log(calcGrossPrice(20, 0.19));

console.log(calcGrossPrice(40, 0.16));

function addPositive(number1, number2) {
  return Math.abs(number1) + Math.abs(number2);
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));

/* 02) Gross Price Function
Implement a calcGrossPrice function.

Calculating the gross price involves adding the net price and the tax amount. Here's the basic formula:

Gross Price = Net Price + ( Net Price × Tax Rate )
Gross Price=Net Price+(Net Price×Tax Rate)

The first parameter is the net price as integer number
The second parameter is the tax rate as float number
The function should return the gross price
// TODO: implement calcGrossPrice function

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

03) Add Positive Function
Implement a addPositive function.

The function has two parameters which will always be numbers
The function should add the two numbers and return the result
If any of the arguments is a negative number, it should be handled as a positive number (see example code)
// TODO: Implement the addPositive function

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9

*/
