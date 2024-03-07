console.log("1)");

function removeItem(niz, broj) {
  const noviNiz = niz.slice();
  // when no parameters passed into slice, it will create a shallow copy
  noviNiz.splice(broj - 1, 1);

  return noviNiz;
}

// TODO: Implement the removeItem function

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

console.log("2)");

function sumOfCharacters(array) {
  let charactersCount = 0;

  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === "string") {
      charactersCount += array[index].length;
    }
  }
  return charactersCount;
}
// TODO: Implement the sumOfCharacters function

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
