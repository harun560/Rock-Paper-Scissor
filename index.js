function getUserChoice ( userInput) {
 userInput = document.getElementById("Gross").value;
  if(userInput === 'rock'|| userInput === 'paper' ||userInput ==='scissor') {
  return userInput = userInput.toLowerCase(); 
} else{
 return"you chose wrong";
}


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
     return 'You Won';
   } else {
     return "The Computer Won!";
   }
    }
   
    if(userChoice === 'scissor'){
   if(computerChoice === 'rock'){
     return 'The Computer Won!';
   } else {
     return "you Won"
   }
    }

    if(userChoice === 'rock'){
      if(computerChoice === 'scissor'){
        return "you Won"
      } else {
        return 'The Computer Won!';
      }
       }
   
     }
     

  

  function playGame (){
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
     document.getElementById("fourth").textContent = userChoice;
   
    document.getElementById("third").textContent =  computerChoice;
    document.getElementById("second").textContent =   determineWinner(userChoice,computerChoice);
    
  }

  








  