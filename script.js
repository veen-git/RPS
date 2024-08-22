
function getComputerChoice() {
    let i = Math.random();
        if (i <= 0.33) {
          return "rock";
         }
        
        else if (0.33 < i <= 0.66) {
           return "paper";
        }

        else {
            return "scissors";
        }    
    
}

