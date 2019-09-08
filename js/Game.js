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
}