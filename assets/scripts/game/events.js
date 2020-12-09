const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onNewGame = function (event) {
  $('.game').show()
  const data = '{}'
  api.createNewGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

const onPlaceMarker = function () {
  // grab index of gameboar location
  const buttonData = $(this).data()
  // grab value of that index
  const cellIndex = buttonData.cellIndex
  const playerMarker = 'x'
  // console.log(store.game.cell)
  // console.log(cellIndex, playerMarker)
  // if the index corresponding to the spot on the board is empty, player can
  // place a marker
  // if first turn, place 'x'
  $(this).html('X')
  // if x just went, place 'o'
  // place marker in the array 'user.game.cells' at the corresponding index
  api.placeMarker(cellIndex, playerMarker)
    .then(ui.onPlaceMarkerSuccess)
    .catch(ui.onError)
}

module.exports = {
  onNewGame,
  onPlaceMarker
}
