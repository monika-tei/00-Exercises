"use strict";
// A function that should return weather you've drowned or not based on these conditions:

// If sea level is higher than 2 meters above average and you are not wearing a wet suit

// If sea level is less than 1 meters and you're lying down

console.log("is drowned", isDrowned(0.5, true, true)); //true
console.log("is drowned", isDrowned(2.5, true, true)); // false

function isDrowned(seaLevel, wetSuit, lyingDown) {
  let isDrowned = false; // this is a flag
  if (seaLevel > 2 && !wetSuit) {
    isDrowned = true;
    console.log("drowning");
  } else if (seaLevel < 2 && lyingDown) {
    isDrowned = true;
    console.log("drowning");
  }
  return isDrowned;
}

//Leap Year Algorithm

console.clear();
// console.log("remainder", 10 % 1);
// console.log("remainder", 10 % 3);
// console.log("remainder", 10 % 10);
// console.log("remainder", 11 % 10);

console.log(isLeapYear(2020));

function isLeapYear(year) {
  //if can be divided by 4 = true
  if (year % 4 !== 0) {
    console.log("not a leap year");
  } else if (year % 100 !== 0) {
    console.log("leap year");
  } else if (year % 400 === 0) {
    console.log("leap year");
  } else {
    console.log("not a leap year");
  }
}

//Test the function with the years:
// 2020: true
// 2019: false
// 1900: false
// 2000: true

// For example, the following is the complete list of leap years for the 21st century (from year 2001 to 2100): 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096.

// another version with KLAUS

console.log(`${leapYear(2054)}\n${leapYear(1880)}`);
function leapYear(year) {
  let leapFlag = false;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        leapFlag = true;
      }
    } else {
      leapFlag = true;
    }
  }
  return leapFlag;
}

const checkList = [2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2044];
