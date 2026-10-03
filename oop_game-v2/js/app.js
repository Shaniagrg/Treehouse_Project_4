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

//use their physical computer keyboard to enter guesses
document.addEventListener('keydown', (e) => {
    //do nothing if the game hasnt started
    if(!game){
        return;
    }

    const enterKey = e.key.toLocaleLowerCase();

    //accept letter from a to z
    if (enterKey >= 'a' && enterKey <= 'z'){

        //find the matching keyboard button
        const keyboardButton = document.querySelectorAll('#qwerty button');

        keyboardButton.forEach(button => {
            if(button.textContent === enterKey){
                game.handleInteraction(button);
            }
        })
    }
})