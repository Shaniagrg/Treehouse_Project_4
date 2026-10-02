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
}