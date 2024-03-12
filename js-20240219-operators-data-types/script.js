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
