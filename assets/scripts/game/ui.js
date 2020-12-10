const store = require('./../store')
const wins = require('./wins')

const onNewGameSuccess = function (response) {
  // store the game object for access to game ID and cells
  store.game = response.game
}

const onPlaceMarkerSuccess = function (response) {
  store.game = response.game
  const gameArray = store.game.cells
  // check for a win
  wins.checkWins(gameArray)
  // call checkWins function and pass it cellsArray
  // if there is a win, #game-message tells user
  // if #game-message text = PLayer X wins! or Player O wins!
  if ($('#game-message').text() === 'Player X wins!') {
  // then, break
    console.log('SOMEBODY WON!')
  }
  // break
}

const spaceTaken = function () {
  $('#game-warning').show().text('Space taken! Please choose a different one.')
}

const onError = function (error) {
  $('#message').text('Error: ', error.responseJSON.message)
}

module.exports = {
  onNewGameSuccess,
  onPlaceMarkerSuccess,
  spaceTaken,
  onError
}
