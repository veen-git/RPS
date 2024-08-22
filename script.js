
function getComputerChoice() {
    let i = Math.random();
        if (i <= 0.33) {
          return "rock";
         }
        
        else if (i > 0.33 && i <= 0.66) {
           return "scissors";
        }

        else {
            return "paper";
        }    

    }

function getHumanChoice() {

    let choice = prompt("Pick one: rock, paper, or scissors");
        if (choice === null) {
        return;
    }    
    
        else if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors") {
            return choice;
        }    

        else {
            return getHumanChoice();
        }
            
    }


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanSelection,computerSelection) {

        if (humanSelection == "rock") {

            if (computerSelection == "scissors") {
                humanScore += 1;
                console.log("your choice: rock [] computer choice: scissors")
                console.log ("Congrats, You win!!");   
            }
            else if (computerSelection == "rock") {
                console.log("your choice: rock [] computer choice: rock")
                console.log("It's a draw.");
            }
            else {
                computerScore += 1;
                console.log("your choice: rock [] computer choice: paper")
                console.log("Computer wins, bad luck.");
            }   
        }


        else if (humanSelection == "scissors") {

            if (computerSelection == "paper") {
                humanScore += 1;
                console.log("your choice: scissors [] computer choice: paper")
                console.log("Congrats, You win!!"); 
            }
            else if (computerSelection == "scissors") {
                console.log("your choice: scissors [] computer choice: scissors")
                console.log("It's a draw.");
            }
            else {
                computerScore += 1;
                console.log("your choice: scissors [] computer choice: rock")
                console.log("Computer wins, bad luck.");
            }
        }


        else {
            if (computerSelection == "rock") {
                humanScore += 1;
                console.log("your choice: paper [] computer choice: rock")
                console.log("Congrats, You win!!");
            }
            else if (computerSelection == "paper") {
                console.log("your choice: paper [] computer choice: paper")
                console.log("It's a draw.");
            }
            else {
                computerScore += 1;
                console.log("your choice: paper [] computer choice: scissors")
                console.log("Computer wins, bad luck.");
            }
        }


        console.log("your Score: " + humanScore + "  Computer Score: " + computerScore)

    }

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice,computerChoice);

humanChoice = getHumanChoice();
computerChoice = getComputerChoice();
playRound(humanChoice,computerChoice);    

humanChoice = getHumanChoice();
computerChoice = getComputerChoice();
playRound(humanChoice,computerChoice);    

humanChoice = getHumanChoice();
computerChoice = getComputerChoice();
playRound(humanChoice,computerChoice);    

humanChoice = getHumanChoice();
computerChoice = getComputerChoice();
playRound(humanChoice,computerChoice);    

console.log(".")
console.log(".")
console.log(".")

if (computerScore > humanScore) {
    console.log("Game over! Computer wins :(")
}

else if (humanScore > computerScore) {
    console.log("Good Job, You win!!!")
}

else {
    console.log("It's a tie, nice try!")
}
}
        

console.log(playGame())

  
