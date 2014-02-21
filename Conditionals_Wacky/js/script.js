//Guerra, Andre 02/20/14 Conditionals - Wacky

var holdBreath = prompt("How long, in seconds, can you hold your breath?");
var weight = prompt("How much do you weight?");
var flexible = prompt("Are you felixible? Yes or no");

if (weight === "") {
	weight = prompt("Oops! It looks like you forgot to input a weight. Please input one now:");
} else if (holdBreath = ""){
	holdBreath = prompt("Oops! It looks like you forgot to insert how many seconds you can hold your breath. Please enter how many seconds now:");
} else if (flexible = ""){
	flexible = prompt("Oops! It looks like you forgot say if you're flexible or not. Please enter yes or no:");
} else if (weight > 200) && else if (holdBreath < 120) && (flexible === "yes") {
	console.log("Congratulations! You would be able to survive a Houdini under water stunt.");
} else {
	console.log("It looks like you may be too fat to get out of the water tank and you would drown before you could squeeze your way out of the straight jacket. Tough break.");
}