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

/** 
 * Returns null if game was a tie, otherwise "P" for player or "C" for computer
 */
function playRound(playerSelection, computerSelection){

	if(playerSelection === computerSelection){
		console.log("Tie! Choose again!");
		return false;
	}

	let playerWins = false;

	switch(playerSelection.toUpperCase()){
		case "R":
			playerWins = computerSelection === "S";
			break;
		case "P":
			playerWins = computerSelection === "R";
			break;
		case "S":
			playerWins = computerSelection === "P";
			break;
	}

	if(playerWins){
		console.log("You win!");
		return "P";
	} else {
		console.log("Computer wins!");
		return "C";
	}
}

function game(){
	let round = 1;

	let computerWins = 0;
	let playerWins = 0;

	while(round <= 5){
		let playerChoice = prompt("Rock, Paper, or Scissors?")[0].toUpperCase();
		let outcome = playRound(playerChoice, getComputerChoice());
		if(outcome){
			round++;
			outcome == "P" ? playerWins += 1 : computerWins += 1;
		}
	}

	console.log(`Player wins: ${playerWins}`);
	console.log(`Computer wins: ${computerWins}`);
	console.log(`${playerWins > computerWins ? "Player" : "Computer"} is the final winner!`);
}

