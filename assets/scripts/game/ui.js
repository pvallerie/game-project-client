const store = require('./../store')

const onNewGameSuccess = function (response) {
  // store the game object for access to game ID and cells
  store.game = response.game
}

const onPlaceMarkerSuccess = function (response) {
  store.game = response.game
  console.log(store.game.cells)
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
