let game
const startButton = document.querySelector('#btn__reset')
startButton.addEventListener('click', () => {
    game = new Game()
    game.startGame()
})

const buttons = document.querySelector('#qwerty')
buttons.addEventListener('click', (event) => {
    if (event.target.className === 'key')
    game.handleInteraction(event.target)
    //event.target.disabled = true
})