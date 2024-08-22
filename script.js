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

function getHumanChoice() {

    let choice = prompt("Pick one: rock, paper, or scissors");

    let choiceStatement = 'you picked ' + choice;

    return choiceStatement;
    
}
