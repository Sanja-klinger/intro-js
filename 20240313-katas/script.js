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

// string repeat

function repeatStr(n, s) {
  let newString = s.repeat(n);

  return newString;
}
console.log(repeatStr(7, "Lala"));
console.log(repeatStr(20, "Mama"));

// kata remove ! from the endo of the string

function remove(string) {
  let newString = string.replaceAll("!", "");
  return newString;
}
console.log(remove("Hey! You!"));

/*function remove(string) {
  if ((string[string.length - 1] = "!")) {
    newString = string.slice(0, -1);
  }
  return newString;
}
console.log(remove("!Hi!!"));
console.log(remove());*/

//from two words string make string first letters with concat dot zwischen den wörtern everything capital letters
console.log(".....abbrevName.....");

function abbrevName(name) {
  // "Mike Tyson" = ["Mike" "Tyson"]. Space is the delimiter, it is gone and two words are left in what is now an array
  let words = name.split(" ");

  //initializes with empty string. we add the initials to the empty string
  let initials = "";

  // starts with array named words at index zero, than every next,
  for (let i = 0; i < words.length; i++) {
    // for each element in array words the zero index character is extracted [i][0]
    //  and made upper case and added a dot
    initials += words[i][0].toUpperCase() + ".";
  }

  // removes the dot after the last initial
  initials = initials.slice(0, -1);
  return initials;
}
console.log(abbrevName("Mike Tyson"));
console.log(abbrevName("mala patka"));
console.log(abbrevName("Tralala"));
console.log(abbrevName(""));

/*function getMiddle(s)
{
let mid ="";
  if (s.length %2 === 0){
    mid = s.slice(s.length / 2 - 1, s.length / 2 + 1);
  }
  else{
    mid = s.slice((s.length-1)/2, (s.length-1)/2+1);
      } 
  return mid
}
console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");*/
