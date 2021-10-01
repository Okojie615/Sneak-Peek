const submitButtonEl = document.getElementById("submit");
const valueSizeEl = document.getElementById('size');
const valueBrandEl = document.getElementById('brand');
const valueGenderEl = document.getElementById('gender');


submitButtonEl.addEventListener("click", function() {

//Function to search based on user paramaters
function shoeSearch() {
//Variable to store size, brand, gender
localStorage.clear;
var resultsValueEl = [];
//Fetching user size selection from search form
var sizeValue = document.getElementById("user-search").elements[0].value;
//Fetching user brand selection from search form
var brandValue = document.getElementById("user-search").elements[1].value;
//Fetching user gender selection from search form
var genderValue = document.getElementById("user-search").elements[2].value;

if (valueBrandEl.value = 'none') {
    window.prompt("Please select a brand")
}

if (valueSizeEl.value = 'none') {
    window.prompt("Please select a size")
}

if (valueGenderEl.value = 'none') {
    window.prompt("Please select a gender")
}

else {
//Declaring resultsValueEl as user selected values
resultsValueEl.push(sizeValue, brandValue, genderValue);
//Pushing resultsValeEl to local storage
localStorage.setItem("results", resultsValueEl);}
};


// function userSelection () {
//     if (valueBrandEl.value = 'none') {
//         window.prompt("Please select a brand")
//     }

//     if (valueSizeEl.value = 'none') {
//         window.prompt("Please select a size")
//     }

//     if (valueGenderEl.value = 'none') {
//         window.prompt("Please select a gender")
//     }
// };