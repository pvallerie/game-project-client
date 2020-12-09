const store = require('./../store')

const onNewGameSuccess = function (response) {
  console.log('response: ', response)
  // store the game object for access to game ID and cells
  store.game = response.game
  console.log('stored game: ', store.game)
  console.log(store)
}

const onPlaceMarkerSuccess = function (response) {
  console.log(response)
  store.game = response.game
  console.log(store.game)
}

const onError = function (error) {
  $('#message').text('Error: ', error.responseJSON.message)
}

module.exports = {
  onNewGameSuccess,
  onPlaceMarkerSuccess,
  onError
}
