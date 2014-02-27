//Guerra, Andre 02/27/14 Functions - Personal

//This anonymous function will calculate if you blink below, above the blinks per day average

var calcBlinks = function(blinksPM) { //set up anonymous function
	var blinks = blinksPM * 1440; //multiplies blinks by how many minutes in a day
	return blinks; //return to blinks outside of the function
}

var totalBlinks = calcBlinks(prompt('Please enter the amount of times you blink per minute')); //prompt user to imput blinks per minute

console.log("You blink a total of " + totalBlinks + " links per day."); //output result to console

if (totalBlinks <= 11400 && totalBlinks >= 10500) { //get average blinks
	console.log("You are average."); //result of being average
	
	} else if (totalBlinks < 10500) { //get below average blinks
		console.log("You are below average."); //result of being below average
} else {
	console.log("You are above the blinking average per day."); //else for being above average
}