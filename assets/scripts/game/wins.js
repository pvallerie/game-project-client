const store = require('./../store')
// const api = require('./api')
// const ui = require('./ui')
// const gameArray = []

const checkWins = function (gameArray) {
  // declare function for checking if game array is populated
  const isPopulated = (currentValue) => currentValue !== ''
  let gameOver = store.game.over
  // check horizontal wins
  if (
    (gameArray[0] !== '' && gameArray[0] === 'x' && gameArray[1] === 'x' && gameArray[2] === 'x') ||
    (gameArray[3] !== '' && gameArray[3] === 'x' && gameArray[4] === 'x' && gameArray[5] === 'x') ||
    (gameArray[6] !== '' && gameArray[6] === 'x' && gameArray[7] === 'x' && gameArray[8] === 'x')) {
    $('#win-message').html('Player X wins!')
    gameOver = true
  } else if (
    (gameArray[0] !== '' && gameArray[0] === 'o' && gameArray[1] === 'o' && gameArray[2] === 'o') ||
    (gameArray[3] !== '' && gameArray[3] === 'o' && gameArray[4] === 'o' && gameArray[5] === 'o') ||
    (gameArray[6] !== '' && gameArray[6] === 'o' && gameArray[7] === 'o' && gameArray[8] === 'o')) {
    $('#win-message').html('Player O wins!')
    gameOver = true
    // check vertical wins
  } else if (
    (gameArray[0] !== '' && gameArray[0] === 'x' && gameArray[3] === 'x' && gameArray[6] === 'x') ||
    (gameArray[1] !== '' && gameArray[1] === 'x' && gameArray[4] === 'x' && gameArray[7] === 'x') ||
    (gameArray[2] !== '' && gameArray[2] === 'x' && gameArray[5] === 'x' && gameArray[8] === 'x')) {
    $('#win-message').html('Player X wins!')
    gameOver = true
  } else if (
    (gameArray[0] !== '' && gameArray[0] === 'o' && gameArray[3] === 'o' && gameArray[6] === 'o') ||
    (gameArray[1] !== '' && gameArray[1] === 'o' && gameArray[4] === 'o' && gameArray[7] === 'o') ||
    (gameArray[2] !== '' && gameArray[2] === 'o' && gameArray[5] === 'o' && gameArray[8] === 'o')) {
    $('#win-message').html('Player O wins!')
    gameOver = true
    // check diagonal wins
  } else if (
    (gameArray[0] !== '' && gameArray[0] === 'x' && gameArray[4] === 'x' && gameArray[8] === 'x') ||
    (gameArray[2] !== '' && gameArray[2] === 'x' && gameArray[4] === 'x' && gameArray[6] === 'x')) {
    $('#win-message').html('Player X wins!')
    gameOver = true
  } else if (
    (gameArray[0] !== '' && gameArray[0] === 'o' && gameArray[4] === 'o' && gameArray[8] === 'o') ||
    (gameArray[2] !== '' && gameArray[2] === 'o' && gameArray[4] === 'o' && gameArray[6] === 'o')) {
    $('#win-message').html('Player O wins!')
    gameOver = true
  } else if (gameArray.every(isPopulated) === true) {
    $('#win-message').html('It is a tie!')
    gameOver = true
  }
  return gameOver
}

// const newArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'x']

module.exports = {
  checkWins
}
