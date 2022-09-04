let js = "amazing";
if (js === "amazing") alert("wlecom Naveen");
40 + (60 * 80) / 7;
console.log(40 + (60 * 80) / 7);
let last_name = "jonothan";
console.log(last_name);
var PI = 24;
console.log(PI);
//boolean
let javaScriptIsFun = false;
console.log(javaScriptIsFun);
console.log(typeof false);
//can changing
javaScriptIsFun = "Nathanda";
console.log(typeof javaScriptIsFun);
//define
let value;
console.log(value);
console.log(typeof value);
console.log(typeof null);
//data type
let isISland = false;
let language;
console.log(typeof isISland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);
//let, const, var
let age = 45;
age = 50;
console.log(age);
const nallu = "Naveen";
nallu = "kamala";
console.log(nallu);
var baloon = "blast";
baloon = "Air";
Nname = "raj";
language = "tamil";
const language = "english";
const country = "germany";
country = "pakisthan";
country = false;
console.log(language);
//operator
//arithmetic Operator
let nasa = 2022;
const ageNaveen = nasa - 1998;
const ageGlad = nasa - 1935;
console.log(ageGlad, ageNaveen);
console.log(ageGlad * ageNaveen, ageNaveen / 2, ageGlad ** 2); //(2**3-> 2 to the power of 3)
//Assingment operator
let x = 10;
x = 10 + 5;
15;
x += 10;
25;
x *= 4;
100;
x++;
100;
x--;
//comaprision operator
console.log(ageGlad < ageNaveen);
const compoOfAge = ageNaveen < ageGlad;
console.log(ageNaveen - ageGlad > ageGlad - ageNaveen);
console.log(nasa - 1998 < nasa - 1935);
//=======================================================
let indiaPopulation = 1390;
let ans = indiaPopulation / 2;
let finland = 6;
let averageCountry = 33;
console.log(ans);
indiaPopulation++;
console.log(indiaPopulation);
let land = indiaPopulation > finland;
console.log(land);
console.group(indiaPopulation < averageCountry);
let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);
//------------------------------------------------------------------------
//conversion
let naan = "23" + 40;
let veen = 32;
let vaan = "23";
console.log(naan);
console.log(String(vaan) + "dog");
console.log(Number(veen) + 40);
console.log(Number("lot"));
console.log(typeof NaN);
console.log(Number("23"), 23);
//----------------------------------------------
//coercion
console.log("I am " + 23 + "years old");
console.log("2" + 6 + "5");
console.log("2" - "5" - "6");
console.log("2" - 5 - 6);
let m = 58 + "4";
console.log(m);
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

//=======================================================

//Equality == Vs ===;
let year = 1998;
if (year == 1998) console.log("my birthday");
let year = 1998;
if (year === 1998) console.log("my birthday");
let year = 1998;
if (year === "1998") console.log("my birthday");

prompt("what the hell");
("23");
const done = prompt("what the hell");
console.log(done);

prompt("what the hell");
("20");
console.log(typeof prompt);
console.log(typeof done);

const done = prompt("what the hell");
console.log(done);

if (done == 60179);

if (done == 60179) console.log("what the hell");

if (done == 6079) console.log("what the hell");
if (done === 60179) console.log("what the hell");
if (done == 60179) console.log("what the hell");

if (done !== 60179) console.log("what the hell");

const done = prompt("what the hell");
console.log(done);

if (done == 60179) console.log("what the hell");
if (done !== 60179) console.log("why not");
//Test
const numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);
console.log(numNeighbours);
if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("numNeighbours is greater than 1");
} else {
  console.log("No borders");
}
//---------------------------------------------------------------


//logical operator
//1.
let india = "Speakes English" + " " + !"island" + " " + `3890 Million`;
const sarahCriteria = "Speakes English" + " " + !"island" + " " + `50 Million`;

if (sarahCriteria == india) {
  console.log("You should live in Portugal :)");
} else (sarahCriteria !== india) {
  console.log("Portugal does not meet your criteria :(");
} 

let country='Portugal';
let language='English';
let population=42;
let isISland=!isISland;

if(language==='English'&& population<50&&!isISland){
console.log(`You should live in ${country} :)`);
}else{
    console.log(`${country} does not meet your criteria :(`);
}
//2.
let dolphinsScore = [98, 148, 109];
let koalasScore = [111, 99, 110];
const averageOfDolphins = (98 + 148 + 109) / 3;
const averageOfKoalas = (98 + 148 + 109) / 3;
console.log(averageOfDolphins, averageOfKoalas);

if (averageOfDolphins > averageOfKoalas && averageOfDolphins > 100) {
  console.log("Dolphin Team Get the Trophy");
} else if (averageOfKoalas > averageOfDolphins && averageOfKoalas > 100) {
  console.log("KoALAS Team get the Trophy");
} else if (
  (averageOfDolphins === averageOfKoalas && averageOfDolphins,
  averageOfKoalas > 100)
) {
  console.log("Match Draw");
} else {
  console.log("No one wins the Trophy");
}
//----------------------------------------------------------------------------------
//Switch case
let language = "vcghjm";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speaker");
    break;
  case "spanish":
    console.log("2nd place in number of native speaker");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too");
}

//2.
if (language === "chinese"||language== "tamil") {
  console.log("Most number of native speaker");
} else if (language === "spanish") {
  console.log("2nd place in number of native speaker");
} else if (language === "english") {
  console.log("3rd place");
} else if (language === "hindi") {
  console.log("Number 4");
} else if (language === "arabic") {
  console.log("5th most spoken language");
} else if (language === "mandarin") {
  console.log("6th most spoken language");
} else if (language === "germain") {
  console.log("7th most spoken language");
} else {
  console.log("Great language too :D");
}
//=================================================================

//terinary or conditional operator
const age = 25;
const rights = age > 18 ? "we can drink wine" : "we can drinkl only water";
console.log(rights);

if (age > 18) {
  ("we can drink wine");
} else {
  ("we can drinkl only water");
}
console.log(
  `I like to drink ${
    age > 18 ? "we can drink wine" : "we can drinkl only water"
  }`
);

let indiaPOP = 130;
indiaPOP > 33 ? "above" : "below";
console.log(
  `India's population is ${indiaPOP > 33 ? "above" : "below"} average`
);

let amount = 40;
let tip = amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.2;
console.log(tip);
const totalAMt = amount + tip;
console.log(
  `The bill was ${amount}, the tip was ${tip} and the total value ${totalAMt}`
);
//==================================================================================

