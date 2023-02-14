"use strict";

// RGB to HEX

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
console.log("Hex to RGB", hexToRGB("#facade"));

/**The 16 in this code is the radix or base parameter that is passed to the parseInt function. It specifies that the input string should be interpreted as a hexadecimal number. - CHAT GPT */
