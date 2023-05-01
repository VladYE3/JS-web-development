const cube = document.getElementById('cube');
const spike = document.getElementById('spike');
const nameGame = document.querySelector('#name');
const play = document.querySelector('#play');
const exitBut = document.querySelector('#exit');
const floor = document.querySelector('#floor');
const count = document.querySelector('#count');
const score = document.querySelector('#score');
const gameOver = document.querySelector('#gameOver');
const buttonSound = document.querySelector('#sound');
const retry = document.querySelector('#retryDiv');
const home = document.querySelector('#homeDiv');
let interval = null;
let playerScore = 0;

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
// Jump Button
document.addEventListener('keydown', function(event) { 
  if (event.repeat) {
    event.preventDefault();
  } else if (event.code == 'Space'){    
    jump();  
  }
});
document.addEventListener('click', function(event) {
    jump();
});
// Add Jump
function jump() {    
  if (cube.classList != 'jump') {        
    cube.classList.add('jump')    
  }    
  setTimeout(function() {        
    cube.classList.remove('jump')    
  }, 300)
}
//Score
let scoreCounter = () => {  
  playerScore++;  
  score.innerHTML = `Score <b>${playerScore}</b>`;  
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
  score.innerHTML = 'Score 0';   
  audio.play();  
  setTimeout(() => {count.style.display = 'flex';}, 1000);   
  setTimeout(() => {count.textContent = "Steady";}, 2000);  
  setTimeout(() => {count.textContent = "Go!";}, 3000);  
  setTimeout(() => {    
    count.style.display = 'none';     
    count.textContent = "Ready";     
    spike.style.animation = 'spikeMov 0.8s infinite linear';    
    scoreCounter();    
    interval = setInterval(scoreCounter, 100);    
    let isALive = setInterval(() => {     
      let cubeBottom = parseInt(window.getComputedStyle(cube).getPropertyValue('bottom'));      
      let cubeLeft = parseInt(window.getComputedStyle(cube).getPropertyValue('left'));      
      let spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue('left'));      
      let spikeBottom = parseInt(window.getComputedStyle(spike).getPropertyValue('bottom'));      
      let spikeWidth = parseInt(window.getComputedStyle(spike).getPropertyValue('width')) * 0.3;      
      let cubeWidth = parseInt(window.getComputedStyle(cube).getPropertyValue('width'));      
      let spikeHeight = parseInt(window.getComputedStyle(spike).getPropertyValue('height'));      
      if(cubeBottom <= spikeBottom + spikeHeight/2 && spikeLeft + spikeWidth/2 >= cubeLeft - cubeWidth/2 && spikeLeft - spikeWidth/2 <= cubeLeft + cubeWidth/2) {
        gameOver.style.display = 'flex';          
        spike.style.animation = 'none';          
        cube.style.display = 'none';          
        spike.style.display = 'none';          
        floor.style.display = 'none';          
        retry.style.display = 'block';          
        home.style.display = 'block';          
        audio.pause();          
        clearInterval(interval);          
        playerScore = 0;      
      }  
    }, 10);  
  }, 4000);
} 
// Sound
const audio = new Audio();
audio.src = 'mp3/music.mp3';
audio.volume = 0.3;
let soundTurn = () => {  
  if(buttonSound.textContent == "Sound:On") {    
    buttonSound.textContent = "Sound:Off";    
    audio.src = 'none';  
  } else {      
      buttonSound.textContent = "Sound:On";      
      audio.src = 'mp3/music.mp3'; 
  }
}
// Exit
let exit = () => window.close();
// Retry   
let retryCount = () => {  
  cube.style.display = 'block';  
  spike.style.display = 'block';  
  floor.style.display = 'block';  
  score.style.display = 'block';  
  home.style.display = 'none';  
  retry.style.display = 'none';  
  gameOver.style.display = 'none';  
  audio.play();  
  score.innerHTML = 'Score 0';   
  setTimeout(() => {count.style.display = 'flex';}, 1000);   
  setTimeout(() => {count.textContent = "Steady";}, 2000);  
  setTimeout(() => {count.textContent = "Go!";}, 3000);  
  setTimeout(() => {    
    count.style.display = 'none';     
    count.textContent = "Ready";     
    spike.style.animation = 'spikeMov 0.8s infinite linear';    
    scoreCounter();    
    interval = setInterval(scoreCounter, 100);    
    let isALive = setInterval(() => {      
      let cubeBottom = parseInt(window.getComputedStyle(cube).getPropertyValue('bottom'));      
      let cubeLeft = parseInt(window.getComputedStyle(cube).getPropertyValue('left'));      
      let spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue('left'));      
      let spikeBottom = parseInt(window.getComputedStyle(spike).getPropertyValue('bottom'));      
      let spikeWidth = parseInt(window.getComputedStyle(spike).getPropertyValue('width')) * 0.3;      
      let cubeWidth = parseInt(window.getComputedStyle(cube).getPropertyValue('width'));      
      let spikeHeight = parseInt(window.getComputedStyle(spike).getPropertyValue('height'));      
      if(cubeBottom <= spikeBottom + spikeHeight/2 && spikeLeft + spikeWidth/2 >= cubeLeft - cubeWidth/2 && spikeLeft - spikeWidth/2 <= cubeLeft + cubeWidth/2) {          
        gameOver.style.display = 'flex';          
        spike.style.animation = 'none';          
        cube.style.display = 'none';          
        spike.style.display = 'none';          
        floor.style.display = 'none';          
        retry.style.display = 'block';          
        home.style.display = 'block';          
        audio.pause();         
        clearInterval(interval);         
        playerScore = 0;     
      } 
    }, 10);
  }, 4000);
}
// Back to menu
let backHome = () => {  
  score.style.display = 'none';  
  home.style.display = 'none';  
  retry.style.display = 'none';  
  gameOver.style.display = 'none';  
  nameGame.style.display = 'flex';  
  play.style.display = 'flex';  
  buttonSound.style.display = 'flex'; 
  exitBut.style.display = 'flex';
}
