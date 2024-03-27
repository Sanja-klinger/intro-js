function isIsogram(str) {
  if (str === "") {
    return true;
  }

  // mistyped ToUpper,  the brackets
  str = str.toUpperCase();
  //forgot let
  let isogram = true;
  let arr = str.split("");
  let compareArr = [];

  for (i = 0; i < arr.length; i++) {
    if (compareArr.includes(arr[i])) {
      isogram = false;
      break;
    }
    compareArr.push(arr[i]);
  }

  return isogram;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("mOoSswe"));
