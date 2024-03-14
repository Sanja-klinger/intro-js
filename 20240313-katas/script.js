function mergeArrays(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);

  // merges two arrays arr1 and arr2 that are the parameters of the function mergeArrays

  function sortNumbers(a, b) {
    return a - b;
  }
  // sort numbers by the rule of the function sortNumbers (a-b > 0 a-b< 0 a-b==0, (see how .sort() works)

  mergedArray.sort(sortNumbers);

  //initialize the variable before the loop ( see explanation why it doesent work when in the loop)

  let mergedSortedArrayEachElementOnce = [];

  // for each element of the mergedArray, starting with index zero and then every next,until reaching index mergedArray length

  for (i = 0; i < mergedArray.length; i++) {
    //do the code below:if the element before i-th element differs from the i-th element
    // or if it is the element with index zero, for it has no element before

    if (i === 0 || mergedArray[i] !== mergedArray[i - 1]) {
      // then add the element to the new array.

      mergedSortedArrayEachElementOnce.push(mergedArray[i]);

      // copies each element from mergedArray to mergedSortedArrayEachElementOnce, one by one.
      //mergedArray[i] retrieves the element at the index i from the mergedArray
    }
  }
  return mergedSortedArrayEachElementOnce;
  // return "belongs" to the function mergeArrays(arr1, arr2) {
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays([1, 2, 3, 4, 5], [1, 3, 5, 7, 9, 11]));

//string to number

const stringToNumber = function (str) {
  let numberFromString = Number(str);
  return numberFromString;
};
console.log(stringToNumber("123"));
console.log(stringToNumber("-255"));

//remove string spaces

function noSpace(x) {
  let stringNoSpace = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      stringNoSpace += x[i];
    }
  }
  return stringNoSpace;
}

console.log(noSpace("a b  n pop kiki"));
