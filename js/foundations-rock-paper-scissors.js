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

game();