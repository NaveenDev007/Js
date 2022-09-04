//strict mode
"use strict";
const interface = "bug";
console.log(interface);

const private='bug';

console.log(private);

const if='bug';
console.log(if);

//------------------------------------

//function 
function begger(){
  console.log('begging')
}

begger();

function juice(apple, orange){
  
  const refJuice=`juice with ${apple} apple and ${orange} orange.`;
  return refJuice

}
 juice(2,654);
//-----------------------------------------------------------------------
 //function declartion
 const ready=juice(50,62);
 console.log(ready);

 const num=Number('468987');
 //practis
 function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const india = describeCountry("India", 6569, "Delhi");
const Finland = describeCountry("Finland", 58, "Helsinki");
console.log(india, Finland);

function calAge(birthYear){
  const age= 2022-birthYear;
  return age;
}
console.log(calAge(1998));
//-------------------------------------------------------------------------

//function Expression
const age=function(birthYear){
  return 2022-birthYear
}
const age2=age(1998)
console.log(age2)
//practis---------------------------------------------------
//funtion declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100 + "%";
}
const popu1 = percentageOfWorld1(1441);
console.log(`china has ${popu1} of the world population`);
const popu2 = percentageOfWorld1(144);
console.log(`Poland has ${popu2} of the world population`);
const popu3 = percentageOfWorld1(56498);
console.log(`India has ${popu3} of the world population`);

//3. function expresasion
const kopu = function (kopulation) {
  return (kopulation / 7900) * 100 + "%";
};
const kopu1 = kopu(1441);
console.log(`china has ${kopu1} of the world population`);
const kopu2 = kopu(144);
console.log(`Poland has ${kopu2} of the world population`);
const kopu3 = kopu(56498);
console.log(`India has ${kopu3} of the world population`);
//----------------------------------------------------------------------------
//Arrow function
const calcAge=birthYear=>2022-birthYear;
console.log(calcAge(1998));

const retirAge=(birthYear,fullname)=>{
  const age=2022-birthYear;
  const retire=75-age;
  return `${fullname} retire in ${retire} years`
}
console.log(retirAge(1998, 'Naveen'));
console.log(retirAge(2002, 'Pradeep'));
//practis
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const india = percentageOfWorld3(1441);
const china = percentageOfWorld3(11);
const japan = percentageOfWorld3(1454);
console.log(india, china, japan);
//--------------------------------------------------------------------------------

//Function call function
const percentageOfWorld = function (population) {
  return (population / 7900) * 100;
};

const describePopulation = (country, population) => {
  const percent = percentageOfWorld(population);
  return `${country} has ${population} million people which is about ${percent}% of the world`;
};

console.log(describePopulation("china", 1441));
 console.log(describePopulation("India", 144354)); 
console.log(describePopulation("poland", 152));
//-----------------------------------------------------------

//reviewing function
function calAge(birthYear){
return 2022-birthYear;
}
const retirAge=birthYear=>{
  const retire=75-calAge(birthYear);
  if(retire>0){
console.log(`you do work`)
return ("Unnal mudium") 
  }else(
    console.log(`You stop the Work`)
  )
return ('Veliya po')
}
console.log(retirAge(1998));
//----------------------------------------------------------------

//practis
const calcAverage = (s1, s2, s3) => {
  return (s1 + s2 + s3) / 3;
};
const dAverage = calcAverage(85, 54, 41);
console.log(dAverage);
const kAverage = calcAverage(23, 34, 27);
console.log(kAverage);
function chechWinner(dScore, kScore) {
  if (dScore >= 2 * kScore) {
    console.log(`Dolphins Win ${dAverage} vs ${kAverage}`);
  } else if(kScore>=2*dScore){
    console.log(`Koalas Win ${kAverage} vs ${dAverage}`);
  }else{
    console.log(`No Team wins`)
  }
}
console.log(chechWinner(dAverage, kAverage));
//----------------------------------------------------------------

//Array
const friends=['ram', 'guna', 'senthil', 'rajan'];
console.log(friends);
const food=new Array['idly','vadai', 'soru', 'biriyani'];
console.log(friends[2]);
console.log(friends.length);
console.log(friends.length-1);
console.log(friends[friends.length-1]);
friends[2]='remo';
console.log(friends);
const naam='myName';
const me=[naam, 'ddai', 'patti', 'tinkering', 'seiyatha']
console.log(me);
//------------------------------------------------------------------

//basic array operations
const friends=['ram', 'guna', 'senthil', 'rajan'];
console.log(friends);
//add element
//push
const newLength=friends.push('pasupathi');
console.log(newLength);
//unshift
friends.unshift("kumaru")
console.log(friends)
//remove element
//pop
friends.pop();
console.log(friends);
//shift
friends.shift();
console.log(friends);
console.log(friends.indexOf('senthil'));
console.log(friends[2]);
console.log(friends.includes('senthil'));
console.log(friends.includes(23));

//Intro of array;
const populations = ["6900", "1441", "782", "598"];
const percentageOfWorld1 = (popu) => (popu / 7900) * 100;
const p1 = percentageOfWorld1(populations[0]);
const p2 = percentageOfWorld1(populations[1]);
const p3 = percentageOfWorld1(populations[2]);
const p4 = percentageOfWorld1(populations[3]);
const persentages = [p1, p2, p3, p4];
console.log(populations);
console.log(persentages);
console.log(populations.length === 4);

//basic operation;
const neighbouring = ["India", "pakisthan", "nepla", "kashmir"]; //1
console.log(neighbouring);

neighbouring.push("Utopia"); //2
console.log(neighbouring);

neighbouring.pop(); //3
console.log(neighbouring);

if (neighbouring.includes("Germany")) {
  console.log(true);
} else {
  console.log("probably not a central European country");
} //4

console.log(neighbouring.indexOf("pakisthan"));
console.log((neighbouring[2] = "Republic of pakisthan")); //5

//another way
if (!neighbouring.includes("Germany")) {
  console.log("probably not a central European country");
} //4

neighbouring[neighbouring.indexOf("pakisthan")] = "Republic of pakisthan"; //5
console.log(neighbouring);

//coding challenge
const calcTip = function (amount) {
  if (amount >= 50 && amount <= 300) {
    return amount * 0.15;
  } else {
    return amount * 0.2;
  }
}; //1

const bills = [125, 555, 44]; //2

const bill1 = calcTip(bills[0]);
const bill2 = calcTip(bills[1]);
const bill3 = calcTip(bills[2]);
const tips = [bill1, bill2, bill3]; //3
console.log(tips);

const to1 = bills[0] + tips[0];
const to2 = bills[1] + tips[1];
const to3 = bills[2] + tips[2];
const total = [to1, to2, to3]; //4
console.log(total);
//------------------------------------------------

//objects
const my_country={
  country:'india',
  capital:'Delhi',
  language:'hindi',
  population:3980,
  neighbouring:["pakisthan", "nepla", "kashmir"]
};
console.log(my_country);

my_country.population+=2;
console.log(my_country.population);
my_country['population']-=2;
console.log(my_country.population);

const details=prompt('what should you know about country?')
console.log(my_country[details]);

if(my_country[details]){
console.log(my_country[details]);
}else{
  console.log('Enter Wrong value');
}

//Dot Vs bracket Notation
const Naveen={
  firstName:'Naveen',
  friends:['ram', 'guna', 'senthil', 'rajan']
}
console.log(`${Naveen.firstName} has ${Naveen.friends.length} friends, and his best friend is called ${Naveen.friends[0]}`);

//practis-1
const Naveen = {
  fullName: "Naveen kumar",
  birthYear: 1996,
  job: "teacher",
  hasDrivingLicense: true,
  calAge: function () {
    return 2023 - this.birthYear;
  },
  getSummary: function () {
    console.log(
      `${this.fullName} is a ${this.calAge()}-year old ${
        this.job
      }, and he has ${this.hasDrivingLicense ? "a" : "no"} driving licence.`
    );
  },
};
console.log(Naveen.getSummary());
//practis-2

const mark = {
  fullName: "Mark miller",
  mass: 78,
  height: 1.69,
  calBmi1: function () {
    this.Bmi = this.mass / this.height ** 2;
    return this.Bmi;
  },
};

const john = {
  fullName: "John smith",
  mass: 108,
  height: 1.95,
  calBmi2: function () {
    this.Bmi = this.mass / this.height ** 2;
    return this.Bmi;
  },
};
mark.calBmi1();
john.calBmi2();

console.log(mark.Bmi, john.Bmi);
const BMI =
  mark.Bmi > john.Bmi
    ? `${mark.fullName} BMI ${mark.Bmi} is higher than John's ${john.fullName}!`
    : `${john.fullName} BMI ${john.Bmi} is higher than Mark's ${mark.fullName}!`;
console.log(BMI);
//---------------------------------------------------------------------------------

//Iteration - for loop
for(let rep=1; rep<=10;  rep++ ){
console.log(`Lifting weight repetition ${rep}`)
}
//practis
for (v = 1; v <= 50; v++) {
  console.log(`Voter number ${v} is currently voting`);
}

//Looping Arrays, Breaking and Continuing
const my_country=[
  'india',
  'Delhi',
  'hindi',
  3980,
  ["pakisthan", "nepla", "kashmir"]
]
const type=[];
for(let i=0; i < my_country.length; i++){
//Reading Array
console.log(my_country[i], typeof my_country[i]);
//filling Array
type[i]=typeof my_country[i];
type.push(typeof my_country[i])
}
//continue 
for(let i=0; i < my_country.length; i++){
if(typeof my_country[i] !=='string')continue;{
console.log(my_country[i], typeof my_country[i])
}
}

//break
for(let i=0; i < my_country.length; i++){
 if(typeof my_country[i]=='number')break;
  console.log(my_country[i], typeof my_country[i])
}

//-------------------------------------------------------
const years=[1998, 1999, 2005, 2006, 2012];
const age=[];
for(f=0; f<years.length; f++){
age.push(2030-years[f]);
}
console.log(age);

//practis
const populations = [1441, 144, 834];
const populations2 = [];
for (let i = 0; i < populations.length; i++) {
  const percent = (populations[i] / 7900) * 100;
  populations2[i] = percent;
}
console.log(populations2);

//-----------------------------------------------------------

//loop backward  
const my_country=[
  'india',
  'Delhi',
  'hindi',
  3980,
  ["pakisthan", "nepla", "kashmir"]
]

for(let d=my_country.length-1; d>=0; d--){
console.log(my_country[d])
}
//---------------------------------------------

//loop in loop
for(let a=1; a<4; a++){
console.log(`----------------You can do it. set-${a}---------------`);
for(let b=1; b<=15; b++){
 console.log(`Set-${a}: Lifting weight repetition ${b}`) 
}
}
//practis
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (j = 0; j < listOfNeighbours.length; j++) {
  for (i = 0; i < listOfNeighbours[j].length; i++) {
    console.log(`Neighbour:${listOfNeighbours[j][i]}`);
  }
}
//-----------------------------------------------------------

//while loop
let rep=1;
while(rep<=10){
  console.log(`Lifting weight repetition ${rep}`)
  rep++
}

let dice=Math.random()
console.log(Math.random()*7);

let dice= Math.trunc(Math.random()*7)+1;
while(dice !==7){
console.log(`you rolled a ${dice}`);
dice=Math.trunc(Math.random()*7)+1;
if(dice ===7)
  console.log(`you rolling is end`);
};
//practies-1
const populations = [1441, 144, 834];
function percent3() {
  return (populations[i] / 7900) * 100;
}
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  let now = percent3(populations[i]);
  i++;
  percentages3[i] = now;
}
console.log(percentages3);

//practies-2
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (amount) => {
  if (amount >= 50 && amount <= 300) {
    return amount * 0.15;
  } else {
    return amount * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  const billu = calcTip(bills[i]);
  tips[i] = billu;
}

let i = 0;
while (i < bills.length) {
  const totalu = bills[i] + tips[i];
  totals.push(totalu);
  i++;
}
console.log(bills, tips, totals);


const calcAverage = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(calcAverage(totals));
