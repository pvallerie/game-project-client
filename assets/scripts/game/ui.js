const store = require('./../store')
const wins = require('./wins')
const api = require('./api')

const onNewGameSuccess = function (response) {
  // store the game object for access to game ID and cells
  store.game = response.game
  $('.gameboard-locations').html('')
  $('#win-message').html('')
}

const onPlaceMarkerSuccess = function (response) {
  store.game = response.game
  console.log('game object:', store.game)
}

const spaceTaken = function () {
  $('#game-warning').show().text('Space taken! Please choose a different one.')
}

const onGameOverSuccess = function (response) {
  console.log('game object', response)
  $('.gameboard-locations').off()
}

const onError = function (error) {
  $('#message').text('Error: ', error.responseJSON.message)
}

module.exports = {
  onNewGameSuccess,
  onPlaceMarkerSuccess,
  spaceTaken,
  onGameOverSuccess,
  onError
}
