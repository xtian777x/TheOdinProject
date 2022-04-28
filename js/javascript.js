function add7(number){
	return number + 7
}

function multiply(a,b){
	return a*b
}

function capitalize(text){

	let firstChar = text.substring(0,1);
	let restOfText = text.substring(1);

	return firstChar.toUpperCase() + restOfText.toLowerCase();
}

function lastletter(text){
	return text.substr(-1)
}

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
let textNumber=[];
let fbText;


if(answer % 15 === 0){
	fbText = "FizzBuzz";	
}else{
	if(answer % 3 === 0){
		fbText = "Fizz";
	}else{
		if(answer % 5 === 0){
			fbText = "Buzz";
		}else{
			for (let i = 1; i <= answer; i++) {
			  textNumber[i-1] = i;
			};
			fbText = textNumber.join();
		}
	}
}



console.log("Result is : " + fbText);