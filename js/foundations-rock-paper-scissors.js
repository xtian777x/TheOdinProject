function computerPlay() {
	const playOptions = ["Rock","Paper","Scissors"];
	const randomElement = playOptions[Math.floor(Math.random() * playOptions.length)];

	return randomElement;
}

function playRound(playerSelection,computerSelection) {
	let player = playerSelection.toLowerCase();
	let computer = computerSelection.toLowerCase();
	let rules = new Object();	

	rules['rock'] = {};
	rules['paper'] = {};
	rules['scissors'] = {};

	rules['rock']['paper'] = "You lose! " + "Paper beats rock.";
	rules['rock']['scissors'] = "You win! " + "Rock beats scissors.";

	rules['paper']['rock'] = "You lose! " + "Rock beats paper.";
	rules['paper']['scissors'] = "You lose! " + "Scissors beat paper.";

	rules['scissors']['rock'] = "You lose! " + "Rock beats scissors.";
	rules['scissors']['paper'] = "You win! " + "Scissors beat paper.";

	if(player === computer){
		result = "It's a draw!!!";
	}else{
		result = rules[player][computer];
	}

	return result;
}

function game(){
	const states = ["rock","paper","scissors"];

	for (let i = 0; i < 5; i++) {
	    playerSelection = prompt("Your move!!!");
	    if (states.includes(playerSelection.toLowerCase())){
	    	computerSelection = computerPlay();
			console.log(playRound(playerSelection,computerSelection));
	    }else{
	    	console.log("What are you doing?????!!!!!")
	    }
		
	}

}

function playRound2(){
	if(playingQ){
		const playerSelection = this.getAttribute("data-weapon");
		const computerSelection = computerPlay();
		const result = playRound(playerSelection,computerSelection);
		const resultsContainer = document.querySelector('#results-container');
		const resultItem = document.createElement('div');

		resultItem.classList.add("result");
		resultItem.textContent = result;

		resultsContainer.appendChild(resultItem);
		nRounds++;
		if(nRounds===5){playingQ=false};
	}else{
		const outcomeContainer = document.querySelector('#outcome-container');
		const outcome = document.createElement('div');

		outcome.classList.add("result");
		outcome.textContent = "GAME OVER";

		outcomeContainer.appendChild(outcome);
	}
	
}

const buttons = document.querySelectorAll('.gameButton');

buttons.forEach(btn => btn.addEventListener("click",playRound2));
//game();

let playingQ = true;
let nRounds = 0;