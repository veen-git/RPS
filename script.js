let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();





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
        if (choice === null) {
        return getHumanChoice();
    }    
    
        else if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors") {
            return choice;
        }    

        else {
            return getHumanChoice();
        }
            
    }

function playRound(humanSelection,computerSelection) {
    if (humanSelection == "rock") {
        if (computerSelection == "scissors") {
            humanScore = ++humanScore;
            return "Congrats, You win!!";
        }
        else if (computerSelection == "rock") {
            return "It's a draw.";
        }
        else {
            computerScore = ++computerScore;
            return "Computer wins, bad luck.";
        }
    }

    else if (humanSelection == "scissors") {
        if (computerSelection == "paper") {
            humanScore = ++humanScore;
            return "Congrats, You win!!"; 
        }
        else if (computerSelection == "scissors") {
            return "It's a draw."
        }
        else {
            computerScore = ++computerScore;
            return "Computer wins, bad luck.";
        }
    }

    else {
        if (computerSelection == "rock") {
            humanScore = ++humanScore;
            return "Congrats, You win!!";
        }
        else if (computerSelection == "paper") {
            return "It's a draw."
        }
        else {
            computerScore = ++computerScore;
            return "Computer wins, bad luck.";
        }
    }
 
}

let Statement = "You picked " + humanChoice + " and Computer picked " + computerChoice;

console.log(Statement);
console.log(playRound(humanChoice,computerChoice));



