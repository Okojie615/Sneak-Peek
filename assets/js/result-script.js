//Global elements and event listeners
const submitButtonEl = document.getElementById("submit");
const valueBrandEl = document.getElementById('brand');
const valueGenderEl = document.getElementById('gender');
const valueLimitEl = document.getElementById('limit');
const resultsDisplayEl = document.getElementById('results');
const userSearchEl = document.getElementById("user-search");
submitButtonEl.addEventListener("click", shoeSearch);
submitButtonEl.addEventListener("click", returnResults);

//Function to search based on user paramaters
function shoeSearch() {

//Variable to store size, brand, gender
var resultsValueEl = [];
//Fetching user brand selection from search form
var brandValue = userSearchEl.elements[0].value;
//Fetching user gender selection from search form
var genderValue = userSearchEl.elements[1].value;

var limitValue = userSearchEl.elements[2].value;
//Declaring resultsValueEl as user selected values
resultsValueEl.push(brandValue, genderValue, limitValue);

var localResults = JSON.stringify(resultsValueEl);
// console.log(localResults);


//Pushing resultsValueEl to local storage
localStorage.setItem("results", localResults);
};


//Function to get api data and return info to HTML for display

function returnResults () {
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-sneaker-database.p.rapidapi.com/search?limit=100",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
		"x-rapidapi-key": "0b5ca8ffbbmsh7d8b858a0c3f5eep192e83jsn1c094cc44b39"
	}
};
$.ajax(settings).done(function (response) {
const resultsReturned = response.results;



for (var i = 0; i < valueLimitEl.value; i++) {




console.log(resultsReturned[i]);
var shoeResults = document.createElement("div");
shoeResults.setAttribute('id','shoe-results');

var shoeOption = document.createElement("section");
shoeOption.setAttribute('id','shoe-option');

var shoeListing = document.createElement("p");
shoeListing.setAttribute('id','shoe-listing');
shoeListing.innerText = i+1 + ") ";

var shoeName = document.createElement("p");
shoeName.setAttribute('id','shoe-name');
shoeName.innerText = resultsReturned[i].name;

var shoeImage = document.createElement("img");
shoeImage.setAttribute('id','shoe-image');
shoeImage.src = resultsReturned[i].image.original;
shoeImage.width = 200;
shoeImage.height = 200;

shoeListing.append(shoeName);
shoeOption.append(shoeImage);
shoeOption.append(shoeListing);
shoeResults.append(shoeOption);
resultsDisplayEl.append(shoeResults);
}
});
}










var storedSearch = JSON.parse(localStorage.getItem("results"));


valueBrandEl.value = storedSearch[0];
valueGenderEl.value = storedSearch[1];



