function mergeArrays(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);

  function sortNumbers(a, b) {
    return a - b;
  }

  mergedArray.sort(sortNumbers);

  let mergedSortedArrayEachElementOnce = [];
  for (i = 0; i < mergedArray.length; i++) {
    if (i === 0 || mergedArray[i] !== mergedArray[i - 1]) {
      mergedSortedArrayEachElementOnce.push(mergedArray[i]);
    }
  }
  return mergedSortedArrayEachElementOnce;
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays([1, 2, 3, 4, 5], [1, 3, 5, 7, 9, 11]));

const stringToNumber = function (str) {
  let numberFromString = Number(str);
  return numberFromString;
};
console.log(stringToNumber("123"));
console.log(stringToNumber("-255"));
