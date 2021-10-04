//Global elements and event listeners
const submitButtonEl = document.getElementById("submit");
const valueBrandEl = document.getElementById('brand');
const valueGenderEl = document.getElementById('gender');
const valueLimitEl = document.getElementById('limit');
const resultsDisplayEl = document.getElementById('results');
const userSearchEl = document.getElementById("user-search");

submitButtonEl.addEventListener("click", shoeSearch);


//Function to search based on user paramaters
function shoeSearch() {
	resultsDisplayEl.innerHTML = "";
	//Variable to store size, brand, gender
	var resultsValueEl = [];
	//Fetching user gender selection from search form
	var genderValue = userSearchEl.elements[0].value;
	var limitValue = userSearchEl.elements[1].value;
	//Declaring resultsValueEl as user selected values
	resultsValueEl.push(genderValue, limitValue);
	var localSearch = JSON.stringify(resultsValueEl);
	console.log(localSearch);

//Function to get api data and return info to HTML for display
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
		"x-rapidapi-key": "9e4a256408msha93f5ef08977be7p1f6b06jsn5b5f47e65060"
	}
};

$.ajax(settings).done(function (response) {
	
        resultsReturned = response.results;
        console.log(resultsReturned);
		for (var i = 0; i < valueLimitEl.value; i++) {
			if (resultsReturned[i].gender == valueGenderEl.value) {
                //Create div to store all shoe info
				var shoeResults = document.createElement("div");
				shoeResults.setAttribute('id','shoe-results');

                //Create element for indiviual shoe list
				var shoeOption = document.createElement("section");
				shoeOption.setAttribute('id','shoe-option');

				//Create element to display shoe name
				var shoeName = document.createElement("p");
				shoeName.setAttribute('id','shoe-name');
				shoeName.innerText = resultsReturned[i].name;

				
				// shoeName.setAttribute('href', resultsReturned[i].links.flightClub);

				//Create element to display shoe image
				var shoeImage = document.createElement("img");
				shoeImage.setAttribute('id','shoe-image');
				shoeImage.src = resultsReturned[i].image.original;
				shoeImage.width = 200;
				shoeImage.height = 200;


                // Create element to hold links for shoe purchase
				var shoeBuy = document.createElement("section")
                shoeBuy.setAttribute("id", "purchase-link");
				var shoeBuyEl = document.getElementById("purchase-link");
                //Create link to outside website
                var shoeLink1 = document.createElement("a");
                shoeLink1.setAttribute("href", Object.values(resultsReturned[i].links)[0]);
                shoeLink1.innerHTML = "<img class=buy-logo src=./assets/images/flightclub.jpg />";
                shoeLink1.setAttribute("id", "flight-club");

            
                var shoeLink2 = document.createElement("a");
                shoeLink2.setAttribute("href", Object.values(resultsReturned[i].links)[1]);
                shoeLink2.innerHTML = "<img class=buy-logo src=./assets/images/goat.png />";
                shoeLink2.setAttribute("id", "goat");


                var shoeLink3 = document.createElement("a");
                shoeLink3.setAttribute("href", Object.values(resultsReturned[i].links)[2]);
                shoeLink3.innerHTML = "<img class=buy-logo src=./assets/images/stadiumgoods.png />";
                shoeLink3.setAttribute("id", "stadium-goods");

                var shoeLink4 = document.createElement("a");
                shoeLink4.setAttribute("href", Object.values(resultsReturned[i].links)[3]);
                shoeLink4.innerHTML = "<img class=buy-logo src=./assets/images/stockx.png />";
                shoeLink4.setAttribute("id", "stockx");

				//Append div with elements
				// shoeImage.append(shoeBuy);
               

                shoeBuy.append(shoeLink1);
                shoeBuy.append(shoeLink2);
                shoeBuy.append(shoeLink3);
                shoeBuy.append(shoeLink4);

   

                console.log(shoeBuy.innerHTML);
				shoeOption.append(shoeName);
				shoeOption.append(shoeImage);
                shoeOption.append(shoeBuy);
				shoeResults.append(shoeOption);
				resultsDisplayEl.append(shoeResults);
                
                }

            // else if (resultsReturned[i].gender != valueGenderEl.value) {
            //     genderResults.unshift(resultsReturned[i]);

            // }

        
            
        }
	})
};

