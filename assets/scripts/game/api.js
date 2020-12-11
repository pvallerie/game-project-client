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

const placeMarker = function (cellIndex, playerMarker, gameOver) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: playerMarker
        },
        over: gameOver
      }
    }
  })
}

// const gameOver = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + store.game._id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: {
//       game: {
//         cell: {
//           index: 0,
//           value: 'x'
//         },
//         over: true
//       }
//     }
//   })
// }

module.exports = {
  createNewGame,
  placeMarker
}
