/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    //adds letter placeholders to the display when the game starts.
    addPhraseToDisplay() {
        const phraseElement = document.querySelector('#phrase ul');

        for (let i = 0; i < this.phrase.length; i++){
            const character = this.phrase[i];
            const li = document.createElement('li');

            if (character === " "){
                //display spaces between words
                li.classList.add('space');
                li.textContent = " ";
            }else{
                //letters stay hidden at first until guessed
                li.textContent = character;
                li.classList.add('letter', 'hide', character);
            }
            phraseElement.appendChild(li);
        }
    }
    //checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter(letter) {
        //return true when guessed is correct
        return this.phrase.includes(letter.toLowerCase());
    }

    //reveal all matching letter 
    showMatchedLetter(letter){
        const matchedLetter = document.querySelectorAll(`#phrase .letter.${letter}`)

        //show matching letter
        matchedLetter.forEach(letters => {
            letters.classList.remove('hide');
            letters.classList.add('show');
        });
    }
}
