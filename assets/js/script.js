const submitButtonEl = document.getElementById("submit");
const valueSizeEl = document.getElementById('size');
const valueBrandEl = document.getElementById('brand');
const valueGenderEl = document.getElementById('gender');


submitButtonEl.addEventListener("click", shoeSearch);


//Function to search based on user paramaters
function shoeSearch() {
//Variable to store size, brand, gender
var resultsValueEl = [];
//Fetching user size selection from search form
var sizeValue = document.getElementById("user-search").elements[0].value;
//Fetching user brand selection from search form
var brandValue = document.getElementById("user-search").elements[1].value;
//Fetching user gender selection from search form
var genderValue = document.getElementById("user-search").elements[2].value;
//Declaring resultsValueEl as user selected values
resultsValueEl.push(sizeValue, brandValue, genderValue);
//Pushing resultsValeEl to local storage
localStorage.setItem("results", resultsValueEl);

console.log(resultsValueEl);
};















