const output = document.getElementById('textOutput');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

output.textContent = "Want to play? Make your move below!";

let playerWins = 0;
let computerWins = 0;

function updateOutput(string){
	output.textContent = string;
}

function updateScores() {
	playerScoreDisplay.textContent = `Player Score: ${playerWins}`;
	computerScoreDisplay.textContent = `Computer Score: ${computerWins}`;
}

function getComputerChoice(){
	let rand = Math.random() * 100;
	let choice;

	if(rand < 34){
		choice = "R";
	}
	else if(rand < 67){
		choice = "P";
	}
	else{
		choice = "S";
	}
	return choice;
}

function playRound(choice){
	const playerSelection = choice[0].toUpperCase(); 
	const computerSelection = getComputerChoice();

	if(playerSelection === computerSelection){
		updateOutput("Tie! Choose again!");
		return false;
	}

	let playerWon = false;

	switch(playerSelection){
		case "R":
			playerWon = computerSelection === "S";
			break;
		case "P":
			playerWon = computerSelection === "R";
			break;
		case "S":
			playerWon = computerSelection === "P";
			break;
	}

	if(playerWon){
		updateOutput("You win!");
		playerWins++;
	} else {
		updateOutput("Computer wins!");
		computerWins++;
	}

	updateScores();
}

addEventListener('click', (event) => {
	switch(event.target.id){
		case "rock":
		case "paper":
		case "scissors":
			playRound(event.target.id);
			break;
	}
});
