const output = document.getElementById('textOutput');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');

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
		choice = "rock";
	}
	else if(rand < 67){
		choice = "paper";
	}
	else{
		choice = "scissors";
	}
	return choice;
}

function playRound(playerSelection){
	const computerSelection = getComputerChoice();

	playerChoiceDisplay.textContent = `You chose: ${playerSelection}`;
	computerChoiceDisplay.textContent = `Computer chose: ${computerSelection}`;


	if(playerSelection === computerSelection){
		updateOutput("Tie! Choose again!");
		return;
	}

	let playerWon = false;

	switch(playerSelection){
		case "rock":
			playerWon = computerSelection === "scissors";
			break;
		case "paper":
			playerWon = computerSelection === "rock";
			break;
		case "scissors":
			playerWon = computerSelection === "paper";
			break;
	}

	if(playerWon){
		updateOutput("You win! Choose again!");
		playerWins++;
	} else {
		updateOutput("Computer wins! Choose again!");
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
