const playerSelectionBtns = document.querySelector(".selectionContainer").children;
//playerSelection index: 0 = rock, 1 = paper, 2 = scissors
let playerScore = 0;
let computerScore = 0;

Array.from(playerSelectionBtns).forEach((btn) => {
  btn.addEventListener("click", () => {
    //get player and computer selection
    const playerSelection = btn.id.replace("Btn", "");
    const randomIndex = Math.floor(Math.random() * 3);
    const computerSelection = ["rock", "paper", "scissors"][randomIndex];
    
    //play round and get result
    const result = playRound(playerSelection, computerSelection);

    //display selection and result
    displayResults(playerSelection, computerSelection, result);
    });
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "TIE!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `YOU WIN!`;
    } else {
        computerScore++;
        return `YOU LOSE!`;
    }
}

function displayResults(playerSelection, computerSelection, result) {
    //Display player and computer selection
    document.getElementById(`playerPick`).textContent = playerSelection;
    document.getElementById(`computerPick`).textContent = computerSelection;

    //Display result and change color based on result
    document.getElementById(`result`).textContent = result;
    if(result === "YOU WIN!") {
        document.getElementById(`result`).style.color = "green";
    } else if(result === "YOU LOSE!") {
        document.getElementById(`result`).style.color = "red";
    } else{
        document.getElementById(`result`).style.color = "black";
    }

    //Display scores
    document.getElementById(`playerScore`).textContent = playerScore;
    document.getElementById(`computerScore`).textContent = computerScore;
}

document.getElementById("resetBtn")