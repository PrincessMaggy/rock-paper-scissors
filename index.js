const rock= document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const spock = document.getElementById('spock');
const lizard = document.getElementById('lizard');
let span = document.querySelector('span');
let step2 = document.getElementById('step2');
let choose = document.getElementById('choose');
let score= 0;
let word; 






 const playerOptions = [rock, paper, scissors, spock, lizard];
     playerOptions.forEach(options =>{
        options.addEventListener('click', function(){
             let choice = (playerOptions[Math.floor(Math.random() * playerOptions.length)]);
             let comp = choice.id;
             let src1 = this.src;
             let src2 = choice.src;
                
        playRound(this.id, comp, src1, src2);

         })
 })

       


const playRound =(playerSelection,computerSelection, imgSrc1, imgSrc2) =>{
    if ( playerSelection === computerSelection) {
        score +=1;
        word = 'YOU WIN';
        updateScore();
   }
      else{
          word = 'YOU LOSE';
          if(score >= 1){
          score -=1;
          }
          updateScore();  
  }
  choose.style.display= 'none';
  let step2Contents =
    `<div class ='statement'> 
        <p> YOU PICKED </p> 
        <p> THE HOUSE PICKED </p>
     </div>
    <div class ='choices'>
        <img src='${imgSrc1}' id ='${playerSelection}' class ='choice1' alt ='${playerSelection}'/>
        <p class ='word'>${word}</p>
        <button id='play' onclick ='playAgain()'> PLAY AGAIN </button>
        <img src='${imgSrc2}' id ='${playerSelection}'  class ='choice2' alt ='${playerSelection}'/>
    </div> `;
    step2.innerHTML = step2Contents;
  };

function updateScore(){
    span.innerHTML = score;
  }

function playAgain (){
    choose.style.display = 'block';
    step2.style.display ='none';
}




    

// RULES SECTION VISIBILITY

let rules = document.getElementById('rules');
let header = document.querySelector('header');
let main =  document.querySelector('main');
let rulesBtn =document.querySelector(".rulesBtn");
let closeBtn = document.getElementById('close');




const pop =() =>{
    rules.classList.toggle("show");
    header.style.opacity='0.5';
     main.style.opacity='0.5';
    
}
    
rulesBtn.addEventListener('click', pop);
    
const close= () =>{
    rules.classList.toggle("hide");
    header.style.opacity='1';
     main.style.opacity='1';
}

closeBtn.addEventListener('click', close);