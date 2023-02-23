const cube = document.getElementById('cube');
const spike = document.getElementById('spike');
let nameGame = document.querySelector('#name');
let play = document.querySelector('#play');
let exitBut = document.querySelector('#exit');
let floor = document.querySelector('#floor');
let count = document.querySelector('#count');
let score = document.querySelector('#score');
let gameOver = document.querySelector('#gameOver');
let buttonSound = document.querySelector('#sound')

document.addEventListener('keydown', function(event) {
  if(event.code == 'Space'){
    jump();
  }
});
function jump() {
    if (cube.classList != 'jump') {
        cube.classList.add('jump')
    }
    setTimeout(function() {
        cube.classList.remove('jump')
    }, 300)
}




//start Game
window.addEventListener('keydown', (start) =>{
    if(start.code == 'Space'){
        gameOver.style.display = 'none';
    }
})





// Background space
const params = {
    amount: 200,
    size: {
      min: 1,
      max: 5,
      giant: 9
    },
    duration: {
      min: 5,
      max: 25,
    }
  }
  const randomBetween = (a, b) => {
    return (a + (Math.random() * (b - a)));
  }
  for (let i = 0; i < params.amount; i++) {
    let star = $("<div></div>");
    let size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
    star.css({
      "width": size + "px",
      "height": size + "px",
      "left": randomBetween(0, 100) + "%",
      "top": randomBetween(0, 100) + "%",
      "box-shadow": "0 0 " + size + "px " + size / 2 + "px #043668",
      "animation-duration": randomBetween(params.duration.min, params.duration.max) + "s"
    });
    $("#root").append(star);
  }

//Menu
// Play

let startCount = () => {
  nameGame.style.display = 'none';
  play.style.display = 'none';
  buttonSound.style.display = 'none';
  exitBut.style.display = 'none';
  cube.style.display = 'block';
  spike.style.display = 'block';
  floor.style.display = 'block';
  score.style.display = 'block';

  setTimeout(() => {count.style.display = 'flex';}, 1000); 
  setTimeout(() => {count.textContent = "Steady";}, 2000);
  setTimeout(() => {count.textContent = "Go!";}, 3000);
  setTimeout(() => {
    count.style.display = 'none'; 
    count.textContent = "Ready"; 
    spike.style.animation = 'spikeMov 0.8s infinite linear';
    let interval = null;
    let playerScore = 0;
    
  //function for score
    let scoreCounter = () => {
      playerScore++;
      score.innerHTML = `Score <b>${playerScore}</b>`;  
    }
    interval = setInterval(scoreCounter, 100);
    
    let isALive = setInterval(() => {
      let cubeBottom = parseInt(window.getComputedStyle(cube).getPropertyValue('bottom'));
      let cubeLeft = parseInt(window.getComputedStyle(cube).getPropertyValue('left'));
      let spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue('left'));
      let spikeBottom = parseInt(window.getComputedStyle(spike).getPropertyValue('bottom'));
  
      let spikeWidth = parseInt(window.getComputedStyle(spike).getPropertyValue('width')) * 0.3
      let cubeWidth = parseInt(window.getComputedStyle(cube).getPropertyValue('width'))
      let spikeHeight = parseInt(window.getComputedStyle(spike).getPropertyValue('height'))
    
      if(cubeBottom <= spikeBottom + spikeHeight/2 && spikeLeft + spikeWidth/2 >= cubeLeft - cubeWidth/2 && spikeLeft - spikeWidth/2 <= cubeLeft + cubeWidth/2) {
          gameOver.style.display = 'block';
          spike.style.animation = 'none';
          cube.style.animation = 'none';
          clearInterval(interval);
          playerScore = 0;
      }
  }, 10);
  }, 4000);
} 
// Sound

let soundTurn = () => {
  if(buttonSound.textContent == "Sound:On") {
    buttonSound.textContent = "Sound:Off";
  } else {
      buttonSound.textContent = "Sound:On";
  }
}
// Exit
let exit = () => window.close();
