"use strict";

//sets the background to a random randomColor
//receives no parameters
// first calls randomColor to get rgb object
// calls rgbtoCSS with that object to get a CSS string
// uses return value as value for body.style.backgroundColor
function randomBackground() {
  document.querySelector("body").style.backgroundColor = rgbToCSS(randomColor());
}

randomBackground();

// returns random rgb color object++
// receives no parameters++
// creates three values with random integers between 0 - 255++
function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return { r, g, b };
}

// receives rgb object with values for r-g-b
// creates a string with the r-g-b numbers
// returns that string
function rgbToCSS(rgb) {
  let colorString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  return colorString;
}
