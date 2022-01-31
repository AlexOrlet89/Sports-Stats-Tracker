import { renderStat, renderGame } from './utils.js';

const form = document.getElementById('add-stat');
const statsList = document.getElementById('stats-list');
const gameList = document.getElementById('game-list');

const remove = document.getElementById('remove');
const save = document.getElementById('save-game');

let stats = [];
let games = [];

// IMPURE RENDER FUNCTIONS
// YOUR CODE MUST CALL THESE FUNCTIONS
function renderGames() {
    gameList.textContent = '';
    for (let game of games) {
        const li = renderGame(game);
        gameList.append(li);
    }
}

function renderStats() {
    statsList.textContent = '';
    for (let item of stats) {
        const li = renderStat(item);
        statsList.appendChild(li);
    }
}

function resetStats() {
    stats = [];
    statsList.textContent = '';
}

form.addEventListener('submit', (e) => {

    // Step 1 - add code to track each submission to the stats
    //prevents form from refreshing page
    e.preventDefault();
    // using FormData built in function to retrieve data from our form
    const formData = new FormData(form);
    // Create an object to "model" your statistic like the following:
    const stat = {
        player: formData.get('player'),
        points: formData.get('points')
    };
    stats.push(stat);
    // console.log(stats);
    renderStats();
    form.reset();
    // { player: 'Bob', points: 2 }
    // Hint -- create the object from the form, push it onto the stats array, then call renderStats
});

remove.addEventListener('click', () => {
    console.log('remove');
    // Step 2 -- add code to allow users to remove the most recent stat
    stats.pop();
    renderStats();
    // Hint -- how do you remove an element from an array?
    // Hint -- how can we rerender the stats using a function above?
});

save.addEventListener('click', () => {
    // things we need to get: total points of a game, and game number
    let totalPoints = 0;
    // const gameNumber = 0; we need this to be an array in order to have list
    // in order to get total points we need to get points from each stat in stats
    // Step 3 - add code to allow users to save the state
    // Loop through the list of stats and add up the total points scored
    
    for (let stat of stats) {
        //this function solely adds up all points values in stats array.
        totalPoints = totalPoints + (stat.points * 1);
        console.log('stat points', stat.points);
    }
    console.log('total points', totalPoints);
    // Create a new object with the game number and the total points
    // { number: games.length + 1, totalPoints: totalPoints }
    const newObject = ({ number:games.length + 1, totalPoints: totalPoints });
    games.push(newObject);
    console.log(games);
    renderGames();
    resetStats();
    // Push the new object onto the games array then call renderGames
    // reset the stats with resetStats
});
