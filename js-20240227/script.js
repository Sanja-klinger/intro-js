console.log("01)");
function oddNumbers(startNumber, endNumber) {
  if (startNumber < 0 || endNumber < 0) {
    return "Stay positive!😊";
  }

  let result = "";

  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 !== 0) {
      result += i;
      if (i < endNumber - 1) {
        result += ",";
      }
    }
  }
  return result;
}
// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
console.log(oddNumbers(-1, 15));

console.log("02)");
