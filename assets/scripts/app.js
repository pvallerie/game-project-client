'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.gameboard-locations').html('1')
  // hide authenticated features
  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // show game board when 'new game' button is clicked
  $('#new-game').on('click', gameEvents.onNewGame)
  const gameboardLive = $('.gameboard-locations').on('click', gameEvents.onPlaceMarker)
  module.exports = {
    gameboardLive
  }
})
