class Game {
    constructor() {
        this.missed = 0
        this.phrases = this.createPhrases()
        this.acrivePhrase = 'null'
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = []
        const phrasesContent = [
            'Change the world',
            'Just do it',
            'Never give up',
            'Dreams are for real',
            'Strive for greatness'
        ]
        phrasesContent.forEach((phrase) => {
            let currentPhrase = new Phrase(phrase)
            phrases.push(currentPhrase)
        })
        return phrases
    };
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * 6)
        return this.phrases[randomNumber]
    };
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        let overlay = document.querySelector('#overlay')
        overlay.style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    };
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const liElements = document.querySelectorAll('div > ul > li')
        let total = 0
        let guessed = 0
        liElements.forEach(element => {
            if (element.className !== 'space') {
                total += 1
                if (element.className.slice(0, 4) === 'show') {
                    guessed += 1
                }
            }
        })
        if (total == guessed) {
            return true
        } else {
            return false
        }
        //console.log(liElements[0].className.slice(0, 4))
    };
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const lives = document.querySelectorAll('ol > li > img')
        for(let i=0; i<lives.length; i+=1) {
            if (lives[i].getAttribute('src') === 'images/liveHeart.png') {
                lives[i].setAttribute('src', 'images/lostHeart.png')
                break
            }
        }
        this.missed += 1
        if (this.missed === 5) {
            this.gameOver(false)
        }
    };
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        let overlay = document.querySelector('#overlay')
        let gameMessage = document.querySelector('#game-over-message')
        overlay.style.display = 'flex'
        if (gameWon == true) {
            overlay.className = 'win'
            gameMessage.textContent = 'Great job!'
        } else {
            overlay.className = 'lose'
            gameMessage.textContent = 'You lose!'
        }
    };
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        let letterPressed = button.textContent
         if (game.activePhrase.checkLetter(letterPressed)) {
             button.className += ' chosen'
             game.activePhrase.showMatchedLetter(letterPressed)
             button.disabled = true
             if (game.checkForWin() == true) {
                 game.gameOver(true)
             }
         } else {
             button.disabled = true
             button.className += ' wrong'
             game.removeLife()
         }

    };
}