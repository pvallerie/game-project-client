const store = require('./../store')

const winPossibilities = [
  // horizontal win possiblities
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical win possiblities
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal win possiblities
  [0, 4, 8],
  [2, 4, 6]
  //
]

const gameArray = ['o', 'o', '', 'x', 'o', '', 'x', 'x', '']

const checkWins = function(gameArray) {
  // check horizontal wins
  if (
    (gameArray[0] === 'x' && gameArray[1] === 'x' && gameArray[2] === 'x') ||
    (gameArray[3] === 'x' && gameArray[4] === 'x' && gameArray[5] === 'x') ||
    (gameArray[6] === 'x' && gameArray[7] === 'x' && gameArray[8] === 'x')) {
    console.log('x wins!')
  } else if (
    (gameArray[0] === 'o' && gameArray[1] === 'o' && gameArray[2] === 'o') ||
    (gameArray[3] === 'o' && gameArray[4] === 'o' && gameArray[5] === 'o') ||
    (gameArray[6] === 'o' && gameArray[7] === 'o' && gameArray[8] === 'o')) {
    console.log('o wins!')
    // check vertical wins
  } else if (
    (gameArray[0] === 'x' && gameArray[3] === 'x' && gameArray[6] === 'x') ||
    (gameArray[1] === 'x' && gameArray[4] === 'x' && gameArray[7] === 'x') ||
    (gameArray[2] === 'x' && gameArray[5] === 'x' && gameArray[8] === 'x')) {
    console.log('x wins!')
  } else if (
    (gameArray[0] === 'o' && gameArray[3] === 'o' && gameArray[6] === 'o') ||
    (gameArray[1] === 'o' && gameArray[4] === 'o' && gameArray[7] === 'o') ||
    (gameArray[2] === 'o' && gameArray[5] === 'o' && gameArray[8] === 'o')) {
    console.log('o wins!')
    // check diagonal wins
  } else if (
    (gameArray[0] === 'x' && gameArray[3] === 'x' && gameArray[6] === 'x') ||
    (gameArray[1] === 'x' && gameArray[4] === 'x' && gameArray[7] === 'x')) {
    console.log('x wins!')
  } else if (
    (gameArray[0] === 'o' && gameArray[4] === 'o' && gameArray[8] === 'o') ||
    (gameArray[2] === 'o' && gameArray[4] === 'o' && gameArray[6] === 'o')) {
    console.log('o wins!')
  }
}

checkWins(gameArray)




// if each winning position has the same marker as the others for
// that particular winning combo, then there's a winning

// if game array is full and no win, its a tie

// if neither win, nor tie, keep playing

// trigger api data object to say over: true
