//Guerra, Andre 02/27/14 Functions - Wacky

//Find out how much beer the college kids will drink

var amount = prompt("How many kegs will be at the party?"); //Sets the number of kegs that will be at the party

function calVolume(height,pi,radius) { //Functtion with 3 perameters to find the volume of the total kegs used
	var volume = height * pi * radius^2; //Volume equation
	return volume; //Bring outside of function
}

var beers = amount * 58.67 / 11.5; // Finds the amount of beers by ounces in the total volume of kegs
beers = Math.ceil(beers * 10) / 10; //This isn't something we learned yet, but this snippet will round the number of beers up to the nearest 10th

var liters = calVolume(20,12,3.14); //arguments for calVolume perameters

console.log("The college party animals will drink a total of " + liters * amount + " liters of beer at the party. Which comes out to to a total of " + beers + " beers"); // console output