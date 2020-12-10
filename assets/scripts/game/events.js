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
  console.log('CLICK')
  // rotate players:
  // grab game array
  const cellsArray = store.game.cells
  const isX = marker => marker === 'x'
  const arrayOfX = cellsArray.filter(isX)
  const isO = marker => marker === 'o'
  const arrayOfO = cellsArray.filter(isO)

  // grab index data stored in button HTML
  const buttonData = $(this).data()
  // grab value of that index
  const cellIndex = buttonData.cellIndex

  // if number of 'x's in cells array > number of 'o's, playerMarker = '0'
  // else, playerMarker = 'x'
  let playerMarker = 'x'
  // if the index corresponding to the spot on the board is empty, player can
  // place a marker
  if (store.game.cells[cellIndex] === ('x' || 'o')) {
    ui.spaceTaken()
  } else {
    if (arrayOfX.length === 0) {
      console.log('X goes')
      $(this).html('X')
      playerMarker = 'x'
      $('#game-message').html('Player O, it is your turn!')
    // if arrayOfX is not empty, but is equal to arrayOfO, X goes
    } else if (arrayOfX.length > arrayOfO.length) {
      console.log('O goes')
      $(this).html('O')
      playerMarker = 'o'
      $('#game-message').html('Player X, it is your turn!')
    // else, O goes
    } else if (arrayOfX.length === arrayOfO.length) {
      console.log('X goes')
      $(this).html('X')
      playerMarker = 'x'
      $('#game-message').html('Player O, it is your turn!')
    }
    $('#game-warning').hide()
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
