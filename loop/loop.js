"use strict";

// grab H1
let text = document.getElementById("typewriter");

// this is the text content of the H1
let originalTextCont = text;
// storing the information of the H1 text
// the one that will be iterated upon
let textContent2 = originalTextCont.innerHTML;
// and the H1 is empty
originalTextCont.innerHTML = " ";
// iterator - how many times do we play the loop until it reaches Max
let i = 0;
// Maximum number of iterations = the full length of the string
let maxIterations = 44;

let delay;

//let audioDelay;

initLoop();

function initLoop() {
  console.log("start");
  onLoop();
}

function onLoop() {
  if (i < maxIterations) {
    // console.log(text.innerHTML[i]);
    // So if the number of iterations is less than 44,
    //create a variable that stores a character:

    let separateCharacter = textContent2[i];
    // now we need to display
    originalTextCont.innerHTML = originalTextCont.innerHTML.concat(separateCharacter);

    //ads increment for the iteration - which will add one character
    i++;

    //describes the delay type
    delay = Math.random() * 1000;
    setTimeout(onLoop, delay);
  }
}
onLoop();

/**You can either set iterator i = 1;
 * or also do i < maxIterations;
 * instead of i <= maxIterations;
 *
 * see what makes sense!
 */
