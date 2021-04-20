//Game Variables
let userScore=0;
let computerScore=0; 
//DOM Elements
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
 
//Computer pick-function
function getComputerChoice() { 
 const choices=["r", "p", "s"];
 const  randomNumber= Math.floor(Math.random()* 3);
 return choices[randomNumber];
}

//function to convert r,s,p into words in my own language(rock,paper,scissors)
function convertToWord(letter){
  if (letter==="r") return "Piatra";
  if (letter==="p") return "Hartie";
  if (letter==="s") return "Foarfeca";
}

//Play: win function
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML= computerScore;
  //const smallUserWord="[you]".fontsize(3).sup();
  //const smallCompWord="[comp]".fontsize(3).sup();
  result_p.innerHTML=` ${convertToWord(userChoice)} bate ${convertToWord(computerChoice)}. Runda asta e a ta!`
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function(){ document.getElementById(userChoice).classList.remove("green-glow")}, 300);

    if (userScore===5){
      alert("Felicitari, maestre! Ai castigat.");
      userScore=0;
      computerScore=0;
    }
  
}

//Play: lose function
function lose(userChoice, computerChoice){
  computerScore++
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML= computerScore;
  //const smallUserWord="[you]".fontsize(3).sup();
  //const smallCompWord="[comp]".fontsize(3).sup();
  result_p.innerHTML=` ${convertToWord(userChoice)} este batuta de ${convertToWord(computerChoice)}. Ai fost infrant..`
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function(){document.getElementById(userChoice).classList.remove("red-glow")}, 300);

  if(computerScore===5){
    alert("Slabut, ai pierdut..");
    userScore=0;
      computerScore=0;
  }
}
//Play: tie function
function tie(userChoice,computerChoice){
  result_p.innerHTML=` ${convertToWord(userChoice)} este egala cu ${convertToWord(computerChoice)}. Remiza!`
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(function(){document.getElementById(userChoice).classList.remove("gray-glow")}, 300)
}

//game function
function game(userChoice){
    const computerChoice=getComputerChoice();
   switch(userChoice + computerChoice) {
     case "rs":
     case "pr":
     case "sp":
    win(userChoice, computerChoice);
       break;
     case "rp":
     case "ps":
     case "sr":
     lose(userChoice, computerChoice);
       break;
     case "rr":
     case "pp":
     case "ss":
    tie(userChoice, computerChoice);
     break;
     }
   }
// main function where i added some addEventListeners and by clicking each of them picking a certain element(rock, paper, scissors)
function main() {
    rock_div.addEventListener("click", function(){
    game("r");
  })
    paper_div.addEventListener("click", function(){
    game("p");
  })
    scissors_div.addEventListener("click", function(){
    game("s");
  })
}
 main();

 