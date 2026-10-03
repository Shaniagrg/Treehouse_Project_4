/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startGameButton = document.querySelector('#btn__reset');

//game starts when button is clicked
startGameButton.addEventListener('click', () => {
    //reset the previous game before restarting new one
    if(game){
        game.resetGame();
    }
    game = new Game();
    game.startGame();
});

//listen to the click on the screen
const qwerty = document.querySelector('#qwerty')
qwerty.addEventListener('click', (e) => {
    const clickedButton = e.target;
    //only responds when user clicks the keyboard button
    if (clickedButton.tagName === "BUTTON"){
        game.handleInteraction(clickedButton);
    }
});