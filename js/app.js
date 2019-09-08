/* Resets the gameboard between games. */
const reloadGame = () => {
    let liElements = document.querySelectorAll('div > ul > li')
    liElements.forEach(element => {element.parentNode.removeChild(element)})
    let keyboardElements = document.querySelectorAll('#qwerty > div > button')
    keyboardElements.forEach(element => {
        element.className = 'key'
        element.disabled = false
    })
    let lifeElements = document.querySelectorAll('div > ol > li > img')
    lifeElements.forEach(element => {
        element.setAttribute('src', 'images/liveHeart.png')
    })
}

let game
const startButton = document.querySelector('#btn__reset')
startButton.addEventListener('click', () => {
    reloadGame()
    game = new Game()
    game.startGame()
})

const buttons = document.querySelector('#qwerty')
buttons.addEventListener('click', (event) => {
    if (event.target.className === 'key')
    game.handleInteraction(event.target)
})

const body = document.querySelector('body')
body.addEventListener('keyup', event => {
    let activeKey = game.keyboardInteraction(event.key)
    game.handleInteraction(activeKey)
})


