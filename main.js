const CITIES = [
  ['o', 's', 'a', 'k', 'a'],
  ['t', 'o', 'k', 'y', 'o'],
  ['m', 'e', 'm', 'p', 'h', 'i', 's'],
  ['p', 'a', 'r', 'i', 's'],
  ['t', 'o', 'r', 'o', 'n', 't', 'o'],
  ['a', 't', 'l', 'a', 'n', 't', 'a'],
  ['b', 'e', 'r', 'l', 'i', 'n'],
  ['o', 's', 'l', 'o'],
  ['s', 't', 'o', 'c', 'k', 'h', 'o', 'l', 'm'],
  ['m', 'o', 's', 'c', 'o', 'w'],
  ['b', 'e', 'i', 'j', 'i', 'n', 'g'],
  ['v', 'a', 'n', 'c', 'o', 'u', 'v', 'e', 'r']
];

var CITY;
var lives = 6;
var guessedLetters = [];
var word = [];

var message = document.getElementById('message');
var livesNum = document.getElementById('lives-number');
var blanks = document.getElementById('blanks');

// randomly select a city from the array
function getCity() {
  CITY = CITIES[Math.floor(Math.random() * CITIES.length)];

  console.log(CITY);
  createBlanks();
}

// display correct number of blanks on the screen
function createBlanks() {
  for (var i = 0; i < CITY.length; i++) {
    word.push('_');
  }

  blanks.innerHTML = word.join(" ");
}

// check if the chosen guess is in the word
function checkGuess(letter) {
  var correct = false;

  for (var i = 0; i < CITY.length; i++) {
    if (letter === CITY[i]) {
      correct = true;
    }
  }

  if (correct === true) {
    addLetter(letter);
    changeColor(letter, correct);
  } else if (lives !== 0) {
    reduceLives();
    changeColor(letter, correct);
  }

}

// adds letter to word
function addLetter(letter) {
  for (var i = 0; i < CITY.length; i++) {
    if (letter === CITY[i]) {
      word[i] = letter;
      console.log(word);
      message.innerHTML = 'CONGRATULATIONS!<br>You found a letter';
      checkGameWon();
    }
  }

  blanks.innerHTML = word.join(" ");
}

// reduce the number of remaining lives
function reduceLives() {
  lives -= 1;
  livesNum.innerHTML = lives;
  checkGameWon();
}

// change color of key to show if already guessed
function changeColor(letter, value) {
  if (value === true) {
    document.getElementById(letter).style.backgroundColor = "#1E1E1E";
  } else {
    document.getElementById(letter).style.backgroundColor = "#D45055";
  }
}

function checkGameWon() {
  if (word.join("") === CITY.join("")) {
    message.innerHTML = 'YOU WON!<br>Refresh the page to paly again';
  } else if (lives === 0) {
    message.innerHTML = 'YOU LOST :(<br>Refresh the page to paly again';
  }
}

getCity();
livesNum.innerHTML = lives;
