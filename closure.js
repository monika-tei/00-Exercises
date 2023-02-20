"use strict";

//reference to all buttons

const buttons = document.querySelectorAll("button");

//take each of buttons, get reference and the index

buttons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.alt);
    console.log(index);
  });
});
