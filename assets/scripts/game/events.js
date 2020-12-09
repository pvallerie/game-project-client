const api = require('./api')
const ui = require('./ui')

const onNewGame = function (event) {
  $('.game').show()
  const data = '{}'
  api.createNewGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

const onPlaceMarker = function () {
  // if first turn, place 'x'
  console.log('place X!')
  $(this).html('X')
  // if x just went, place 'o'
}

module.exports = {
  onNewGame,
  onPlaceMarker
}
