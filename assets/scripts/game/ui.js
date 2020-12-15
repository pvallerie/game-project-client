const store = require('./../store')
// const wins = require('./wins')
// const api = require('./api')
// const gameEvents = require('./events')

const onNewGameSuccess = function (response) {
  // store the game object for access to game ID and cells
  store.game = response.game
  $('.gameboard-locations').html('')
  $('#message').show()
  $('#message').html('New game created!')
  $('#game-message').html('Player X, it is your turn!')
}

const onPlaceMarkerSuccess = function (response) {
  store.game = response.game
  console.log('game object:', store.game)
  $('#message').hide()
}

const spaceTaken = function () {
  $('#game-warning').show().text('Space taken! Please choose a different one.')
}

const onGameOverSuccess = function () {
  console.log('disable board')
  $('#gameboard').hide()
}

const onGamesPlayedSuccess = function (response) {
  const gamesPlayed = response.games.length
  $('#num-games-played').html(`You have played ${gamesPlayed} games...now go outside!`)
}

const onError = function (error) {
  $('#message').show()
  $('#message').text('Error: ', error.responseJSON.message)
}

module.exports = {
  onNewGameSuccess,
  onPlaceMarkerSuccess,
  spaceTaken,
  onGameOverSuccess,
  onGamesPlayedSuccess,
  onError
}
