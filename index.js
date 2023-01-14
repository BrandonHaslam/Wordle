// Change this to local storage
let darkModeOn = true
const wordLength = 5
// Toggle dark mode

const darkModeToggle = document.querySelector("#darkModeToggle")
const body = document.querySelector('body')
darkModeToggle.addEventListener('click', toggleDarkMode)

function toggleDarkMode() {
  darkModeOn = !darkModeOn
  checkDarkMode()
}

// function addDarkMode () {
//   body.classList.add('dark')
// }

// function removeDarkMode () {
//   body.classList.remove('dark')
// }

function checkDarkMode () {
  darkModeOn ? body.classList.add('dark') : body.classList.remove('dark')
}

// Keyboard input
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const validKeys = [...alphabet];
const row = document.querySelector(".letter-row")
let currentGuess = ''

document.addEventListener('keyup', (e) => {
  const key = e.key
  if(validKeys.includes(key.toUpperCase()) && (currentGuess.length < wordLength)){
    currentGuess += e.key
    console.log(currentGuess)
    console.log(row.children)
  }
  if(key === 'Enter' && currentGuess.length === wordLength) {
    // enter function
    console.log(currentGuess)
  }
  if(key === 'Backspace' && currentGuess.length !== 0){
    currentGuess = currentGuess.slice(0, -1); 
  }
});

(() => {
  checkDarkMode()
})();