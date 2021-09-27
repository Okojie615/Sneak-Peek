// const SneaksAPI = require('sneaks-api');
// const sneaks = new SneaksAPI();

const submitButtonEl = document.querySelector("#Submit");
const valueSizeEl = document.getElementById('size');
const valueBrandEl = document.getElementById('brand');
const valueGenderEl = document.getElementById('gender');
const returnedSearchEl = document.getElementById('results-column');



submitButtonEl.addEventListener("click", shoeSearch);


//Function to search based on user paramaters
function shoeSearch() {
// localStorage.clear();

//Variables to store size, brand, gender
var resultsValueEl = [x,y,z];

//Create div to hold these values
var userSelectionEl = document.createElement("div");
userSelectionEl.classname = "hero";


var sizeSelectedEl = document.createElement("p");
var x = document.getElementById("user-search").elements[0].value;
sizeSelectedEl.innerHTML = x;

var brandSelectedEl = document.createElement("p");
var y = document.getElementById("user-search").elements[1].value;
brandSelectedEl.innerHTML = y;

var genderSelectedEl = document.createElement("p");
var z = document.getElementById("user-search").elements[2].value;
genderSelectedEl.innerHTML = z;


//Display search back to the user
userSelectionEl.innerHTML = "Your search for size " + y + ", " + z + ", " + x + " brand shoes:";

returnedSearchEl.appendChild(userSelectionEl);

// console.log(userSelectionEl.textContent);
// console.log(resultsValueEl[2]);
// console.log(returnedSearchEl.textContent);














};


