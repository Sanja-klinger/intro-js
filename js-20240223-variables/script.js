let userName = "Ben";
userName = "Jenna";

function getUserNameLength(userName) {
  let result = userName.length;
  return result;
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

function isString(something) {
  return typeof something === "string";
}

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true

//from chat GPT test, the question i did not answer correctly
let myString = "Hello, World!";
let firstCharacter = myString[0]; // Accessing the first character, index 0
let fifthCharacter = myString[4]; // Accessing the fifth character, index 4

console.log(firstCharacter); // Output: H
console.log(fifthCharacter); // Output: o
