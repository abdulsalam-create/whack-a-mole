const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const output = document.getElementById('output')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() *9)]
  randomPosition.classList.add('mole')

  //asign the id of the randomPosition to hit position for us to use later
  hitPosition = randomPosition.id
}

square.forEach(id => {
 id.addEventListener('mouseup', () => {
   if (id.id === hitPosition){
     result = result + 1
     score.textContent = result
   }
 })
})


function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 1000)
}
moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if(currentTime === 0) {
    clearInterval(timerId)
    output.innerHTML = `Game over your final score is ${result}`
    win()
  }
}

let timerId = setInterval(countDown, 1000)

function win() {
  document.querySelector('.game').classList.add('hide');
}
