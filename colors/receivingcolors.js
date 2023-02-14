"use strict";

//HEX to RGB

// receive a single string that will always start with a # ++
// The function must create three variables, r, g, and b ++
// Returns an object ++
// Test it from the console, and make sure you still get the correct r, g and b values.

function hexToRGB(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}
console.log("Hex to RGB", hexToRGB("#c0de25"));

/**The 16 in this code is the radix or base parameter that is passed to the parseInt function. It specifies that the input string should be interpreted as a hexadecimal number. - CHAT GPT */

// RGB to HEX

// The function must receive an object with r, g and b values as numbers++
// The function must then create a hex-string, starting with a # symbol, followed by exactly six digits++

function RGBtoHex(r, g, b) {
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  return `#${hexR}${hexG}${hexB}`;
}

console.log("RGB to Hex", RGBtoHex(12, 2, 17)); // #0c0211
/**
 *  padStart() method is used to ensure that each of the hexadecimal components has at least two digits.
 * The first argument of padStart() is the minimum length that the resulting string should have, and the second argument is the character that should be used to pad the string.
 * In this case, the minimum length is 2, which means that if the resulting hexadecimal value has only one digit, a leading 0 will be added. The padding character used is "0".
 */

// CSS to RGB

// Create a function to convert from a CSS color-definition string, like "rgb(192, 13, 1)" to r, g, and b values (numbers), in this case: 192, 13 and 1 respectively.
//The function must receive a single string.
// Create three variables, r, g, and b - set their values correctly, and log them to the console.
/**Use substring and/or split, and possibly trim, to get the three values into three separate strings - and use parseInt to convert them into numbers. Create variables for r, g, and b, and console.log them at the end of the function. */

let color = "rgb(192, 13, 1)";
// color.split(" ");
// console.log(color);

function CSSToRGB(color) {
  color.split();
  console.log(color.split());
  const r = parseInt.color.substring(color.indexOf("("), color.indexOf(","));
  //   const r = parseInt.r.subtring(1, 3), 16;
  //   const g = parseInt.g.subtring(3,5), 16;
  //   const b = parseInt.b.subtring(5,7), 16;

  //   return `rgb(${r}, ${g}, ${b})`;
  return `${r}`;
}
console.log(CSSToRGB("rgb(192, 13, 1)"));

//RGB to CSS
// receives rgb object with values for r-g-b
// creates a string with the r-g-b numbers
// returns that string
function rgbToCSS(rgb) {
  let colorString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  return colorString;
}
//or

// function rgbToCSS(rgb) {
//   let hex1 = rgb.r.toString(16);
//   let hex2 = rgb.g.toString(16);
//   let hex3 = rgb.b.toString(16);

//   let fullHex = `#${hex1}${hex2}${hex3}`;
//   return fullHex;
// }
