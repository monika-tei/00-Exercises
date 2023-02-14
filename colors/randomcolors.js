"use strict";

//sets the background to a random randomColor
//receives no parameters
// first calls randomColor to get rgb object
// calls rgbtoCSS with that object to get a CSS string
// uses return value as value for body.style.backgroundColor
function randomBackground() {
  console.log("random background");
}

// returns random rgb color object++
// receives no parameters++
// creates three values with random integers between 0 - 255++
function randomColor() {
  const r = Math.floor(Math.random) * 256;
  const g = Math.floor(Math.random) * 256;
  const b = Math.floor(Math.random) * 256;

  return { r, g, b };
}

// receives rgb object with values for r-g-b
// creates a string with the r-g-b numbers
// returns that string
function rgbToCSS(rgb) {
  let colorString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  return colorString;
}
