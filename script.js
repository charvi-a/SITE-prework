//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var volume = 0.5;         //between 0.0 and 1.0
var tonePlaying = false;
var clueHoldTime = 1000;   //clue holds for 1 second
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var guessCounter = 0;
var mistakes = 0;             //tracks the number of mistakes made by the user
var interval;
var count = 180000           //3min


function startGame(){
    progress = 0;
    mistakes = 0;
    randomPattern(6);
    startTimer();
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    clearInterval(interval);
    resetTimer();
    document.getElementById("timer").innerHTML = "Time left: " + "0" + "min " + "0" + "sec";
}

// Sound Synthesis Functions
const freqMap = {
  1: 260,
  2: 340,
  3: 300,
  4: 460.2,
  5: 400,
  6: 439.5
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 15;
  }
     
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations, You won!")
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if(btn === pattern[guessCounter]){
    if(progress === guessCounter){
      if(guessCounter === pattern.length-1){
        winGame();
        return;
      }
      else{
        ++progress;
        playClueSequence();
      }
    }
    else{
      ++guessCounter;
    }
  }
  else{
    ++mistakes;
    if (mistakes == 3){
      loseGame(); 
    }
    else{
      playClueSequence();
    }
  }
}

//randomize the pattern
function randomPattern(max){
  for(let i = 0; i < max;++i){
    pattern.push((Math.floor(Math.random() * Math.floor(max)))+1);
  }
}


function startTimer(){
  interval = setInterval(function(){
  count -= 1000;          
  var minutes = Math.floor(count % (1000*60*60) / (1000*60));
  var seconds = Math.floor((count % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = "Time left: " + minutes + "min " + seconds + "sec";
  if(seconds == 0 && minutes == 0){
    stopGame();
    alert("Time is Up!");
  }
},1000);
}

function resetTimer(){
  count = 180000;
}