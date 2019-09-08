class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase()
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        let ul = document.querySelector('div > ul')
        let characters = this.phrase.split('')
        characters.forEach(character => {
            let liElement = document.createElement('li')
            if (character !== ' ') {
                liElement.className = `hide letter ${character}`
            } else {
                liElement.className = 'hide space'
            }
            liElement.textContent = character
            ul.appendChild(liElement)
        })


    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        let phrase = game.activePhrase
        if (phrase.phrase.includes(letter)) {
            return true
        } else {
            return false
        }

    };
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const liElements = document.querySelectorAll('div > ul > li')
        liElements.forEach(element => {
            if (element.textContent === letter) {
                element.className = `show letter ${letter}`
            }
        })
    };
}