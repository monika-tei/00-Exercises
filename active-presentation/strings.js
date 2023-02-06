"use strict";
let str3 = `who could have thought????`;

let name1 = 'Monsieur "Kelele" the royal cat';
let drink = "juice";
const longline =
  "a very long text wowwwww but it really cannot fit anyymore in this line and spands across the width of the editor,\n \
hence very very very longggggggggggggggggglcccccc";

console.log(`Hello ${name1} would you like some ${drink}?`);

///

let myname = "Monika";

let animaltype = "Cat";

let animalname = "Choko";

console.log(`My name is ${myname}.\nI have a ${animaltype} called ${animalname}.`);

// the next thing, lenght

let leng = myname.length;

console.log(`${myname} is ${leng} characters long.`);

const letter = myname[0];

console.log(`The first letter of my name ${myname} is ${letter}`);

// Exercise time

const magicname = "Albus Percival Wulfric Brian Dumbledore";

const len = magicname.length;

const second = magicname[2];

const six = magicname[6];

let index = magicname.indexOf("D");

let lastindex = magicname.lastIndexOf("e");

console.log(magicname);

//  total number incl spaces

console.log(`The total number of characters\n including spaces for the ${magicname} is ${magicname.length}.`);

console.log(`The character at index 2 is ${second}`);

console.log(`The character at index 6 is ${six}`);

console.log(`The index of first D in Dumbledore is ${index}`);

console.log(`The index of last E in Dumbledore is ${lastindex}.`);

// nice!

const str1 = "   There is     space here\n   ";

const str2 = str1.trim();

// the spaces in the beginning and end are trimmed... buut not whas in between

console.log(str1);

console.log(str2);

console.log(`_${str2}_`);

// method parameters

const fullname = "Peter Heronimous Lind";

const firstName = fullname.substring(0, 5);

const lastName = fullname.substring(17);

console.log(`first name is: _${firstName}_`);

console.log(`last name is: _${lastName}_`);

// hence no space!

// Quick exercises with .substring at 38:50

// const magicname = "Albus Percival Wulfric Brian Dumbledore";

let firstindex = magicname.substring(0, 5);

let secondindex = magicname.substring(29);

let thirdindex = magicname.substring(15, 22);

let fourthindex = magicname.substring(15, 23);

let fifthindex = magicname.substring(25, 28);

let sixthindex = magicname.substring(2, 5);

let nameDUmbledore = magicname.indexOf("Dumbledore");

let nameWulfric = magicname.indexOf("Wulfric");

let nameBrian = magicname.indexOf("ian");

let onlyAlbus = magicname.indexOf("Albus");

// 1. "Albus"

console.log(`Writing; ${firstindex}`);

// 2. "Dumbledore"

console.log(nameDUmbledore);

console.log(`Writing in one parameter: ${secondindex}`);

// 3. "Wulfric"

console.log(nameWulfric);

console.log(`Secondname: "${thirdindex}"`);

// 4. "Wulfric "

console.log(`Secondname with spaces goes: "${fourthindex}"`);

// 5. "ian"

console.log(nameBrian);

console.log(`Brian ends with: "${fifthindex}"`);

// 6. "bus"

console.log(onlyAlbus);

console.log(`Albus surpsisingly ends with: "${sixthindex}"`);
