// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = url + proxy;

const resultsContainer = document.querySelector(".results");

async function getGames() {
    try {

        const response = await fetch(corsFix);

        const results = await response.json();

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