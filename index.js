const rock= document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const spock = document.getElementById('spock');
const lizard = document.getElementById('lizard');
let span = document.querySelector('span');
let score= 0;
  

    const playerOptions = [rock, paper, scissors, spock, lizard];
        playerOptions.forEach(options =>{
            options.addEventListener('click', function(){
                let choice = ['rock','paper','scissors', 'spock', 'lizard'];
                let comp = choice[Math.floor(Math.random() * choice.length)];
        playRound(this.id, comp);
            })
    })

       


const playRound =(playerSelection,computerSelection) =>{
    if ( playerSelection === computerSelection) {
        score +=1;
        updateScore();
   }
      else{
          if(score >= 1){
          score -=1;
          }
          updateScore();  
  }
  };

function updateScore(){
    span.innerHTML = score;
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
    rules.style.display ='none';
    header.style.opacity='1';
     main.style.opacity='1';
}

closeBtn.addEventListener('click', close);