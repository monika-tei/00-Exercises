"use strict";

let studentName = "Harry James Potter";

getNameParts(studentName);

function getNameParts(studentName) {
  let firstName;
  let middleName;
  let lastName;
  //w/o middle name;
  if (studentName.split(" ").length <= 2) {
    console.log(studentName.split(" ").length);
    firstName = studentName.substring(0, studentName.indexOf(" "));
    lastName = studentName.substring(studentName.lastIndexOf(" ") + 1);
    middleName = undefined;
  }
  // with middle name
  else {
    firstName = studentName.substring(0, studentName.indexOf(" "));
    lastName = studentName.substring(studentName.lastIndexOf(" ") + 1);
    middleName = studentName.substring(studentName.indexOf(" ") + 1, studentName.lastIndexOf(" "));
    // console.log(`${firstName} ${middleName} ${lastName}`);
  }

  fullName(lastName, firstName, middleName);
}

// function receive 3 parameters

function fullName(lastName, firstName, middleName) {
  if (middleName === undefined) {
    console.log(`Full name without middle name is: ${firstName} ${lastName}`);
  } else {
    console.log(`A full name: ${firstName} ${middleName} ${lastName}`);
  }
}

//Test these combos:

// fullName("Potter", "Harry", "James"); should console.log "Harry James Potter"
fullName("Potter", "Harry", "James");
//fullName("Potter", "Harry"); should console.log "Harry Potter"
fullName("Potter", "Harry");
//fullName("Harry", "Potter"); should console.log "Potter Harry"
fullName("Harry", "Potter");
//fullName("Potter", "Harry", "James", "Pottypotpot"); should console.log "Harry James Potter"
fullName("Potter", "Harry", "James", "Pottypotpot");
