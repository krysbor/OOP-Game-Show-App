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
    showMatchedLetter(){

    }
}