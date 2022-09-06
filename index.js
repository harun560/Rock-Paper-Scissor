function netSalary() {
    
    let userInput = document.getElementById("Gross").value;
    let outputt;

    if (userInput === 'rock' || userInput === 'paper' ||userInput === 'scissor') {
		outputt =  userInput;

    }

   
    else {
     outputt =   "you chose wrong";
    }
    
    document.getElementById("fourth").textContent = outputt;
    return false;
}

function getComputerChoice(){
  var randomNumber =  Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
    return 'rock'
    break;
    case 1:
    return 'paper'
    break;
    case 2:
    return 'scissor'
    break;
  }

}


function determineWinner (userChoice,computerChoice){
    if(userChoice === computerChoice){
      return "Game is Tie";
    }
    if(userChoice === 'rock'){
   if(computerChoice === 'paper'){
     return 'The Computer Won!';
   } else {
     return "you Won"
   }
    }
    if(userChoice === 'paper'){
   if(computerChoice === 'rock'){
     return 'The Computer Won!';
   } else {
     return "you Won"
   }
    }
   
    if(userChoice === 'scissors'){
   if(computerChoice === 'rock'){
     return 'The Computer Won!';
   } else {
     return "you Won"
   }
    }
   
     }
  function display(){
   document.getElementById("third").textContent =   getComputerChoice();
    document.getElementById("second").textContent =   determineWinner();
  }










  