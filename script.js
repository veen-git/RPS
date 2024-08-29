
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

function updateRound(text1, text2) {
    document.getElementById("Div1").textContent = text1;
    document.getElementById("Div2").textContent = text2;
  
}


function game (computerChoice,humanChoice) {
    
    let win = (computerChoice=="rock")?"paper": (computerChoice=="paper")?"scissors":"rock";
    let choiceText = `your choice: ${humanChoice}, computer choice: ${computerChoice}`;
    let pickWinner = (win == humanChoice)?"human":(humanChoice==computerChoice)?"draw":"computer"
    console.log(pickWinner);
    let winStatement = (win == humanChoice)?`${humanChoice} beats ${computerChoice} you win`:(humanChoice==computerChoice)?"its a draw":
    `${computerChoice} beats ${humanChoice}, computer wins`;
    scores[pickWinner]+=1;
    updateRound(choiceText,winStatement);
       
}

let scores={"human":0, "computer":0, "draw":0};

const newDiv = document.createElement("div");
newDiv.setAttribute("id", "Div1");
document.body.appendChild(newDiv)
const result = document.createElement("div");
result.setAttribute("id", "Div2");
document.body.appendChild(result)

const btn = document.querySelector(".buttonContainer");
btn.addEventListener("click", (event) => {
    
    let target = event.target;
    let humanChoice = target.id
    let computerSelection = getComputerChoice()


    game(computerSelection,humanChoice);

})



