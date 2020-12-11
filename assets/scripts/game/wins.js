// const xWins = $('#game-message').html('Player X wins!')
// const oWins = $('#game-message').html('Player O wins!')
const gameArray = []

const checkWins = function (gameArray) {
  // declare function for checking if game array is populated
  const isPopulated = (currentValue) => currentValue !== ''
  // check horizontal wins
  if (
    (gameArray[0] === 'x' && gameArray[1] === 'x' && gameArray[2] === 'x') ||
    (gameArray[3] === 'x' && gameArray[4] === 'x' && gameArray[5] === 'x') ||
    (gameArray[6] === 'x' && gameArray[7] === 'x' && gameArray[8] === 'x')) {
    $('#game-message').html('Player X wins!')
  } else if (
    (gameArray[0] === 'o' && gameArray[1] === 'o' && gameArray[2] === 'o') ||
    (gameArray[3] === 'o' && gameArray[4] === 'o' && gameArray[5] === 'o') ||
    (gameArray[6] === 'o' && gameArray[7] === 'o' && gameArray[8] === 'o')) {
    $('#game-message').html('Player O wins!')
    // check vertical wins
  } else if (
    (gameArray[0] === 'x' && gameArray[3] === 'x' && gameArray[6] === 'x') ||
    (gameArray[1] === 'x' && gameArray[4] === 'x' && gameArray[7] === 'x') ||
    (gameArray[2] === 'x' && gameArray[5] === 'x' && gameArray[8] === 'x')) {
    $('#game-message').html('Player X wins!')
  } else if (
    (gameArray[0] === 'o' && gameArray[3] === 'o' && gameArray[6] === 'o') ||
    (gameArray[1] === 'o' && gameArray[4] === 'o' && gameArray[7] === 'o') ||
    (gameArray[2] === 'o' && gameArray[5] === 'o' && gameArray[8] === 'o')) {
    $('#game-message').html('Player O wins!')
    // check diagonal wins
  } else if (
    (gameArray[0] === 'x' && gameArray[4] === 'x' && gameArray[8] === 'x') ||
    (gameArray[2] === 'x' && gameArray[4] === 'x' && gameArray[6] === 'x')) {
    $('#game-message').html('Player X wins!')
  } else if (
    (gameArray[0] === 'o' && gameArray[4] === 'o' && gameArray[8] === 'o') ||
    (gameArray[2] === 'o' && gameArray[4] === 'o' && gameArray[6] === 'o')) {
    $('#game-message').html('Player O wins!')
  } else if (gameArray.every(isPopulated) === true) {
    $('#game-message').html('It is a tie!')
  }
}

checkWins(gameArray)

// const newArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'x']


// if each winning position has the same marker as the others for
// that particular winning combo, then there's a winning

// if game array is full and no win, its a tie

// if neither win, nor tie, keep playing

// trigger api data object to say over: true

module.exports = {
  checkWins
}
