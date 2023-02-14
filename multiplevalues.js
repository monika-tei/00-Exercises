"use strict";

function hexToRGB(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}
console.log("Hex to GRB", hexToRGB("#f80ea3"));
console.log("Hex to RGB blue", hexToRGB("#f80ea3").b);

// another example
