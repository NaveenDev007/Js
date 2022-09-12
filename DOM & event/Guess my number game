console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='✨correct number!';

//DOM manupulation
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);

//handling & click event
document.querySelector('.check').addEventListener(
    'click', function(){
       const guess=Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);
if (!guess){
document.querySelector('.message').textContent= '🧨 Not a Number'
}
    }
)
//--------------------------------------------------------------

//Implimating the game logic
'use strict'
const numQ=Math.trunc(Math.random()*20)+1;
        document.querySelector('.number').textContent=numQ;
let score=20;      
document.querySelector('.check').addEventListener(
    'click',function(){
        const guess=Number(document.querySelector('.guess').value);
        console.log(guess);
 //correct       
        if(guess===numQ){
 document.querySelector('.message').textContent='🎇✨ correct Number';
 document.querySelector('body').style.backgroundColor='green';
        }

 //too low       
        else if(guess<numQ){
/* console.log(document.querySelector('.score').textContent--,
document.querySelector('.message').textContent='too low'); */
if(score>0){
    document.querySelector('.message').textContent='too low';
    score--;
    document.querySelector('.score').textContent=score;
}else{
    document.querySelector('.message').textContent='🥵 We lost the game'
}
}
//too heigh
else if(guess>numQ){
/* console.log(document.querySelector('.score').textContent--,
document.querySelector('.message').textContent='too high');  */
if(score>0){
    document.querySelector('.message').textContent='too high';
    score--;
    document.querySelector('.score').textContent=score;
}else{
    document.querySelector('.message').textContent='🥵 We lost the game'
}
 }
  }
)
//Again
document.querySelector('.again').addEventListener(
    'click', function(){
//1 channge
numQ=Math.trunc(Math.random()*20)+1;
score=20;
document.querySelector('.guess').value='';
document.querySelector('.number').textContent='?';
 //2 change     
      document.querySelector('.message').textContent='start guessing';
      document.querySelector('.score').textContent=score;
//3 change 
document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.number').style.width='15rem';
    }
)
//------------------------------------------------------------------------

//refactoring our code: DRY code
'use strict'
let numQ=Math.trunc(Math.random()*20)+1;

        
let score=20;
let Highscore=0;
const displayMessage=function(message){
document.querySelector('.message').textContent=message;
}     
document.querySelector('.check').addEventListener(
    'click',function(){
        const guess=Number(document.querySelector('.guess').value);   
        console.log(guess);
        if(guess===numQ){
displayMessage('🎇✨ correct Number');
document.querySelector('body').style.backgroundColor='green';
document.querySelector('.number').style.width='50rem';
document.querySelector('.number').textContent=numQ;
//highScore
if(score>Highscore){
Highscore=score
    document.querySelector('.highscore').textContent=score;
}
}
else if (guess!==numQ){
    displayMessage(guess<numQ?'too low':'too high')
    if(score>0){
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        displayMessage('🥵 We lost the game');
    }
}
    }
)

document.querySelector('.again').addEventListener(
    'click', function(){
//1 channge
numQ=Math.trunc(Math.random()*20)+1;
score=20;
document.querySelector('.guess').value='';
document.querySelector('.number').textContent='?';
 //2 change     
      displayMessage('start guessing');
      document.querySelector('.score').textContent=score;
//3 change 
document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.number').style.width='15rem';
    }
)
//----------------------------------------------------------------------------

