console.log("01)");

const size = 21;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}
console.log(result);

console.log("02)");

function oddEven(x) {
  let result;
  if (Number.isInteger(x / 2)) {
    result = "Even";
  } else {
    result = "Odd";
  }
  return result;
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

console.log("03)");

function oldYoung(age) {
  if (age < 0) {
    return "Invalid parameter";
  }

  let result;
  if (age < 16) {
    result = "Child";
  } else if (16 < age && age < 40) {
    result = "Young person";
  } else if (40 < age && age < 50) {
    result = "The new 20s";
  } else {
    result = "Elder person";
  }
  return result;
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

console.log(oldYoung(44));
// result should be The new 20s
