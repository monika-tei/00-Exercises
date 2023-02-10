"use strict";
// Basic Arrays
// An array is a List of Things (items)

// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
//console.log(letters);
// we can acces them by their index
// let someLetter = letters[4];
// let anotherLetter = letters[7];
// console.log(someLetter, anotherLetter);

// ex2 Arrays can be modified
// here, the 'e' is modified into a '*'
// console.log(letters);
// so the new value is passed onto the original
// at this point, there was no difference between let or const; e became a *

//Array methods
const people = ["Harry", "Ron", "Hermione"];
let result;
//Push adds an element to the end
//method 1
result = people.push("Draco");
console.log(result); // returns number 4
console.log(people); // Draco is appended in the end

//method 2
result = people.pop(); // pop - takes/removes one element from the end;
console.log(result); // returns the last element from array - Draco;
console.log(people); // returns updated array of 3 elements w/o Draco;

//method 3
result = people.push("Neville");
console.log(result); // 4
console.log(people); //adds Neville to the end

//method 4
result = people.push("Luna");
console.log(result);
console.log(people);

//method 5
result = people.slice(0, 3);
console.log(result); // Slice / returns a portion of array (start, end )indexes and creates a new array; interestingly, last number is not included in result.
// Original array is not modified!
console.log(people);

//method 6
//Splice - replaces the content elements by adding new elements
result = people.splice(1, 0, "Cho");
console.log(result);
console.log(people); //Ron is removed and replaced by "cho" element;

//method 7
people[1] = "Ginny";
console.log(people); //now we overwrote the 1st index again, Ginny instead of Ron, original is affected;

//method 8
result = people.push("Fred", "George");
console.log(result);
console.log(people); //two more names at the end os the string

//method 9
result = people.indexOf("Fred");
console.log(result); //Fred's index is 6
console.log(people); //doesnt mutate the array

//method 10
result = people.splice(result, 1);
console.log(result); // 'Fred' returns this,
console.log(people); //removes Fred from the array

//
// ARRAY FROM
// THINGS THAT LOOK LIKE ARRAYS (ARRAY-LIKE)
const letters = Array.from("abcdefghiklmnoprst");
console.log(letters); // returns an array of 18

const str = "abcdefghiklmn";
const arr1 = str.split();
console.log(arr1); // returns an array of single element (0: "abcdefghiklmn")

const str2 = "abcdefghiklmn";
const arr2 = Array.from(str2);
console.log(arr2); // array of 13

//JOIN()
// Making an array into a string and concatenating all elements;
const array1 = [1, 2, "klmn", "5f"];
console.log(array1);
console.log(array1.join("_"));
console.log(array1.toString()); //  retunrs a string
