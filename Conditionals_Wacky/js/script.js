//Guerra, Andre 02/20/14 Conditionals - Wacky

var holdBreath = prompt("How long, in seconds, can you hold your breath?"); //Set first possible true for logical operator
var weight = prompt("How much do you weight?"); //Set second possible true for logical operator
var flexible = prompt("Are you flexible? Enter yes or no"); //Set third possible true for logical operator

if (holdBreath === ""){ //Check if holdBreath var is empty
	holdBreath = prompt("Oops! It looks like you forgot to insert how many seconds you can hold your breath. Please enter how many seconds now:"); //Prompt user to insert an input for var holdBreath
}

if (weight === "") { //Check if weight var is empty
	weight = prompt("Oops! It looks like you forgot to input a weight. Please input one now:"); //Prompt user to insert an input for var weight
}

if (flexible === ""){ //Check if flexible var is empty
	flexible = prompt("Oops! It looks like you forgot say if you're flexible or not. Please enter yes or no:"); //Prompt user to insert an input for var flexibility
}

(weight < 200 && holdBreath > 120 && flexible === "yes") ? console.log("Congratulations! You would be able to survive a Houdini under water straight jacket stunt.") : console.log("If you were to attempt a Houdini water tank straight jack stunt, you would be either too big to get out of the tank and you would drown before you could squeeze your way out of the straight jacket. Tough break.") //Logical operator & Ternary to qulify if the user can perform the Houdini stunt