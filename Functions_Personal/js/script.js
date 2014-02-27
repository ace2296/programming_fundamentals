//Guerra, Andre 02/27/14 Functions - Personal

//

var calcBlinks = function(blinksPM) {
	var blinks = blinksPM * 1440; //multiplies blinks by how many minutes in a day
	return blinks;
}

var totalBlinks = calcBlinks(prompt('Please enter the amount of times you blink per minute'));

console.log("You blink a total of " + totalBlinks + " links per day.");

if (totalBlinks <= 11400 && totalBlinks >= 10500) {
	console.log("You are average.");
	
	} else if (totalBlinks < 10500) {
		console.log("You are below average.");
} else {
	console.log("You are above the blinking average per day.");
}