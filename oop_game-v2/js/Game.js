/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        //store incorrect guess
        this.missed = 0;

        //phrases used during the game
        this.phrases = [
            new Phrase ("Keep Coding"),
            new Phrase ("Treehouse is best"),
            new Phrase ("You Got this"),
            new Phrase ("Practice makes perfect"),
            new Phrase ("Happy Weekend")
        ];
        //This is the Phrase object that’s currently in play
        this.activePhrase = null;
    }

    getRandomPhrase(){
        //pick random phrase from the array
        const randomPhraseIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhraseIndex]; 
    }
    startGame(){
        const overlay = document.getElementById('overlay')

        //hide start screen
        overlay.style.display = 'none'

        //chose random phrase
        this.activePhrase = this.getRandomPhrase();

        //place the phrase on game board
        this.activePhrase.addPhraseToDisplay()


    }

    handleInteraction(button){
        //get letter from keyboard that was clicked
        const letter = button.textContent.toLowerCase();
        //prevent player to select same letter
        button.disabled = true;

        if(this.activePhrase.checkLetter(letter)){
            //correct guess
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            if(this.checkForWin()){
                this.gameOver(true);
            }
        }else{
            button.classList.add('wrong');
            this.removeLife()
        }

    }

    removeLife(){
        
        const lifes = document.querySelectorAll('#scoreboard img');
        lifes[this.missed ].src = 'images/lostHeart.png';
        this.missed += 1;

        if (this.missed === 5){
            this.gameOver(false)
        }
    }

    checkForWin(){
        const hiddenletters = document.querySelectorAll("#phrase .letter.hide");
        //player wins when theres no hidden letters left
        return hiddenletters.length === 0;
    }

    gameOver(isWin){
        const overlay = document.getElementById('overlay');
        const message = document.getElementById('game-over-message');
        const btnReset = document.getElementById('btn__reset');

        overlay.style.display = 'flex';

        if (isWin){
            message.textContent = 'You Won!!!'
            overlay.classList.remove('start');
            overlay.classList.add('win');
        }else{
            message.textContent = "You lost. Try again!";
            overlay.classList.remove('start');
            overlay.classList.add('lose');
        }

        btnReset.textContent = "Play Again";
    }

    resetGame(){
        const phraseElements = document.querySelector('#phrase ul');
        const keyboardButtons = document.querySelectorAll('#qwerty button');
        const lifes = document.querySelectorAll('#scoreboard img');
        const overlay = document.getElementById('overlay');
        const message = document.getElementById('game-over-message');
        const btnReset = document.getElementById('btn__reset');

        //Remove the previous phrase
        phraseElements.innerHTML = "";

        //reset the number of hearts
        this.missed = 0;

        //reset keyboard button
        keyboardButtons.forEach(button => {
            button.disabled = false;
            button.className = "key"
        });

        //restore all lifes 
        lifes.forEach(life => {
            life.src = "images/liveHeart.png"
        });

        //reset overlay
        overlay.className = "start";
        message.textContent = "";
        btnReset.textContent = "Start Game";

    }
}