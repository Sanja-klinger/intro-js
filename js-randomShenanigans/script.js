console.log("1)");
const ObjekatS = {
  adresa: "Malo Brdo bb",
  sprat: "treći",
  glib: "obrisati",
};

ObjekatS.lokacija = "kod marketa Vivija";

delete ObjekatS.glib;

console.log(ObjekatS);

for (const property in ObjekatS) {
  console.log(property, ObjekatS[property]);
}

console.log("2)");
const magicalObject = {
  wand: "Enchanted Wood",
  spell: "Abracadabra",
  potion: "Elixir of Wisdom",
};

for (let key in magicalObject) {
  console.log(`Key: ${key}, Value: ${magicalObject[key]}`);
}

console.log("3)");
const phone = "+49 123 458699";
const isIncluded = phone.includes("+49");
console.log(isIncluded);

//case sensitive!
const word = "cyclopentanoperhydrophenanthrene";
const isPartOfTheWord = word.includes("Hydro");
console.log(isPartOfTheWord);

const term = "cyclopentanoperhydrophenanthrene";
const isPartOfTheterm = term.includes("hydro");
console.log(isPartOfTheterm);

console.log("4)");

const str = "Bošković Marković Popović";
const resultStr = str.replace("Pop", "Vuj");
console.log(str);
console.log(resultStr);

console.log("5)");
const stringy = "income inside indoors";
const resultStringy = stringy.replaceAll("in", "out");
console.log(stringy);
console.log(resultStringy);

console.log("6)");

const sentence = "Heey, come out and play";
const wordsArr = sentence.split(" ");
const charArr = sentence.split("");
console.log(wordsArr);
console.log(charArr);

console.log("7)");

const rechenica = "So long and thanks fo all the fish";
const firstIndex = rechenica.indexOf(" ");
console.log(firstIndex);

const secondIndex = rechenica.indexOf(" ", firstIndex + 1);
console.log(secondIndex);

console.log("8)");

const la = "La";
const singing = la.repeat(10);
console.log(singing);

console.log("9)");

const satz = "А у руке Мандушића Вука, биће свака пушка убојита!";

const satzUpper = satz.toUpperCase();
console.log(satzUpper);

const satzLower = satz.toLowerCase();
console.log(satzLower);
