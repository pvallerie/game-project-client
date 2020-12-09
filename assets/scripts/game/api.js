const store = require('./../store')
const config = require('./../config')

const createNewGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const placeMarker = function (cellIndex, playerMarker) {
  return $.ajax({
    url: config.apiUrl + '/games' + store.user._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": cellIndex,
          "value": playerMarker
        },
        "over": false
        }
      }
  })
}

module.exports = {
  createNewGame,
  placeMarker
}
