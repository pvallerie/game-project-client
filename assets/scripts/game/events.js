const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const wins = require('./wins')

const onNewGame = function (event) {
  $('.game').show()
  const data = '{}'
  api.createNewGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

const onPlaceMarker = function () {
  console.log('CLICK')
  // grab game array
  const gameArray = store.game.cells
  const isX = marker => marker === 'x'
  const arrayOfX = gameArray.filter(isX)
  const isO = marker => marker === 'o'
  const arrayOfO = gameArray.filter(isO)

  // grab index data stored in button HTML
  const buttonData = $(this).data()
  // grab value of that index
  const cellIndex = buttonData.cellIndex

  if (gameArray[cellIndex] === ('x' || 'o')) {
    ui.spaceTaken()
  } else {
    if (arrayOfX.length === 0) {
      $(this).html('X')
      gameArray[cellIndex] = 'x'
      $('#game-message').html('Player O, it is your turn!')
    // if arrayOfX is not empty, but is equal to arrayOfO, X goes
    } else if (arrayOfX.length > arrayOfO.length) {
      $(this).html('O')
      gameArray[cellIndex] = 'o'
      $('#game-message').html('Player X, it is your turn!')
    // else, O goes
    } else if (arrayOfX.length === arrayOfO.length) {
      $(this).html('X')
      gameArray[cellIndex] = 'x'
      $('#game-message').html('Player O, it is your turn!')
    }
    $('#game-warning').hide()

    // store updated game array in gameArray
    const updatedGameArray = store.game.cells

    // check for winner
    wins.checkWins(updatedGameArray)
    const gameOver = wins.checkWins(updatedGameArray)

    // place corresponding marker in store.game.cells
    // check for winner
    // place marker in the array 'user.game.cells' at the corresponding index
    api.placeMarker(cellIndex, gameArray[cellIndex], gameOver)
      .then(ui.onPlaceMarkerSuccess)
      .then(function (gameOver) {
        if (store.game.over === true) {
          console.log('GAME OVER!')
          ui.onGameOverSuccess()
        } else {
          console.log('continue to play')
        }
      })
      .catch(ui.onError)
  }
  // else if game-message reads 'Player X wins!' or 'Player O wins!' or 'It is a tie!'
  // then buttons don't work
}

module.exports = {
  onNewGame,
  onPlaceMarker
}
