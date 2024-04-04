/*function isIsogram(str) {
  // empty string is an isogram
  if (str === "") {
    return true;
  }

  // mistyped ToUpper, missing the brackets
  // so MoOse is not an isogram
  str = str.toUpperCase();
  //forgot let
  //input ist a string, output is boolean
  let isogram = true;
  // turn the string to an array, to be able to iterate over each element separately
  let arr = str.split("");
  /*here we drop the letters to be compared
   * we start with an empty array and initialize it before the loop
   */
/*let compareArr = [];

  for (i = 0; i < arr.length; i++) {
    //forgot arr[]
    if (compareArr.includes(arr[i])) {
      isogram = false;
      break;
    }
    compareArr.push(arr[i]);
  }

  return isogram;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("mOoSswe")); */

console.log(["1", "2", "3", "4", "5"].map(Number));
console.log([3, 5, 7, 1, 6, 4, 9].sort());
console.log([1, 2].concat([2, 2, 2]));
console.log([2, 2] + [5, 5]);
console.log([2, 2] + [5, 5]);
/*In JavaScript, when you use the + operator with arrays,
 it implicitly converts the arrays into strings and then concatenates those strings.*/
console.log(String(12345).split("").map(Number).reverse());
console.log(["a", "b", "c", "d"].copyWithin(0, 1, 2));
console.log([1, 2, 3, 4].copyWithin(2, 0, 1));
console.log([1, 2, 3, 5, 8].entries()); // only returns the iterator
console.log([...[1, 2, 3, 5, 9, 48].entries()]);
console.log([...[1, 2, 3, 5, 8].entries()]);
// console.log([12, 5, 8, 130, 44].every(>10));
