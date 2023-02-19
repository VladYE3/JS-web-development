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
    let spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue('left'));

    if(cubeBottom <= 238 && spikeLeft >= 20 && spikeLeft <= 140) {
        gameOver.style.display = 'block';
        spike.style.animation = 'none';
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);