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

// Takes a parameter for r, g, and b, and builds a hex-color code from the three values

// The function must receive an object with r, g and b values as numbers++
// The function must then create a hex-string, starting with a # symbol, followed by exactly six digits, and log it to the console.

function RGBtoHex(r, g, b) {
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  return `#${hexR}${hexG}${hexB}`;
}

console.log("RGB to Hex", RGBtoHex(192, 222, 37)); // #c0de25
/**
 *  padStart() method is used to ensure that each of the hexadecimal components has at least two digits.
 * The first argument of padStart() is the minimum length that the resulting string should have, and the second argument is the character that should be used to pad the string. In this case, the minimum length is 2, which means that if the resulting hexadecimal value has only one digit, a leading 0 will be added. The padding character used is "0".
 */
