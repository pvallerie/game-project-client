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
  // grab index data stored in button HTML
  const buttonData = $(this).data()
  // grab value of that index
  const cellIndex = buttonData.cellIndex
  const playerMarker = 'x'
  console.log('cell with index 3: ', store.game.cells[cellIndex])
  // if the index corresponding to the spot on the board is empty, player can
  // place a marker
  if (store.game.cells[cellIndex] === ('x' || 'o')) {
    $('#game-warning').show().text('Space taken! Please choose a different one.')
  } else {
    console.log('space open!')
    // if first turn, place 'x'
    $(this).html('X')
    $('#game-warning').hide()
    // if x just went, place 'o'
    // place marker in the array 'user.game.cells' at the corresponding index
    api.placeMarker(cellIndex, playerMarker)
      .then(ui.onPlaceMarkerSuccess)
      .catch(ui.onError)
  }
}

module.exports = {
  onNewGame,
  onPlaceMarker
}
