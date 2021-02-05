// Question 2
// Make a call to the following API endpoint:

// Loop through the results and display the following properties 
// in HTML, but only for the first eight results:

// - name
// - rating
// - number of tags (not the tag details, just the amount of tags)

// The styling for this assignment is not important but loading 
// indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax 
// to make the call.

// Be sure to arrange all file types appropriately, 
// consult the repos from the lessons for examples.

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = url + proxy;

const resultsContainer = document.querySelector(".results");

async function getGames() {
    try {

        const response = await fetch(corsFix);

        const results = await response.json();

        // console.log(results.results); 

        const games = (results.results);

        resultsContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {
            console.log(games[i].name);

            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result">${games[i].name}
                                            Rating: ${games[i].rating}
                                            Tags: ${games[i].tags.length}</div>`
        }
    }

    catch (error) {
        console.log(error);
        resultsContainer.innerHTML = "";
        resultsContainer.innerHTML += displayError("An error occurred");
    }
}

getGames();