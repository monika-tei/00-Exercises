"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

const buttons = document.querySelectorAll("button");

const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  // boolean because we want it on or off:
  star: false,
  winner: false,
};

const settings = {
  filter: "all",
  sortBy: "name",
  sortDir: "asc",
};

function start() {
  console.log("ready");

  findButtons();
  loadJSON();
}

function findButtons() {
  document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", chooseFilter));

  document.querySelectorAll("[data-action='sort']").forEach((button) => button.addEventListener("click", chooseSort));
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // we filter and sort on the first load
  buildList();
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function chooseFilter(event) {
  const filter = event.target.dataset.filter;

  console.log(`user chose ${filter}`);

  setFilter(filter);
}

function setFilter(filter) {
  settings.filterBy = filter;

  buildList();
}

function filterList(filteredList) {
  // let filteredList = allAnimals;
  if (settings.filterBy === "cat") {
    //create a filtered list of only CATS
    filteredList = allAnimals.filter(isCat);
  } else if (settings.filterBy === "dog") {
    filteredList = allAnimals.filter(isDog);
  }

  return filteredList;
}

function isCat(animal) {
  console.log("found some cats");
  return animal.type === "cat";
}

function isDog(animal) {
  console.log("found some dogs");
  return animal.type === "dog";
}

function chooseSort(event) {
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;
  const oldElement = document.querySelector(`[data-sort="${settings.sortBy}"]`);
  oldElement.classList.remove("sortBy");

  // indicate active sort
  event.target.classList.add("sortBy");
  // toggles direction
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }

  console.log(`user sorting by ${sortBy} and ${sortDir}`);
  setSort(sortBy, sortDir);
}

function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDir = sortDir;

  buildList();
}

function sortList(sortedList) {
  let direction = 1;

  if (settings.sortDir === "desc") {
    direction = -1;
  } else {
    direction = 1;
  }

  sortedList = sortedList.sort(sortByProperty);

  //this function needs to stay within the function;
  function sortByProperty(animalA, animalB) {
    if (animalA[settings.sortBy] < animalB[settings.sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }

  return sortedList;
}

function buildList() {
  const currentList = filterList(allAnimals);
  const sortedList = sortList(currentList);

  displayList(sortedList);
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

//Stars and winners found here
function displayAnimal(animal) {
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  //adds star

  if (animal.star === true) {
    clone.querySelector("[data-field=star]").textContent = "🌟";
  } else {
    clone.querySelector("[data-field=star]").textContent = "☆";
  }

  // add star controller
  clone.querySelector("[data-field=star]").addEventListener("click", clickStar);

  function clickStar() {
    if (animal.star === true) {
      animal.star = false;
    } else {
      animal.star = true;
    }
    buildList();
  }

  // Winners

  clone.querySelector("[data-field=winner]").dataset.winner = animal.winner;

  clone.querySelector("[data-field=winner]").addEventListener("click", clickWinner);

  function clickWinner() {
    if (animal.winner === true) {
      animal.winner = false;
    } else {
      tryToMakeAWinner(animal);
      // animal.winner = true;
    }
    buildList();
  }

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

//winner rules
function tryToMakeAWinner(selectedAnimal) {
  const winners = allAnimals.filter((animal) => animal.winner);

  const numberOfWinners = winners.length;

  const other = winners.filter((animal) => animal.type === selectedAnimal.type).shift();

  //if there is another of the same type
  if (other !== undefined) {
    console.log("there can be 1 winner of each type");
    removeOther(other);
  } else if (numberOfWinners >= 2) {
    console.log("there can only be 2 winners");
    removeAorB(winners[0], winners[1]);
  } else {
    makeWinner(selectedAnimal);
  }

  function removeOther(other) {
    //ask the user to ignore or remove the other

    document.querySelector("#remove-other").classList.remove("hide");
    document.querySelector("#remove-other .closebutton").addEventListener("click", closeDialog);
    document.querySelector("#remove-other #removeOtherBtn").addEventListener("click", clickRemoveOther);

    //if ignore - do nothing...
    function closeDialog() {
      document.querySelector("#remove-other").classList.add("hide");

      document.querySelector("#remove-other .closebutton").removeEventListener("click", closeDialog);

      document.querySelector("#remove-other #removeOtherBtn").removeEventListener("click", clickRemoveOther);
    }

    //if remove other...
    function clickRemoveOther() {
      removeWinner(other);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
  }

  function removeAorB(winnerA, winnerB) {
    // ask the user to ignore or remove A or B

    document.querySelector("#remove-aorb").classList.remove("hide");
    document.querySelector("#remove-aorb .closebutton").addEventListener("click", closeDialog);
    document.querySelector("#remove-aorb #removeA").addEventListener("click", clickRemoveA);
    document.querySelector("#remove-aorb #removeB").addEventListener("click", clickRemoveB);

    //if ignore - do nothing
    function closeDialog() {
      document.querySelector("#remove-aorb").classList.add("hide");
      document.querySelector("#remove-aorb .closebutton").removeEventListener("click", closeDialog);
      document.querySelector("#remove-aorb #removeA").removeEventListener("click", clickRemoveA);
      document.querySelector("#remove-aorb #removeB").removeEventListener("click", clickRemoveB);
    }

    function clickRemoveA() {
      //if A is removed
      removeWinner(winnerA);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }

    function clickRemoveB() {
      //if B is removed
      removeWinner(winnerB);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
  }

  function removeWinner(winnerAnimal) {
    winnerAnimal.winner = false;
  }

  function makeWinner(winnerAnimal) {
    winnerAnimal.winner = true;
  }
}
