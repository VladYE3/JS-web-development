const cube = document.getElementById('cube');
const spike = document.getElementById('spike');

document.addEventListener('keydown', function(event) {
    jump();
});
function jump() {
    if (cube.classList != 'jump') {
        cube.classList.add('jump')
    }
    setTimeout(function() {
        cube.classList.remove('jump')
    }, 300)
}

let score = document.querySelector('#score');
let gameOver = document.querySelector('#gameOver');

let interval = null;
let playerScore = 0;
//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}
//start Game
window.addEventListener('keydown', (start) =>{
    if(start.code == 'Space'){
        gameOver.style.display = 'none';
    }
})
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