//Guerra, Andre 02/27/14 Functions - Personal

//

var calcBlinks = function(blinksPM) {
	var blinks = blinksPM * 1440; //multiplies blinks by how many minutes in a day
	return blinks;
}

var dryness = prompt('Please enter the amount of times you blink per minute' + calcBlinks(15));

console.log(dryness);

if (dryness == 11,400) {
	console.log("You blink the average amount per day.");
	
	} else if (dryness < 11,400) {
		console.log("You are below the blinking average per day.");
	}	
} else {
	console.log("You are above the blinking average per day.");
}